'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users.js');

const DATABASE_URL = 'postgres://siham@localhost:5432/lab07'


const sequelize = new Sequelize(DATABASE_URL, {});

module.exports = {
  db: sequelize,
  users: userSchema(sequelize, DataTypes),
}