

const db = require('../db.js')
const { DataTypes } = require('sequelize')

const UsersModel = db.define('USERS', {
    ID: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING
    },
    pass: {
        type: DataTypes.STRING
    },
    mail: {
        type: DataTypes.STRING
    },
    plantID: {
        type: DataTypes.STRING
    },
    firsTime: {
        type: DataTypes.STRING
    },
    profileImage: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'USERS',
    timestamps: false
});

module.exports = UsersModel;