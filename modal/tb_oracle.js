const Sequelize = require('sequelize');
const connection = require('../database/database');

const DadosOracle = connection.define('tb_oracle', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    host: {
        type: Sequelize.STRING,
        allowNull: false
    },
    port: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pass: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//connection.sync({force: true});
//connection.sync();

module.exports = DadosOracle;