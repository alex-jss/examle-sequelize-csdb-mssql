'use strict';

const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database').sDb;

class TableB extends Model {
}

TableB.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    codeId: {
      allowNull: false,
      type: DataTypes.INTEGER
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
    tableName: 'tableBs',
    modelName: 'TableB',
  }
);
module.exports = TableB;
