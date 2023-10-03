const USERS = [
  {
    id: 1,
    country: 'Belarus',
    name: 'Ivan',
    username: 'raivan',
    email: 'radioxivan@gmail.com',
    phoneNumber: '+9876543210'
  },
  {
    id: 2,
    country: 'India',
    name: 'Ram',
    username: 'Ram123',
    email: 'ram123@gmail.com',
    phoneNumber: '+9876543210'
  },
  {
    id: 3,
    country: 'India',
    name: 'Lakhan',
    username: 'Lakhan123',
    email: 'lakhan123@gmail.com',
    phoneNumber: '+9876543210'
  },
  {
    id: 4,
    country: 'India',
    name: 'Tan',
    username: 'Lakhan123',
    email: 'lakhan123@gmail.com',
    phoneNumber: '+9876543210'
  },
  {
    id: 5,
    country: 'India',
    name: 'Phu',
    username: 'Lakhan123',
    email: 'lakhan123@gmail.com',
    phoneNumber: '+9876543210'
  },
  {
    id: 6,
    country: 'India',
    name: 'Son',
    username: 'Lakhan123',
    email: 'lakhan123@gmail.com',
    phoneNumber: '+9876543210'
  },
  {
    id: 7,
    country: 'India',
    name: 'Hoang',
    username: 'Lakhan123',
    email: 'lakhan123@gmail.com',
    phoneNumber: '+9876543210'
  },
  {
    id: 8,
    country: 'India',
    name: 'Thoai',
    username: 'Lakhan123',
    email: 'lakhan123@gmail.com',
    phoneNumber: '+9876543210'
  },
  {
    id: 9,
    country: 'India',
    name: 'Trung',
    username: 'Lakhan123',
    email: 'lakhan123@gmail.com',
    phoneNumber: '+9876543210'
  },
  {
    id: 10,
    country: 'India',
    name: 'Nghia',
    username: 'Lakhan123',
    email: 'lakhan123@gmail.com',
    phoneNumber: '+9876543210'
  },
  {
    id: 11,
    country: 'India',
    name: 'David',
    username: 'Lakhan123',
    email: 'lakhan123@gmail.com',
    phoneNumber: '+9876543210'
  }
]

export const getUsers = async (
  country?: string,
  userID?: string | number,
  search?: string
) => {
  let users = [...USERS]
  if (country) {
    users = users.filter(user => user.country === country)
  }

  if (userID) {
    users = users.filter(user => user.id === userID)
  }

  if (search) {
    users = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  return Promise.resolve(users)
}

export const getCountries = async () => {
  return Promise.resolve([...new Set(USERS.map(user => user.country))])
}
