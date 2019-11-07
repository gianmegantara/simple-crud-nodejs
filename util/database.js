const Sequelize = require('sequelize').Sequelize
const sequelize = new Sequelize('waw', 'root', 'tahugejrot', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;