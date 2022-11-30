const Sequelize = require('sequelize');
const connection = require('../database/database');

const ConfigBot = connection.define('tb_bot', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    hora: {
        type: Sequelize.STRING,
        allowNull: false
    },
    local: {
        type: Sequelize.STRING,
        allowNull: false
    },
    msg: {
        type: Sequelize.STRING,
        allowNull: false
    },
    formato: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
})
//connection.sync({force: true});
//connection.sync();

module.exports = ConfigBot;