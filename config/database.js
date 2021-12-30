const Sequelize = require('sequelize');

module.exports = {

  fDb: new Sequelize('fDataBase', 'user', 'passw', {
    host: 'localhost',
    dialect: 'mssql',
    pool: {
      max: 1000,
      min: 0,
      idle: 30000
    },
    schema: 'fDataBase.dbo',
    options: {
      requestTimeout: 30000,
      dialectOptions: {
        encrypt: true
      },
      logging: true
    },
  }),

  sDb: new Sequelize('sDataBase', 'user', 'passw', {
    host: 'localhost',
    dialect: 'mssql',
    schema: 'sDataBase.dbo',
    options: {
      requestTimeout: 30000,
      dialectOptions: {
        encrypt: true
      },
      logging: true
    },
  })

};
