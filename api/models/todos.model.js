const { DataTypes } = require('sequelize');

// Utils
const { sequelize } = require('../util/database');

const Todos = sequelize.define('post', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(150),
    allowNull: false // NOT NULL
  },
  status: {
    // active | deleted
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'active'
  }
});

module.exports = { Todos };
