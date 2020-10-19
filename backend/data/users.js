import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Big Mode',
        email: 'Mode@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Big Chungus',
        email: 'chungus@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users