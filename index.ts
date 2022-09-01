import express from 'express'
import cors from 'cors'
import { dogData, owners } from './data'

let dogs = dogData

const app = express()
app.use(cors())
app.use(express.json())

const port = 5678

app.get('/', (req, res) => {
  res.send(`
    <h1>Dog/owner API</h1>
    <h2>Available resources:</h2>
    <ul>
      <li><a href="/dogs">Dogs</a></li>
      <li><a href="/owners">Owners</a></li>
    </ul>
  `)
})

app.get('/dogs', (req, res) => {
  // WITH QUERY!
  // let dogsToSend = dogs

  // if (req.query.includeOwner === 'true') {
  //   dogsToSend = dogs.map(dog => {
  //     let owner = owners.find(owner => owner.id === dog.ownerId)
  //     return { ...dog, owner }
  //   })
  // }

  let dogsToSend = dogs.map(dog => {
    let owner = owners.find(owner => owner.id === dog.ownerId)
    return { ...dog, owner }
  })

  res.send(dogsToSend)
})

app.get('/dogs/:id', (req, res) => {})

app.post('/dogs', (req, res) => {
  let errors: string[] = []

  if (typeof req.body.name !== 'string') {
    errors.push('Name not given or not a string')
  }

  if (typeof req.body.image !== 'string') {
    errors.push('Image not given or not a string')
  }

  if (typeof req.body.ownerId !== 'number') {
    errors.push('OwnerId not given or not a number')
  }

  let owner = owners.find(owner => owner.id === req.body.ownerId)
  if (!owner) {
    errors.push(`Owner with id ${req.body.ownerId} doesn't exist.`)
  }

  if (errors.length === 0) {
    const newDog = {
      id: dogs.length === 0 ? 1 : dogs[dogs.length - 1].id + 1,
      name: req.body.name,
      image: req.body.image,
      ownerId: req.body.ownerId
    }
    dogs.push(newDog)
    res.send(newDog)
  } else {
    res.status(400).send({ errors })
  }
})

app.delete('/dogs/:id', (req, res) => {
  const id = Number(req.params.id)
  const indexToDelete = dogs.findIndex(dog => dog.id === id)

  if (indexToDelete > -1) {
    dogs = dogs.filter(dog => dog.id !== id)
    res.send({ message: 'Dog deleted successfully.' })
  } else {
    res.status(404).send({ error: 'Dog not found.' })
  }
})

app.patch('/dogs/:id', (req, res) => {
  // look for the dog
  let id = Number(req.params.id)
  let match = dogs.find(dog => dog.id === id)

  // if we found the dog:
  if (match) {
    if (req.body.name) {
      match.name = req.body.name
    }

    if (req.body.image) {
      match.image = req.body.image
    }

    if (req.body.ownerId) {
      match.ownerId = req.body.ownerId
    }

    res.send(match)
  } else {
    // if we don't find the dog:
    res.status(404).send({ error: 'Dog not found.' })
  }
})

app.get('/owners', (req, res) => {
  let ownersToSend = owners.map(owner => {
    const foundDogs = dogs.filter(dog => dog.ownerId === owner.id)
    return { ...owner, dogs: foundDogs }
  })
  res.send(ownersToSend)
})

app.post('/owners', (req, res) => {
  let errors: string[] = []

  if (typeof req.body.name !== 'string') {
    errors.push('Name not given or not a string')
  }

  if (typeof req.body.age !== 'number') {
    errors.push('Age not given or not a number')
  }

  if (errors.length === 0) {
    const newOwner = {
      id: owners.length === 0 ? 1 : owners[owners.length - 1].id + 1,
      name: req.body.name,
      age: req.body.age
    }
    owners.push(newOwner)
    res.send(newOwner)
  } else {
    res.status(400).send({ errors })
  }
})

app.listen(port, () => {
  console.log(`App running: http://localhost:${port}`)
})
