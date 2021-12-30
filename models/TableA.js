'use strict';

const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database').fDb;

class TableA extends Model {
}

TableA.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: true,
    tableName: 'tableAs',
    modelName: 'TableA',
  }
);
module.exports = TableA;

const TableB = require('./TableB');

TableA.belongsTo(TableB, {as: 'tableBOn', foreignKey: 'id'});
