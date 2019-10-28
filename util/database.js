//this connection is depend on your database it can be different
const mysql = require('mysql2')

const dbConnection = mysql.createPool({
    host: 'localhost', //hostname
    user: 'root', //username 
    password: 'tahugejrot', //password
    database: 'waw' //database name
})

module.exports = dbConnection.promise()