const sequelize = require('./config/database')
const auth = require('./routes/auth')
const user = require('./routes/user')
const post = require('./routes/post')

sequelize.sync({ alter: true }).then(function () {
    console.log('Tables created')
})
const express = require('express')
const app = express()


app.use(express.json())
//posting a new customer


app.listen(3000, function () {
    console.log('The server has started at port number 3000')
})
app.use('/api/auth', auth)
app.use('/api/users', user)
app.use('/api/posts', post)
