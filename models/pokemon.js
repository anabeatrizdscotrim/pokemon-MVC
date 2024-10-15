const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Pokemon = sequelize.define('pokemon', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  altura: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  peso: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  poder: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Pokemon;
