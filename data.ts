type Dog = {
  id: number
  ownerId: number
  name: string
  image: string
}

export const dogData: Dog[] = [
  {
    id: 1,
    name: 'Fluffy',
    ownerId: 1,
    image:
      'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Flooffy',
    ownerId: 1,
    image:
      'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Fleffy',
    ownerId: 2,
    image:
      'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Woofy',
    ownerId: 3,
    image:
      'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Waffy',
    ownerId: 3,
    image:
      'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'Weffy',
    ownerId: 3,
    image:
      'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

// ownerId 10

export const owners = [
  {
    id: 1,
    name: 'Nicolas',
    age: 34
  },
  {
    id: 2,
    name: 'Ed',
    age: 28
  },
  {
    id: 3,
    name: 'Elona',
    age: 24
  }
]

// One to Many
// An owner has many dogs
// A dog belongs to an owner

// Quotes
// An author has many quotes
// A quote belongs to an author

// Employees & Company
// A company has many employees
// An employee belongs to a company

// Mothers
// A mother can have many children
// A child has only one biological mother

// Albums
// An artist has many albums
// An album belongs to an artist

// Many to Many
