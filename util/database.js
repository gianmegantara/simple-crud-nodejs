//this connection is depend on your database it can be different
// const mysql = require('mysql2')

// const dbConnection = mysql.createPool({
//     host: 'localhost', //hostname
//     user: 'root', //username 
//     password: 'tahugejrot', //password
//     database: 'waw' //database name
// })

// module.exports = dbConnection.promise()
const Sequelize = require('sequelize').Sequelize
const sequelize = new Sequelize('waw', 'root', 'tahugejrot', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;