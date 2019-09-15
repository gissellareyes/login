'use strict';

var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('user', {
        nombre: {
            type: DataTypes.STRING
        },
        apellido_paterno: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING
        }
    });
    return User;
};