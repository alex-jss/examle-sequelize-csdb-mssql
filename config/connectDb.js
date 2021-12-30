module.exports = {

  connectDb: () => {
    const fDb = require('./database').fDb;
    const sDb = require('./database').sDb;

    fDb.authenticate().then(() => {
      console.log('Connection has been established successfully. Database:', fDb.config.database);
      fDb.sync({logging: false}).then(() => {
        console.log('All models were synchronized successfully. Database:', fDb.config.database);
      }).catch((err) => {
        console.log('Unable all models synchronized. Database:', fDb.config.database, err);
      })
    }).catch(err => {
      console.error('Unable to connect to the database. Database:', fDb.config.database, err);
    });

    sDb.authenticate().then(() => {
      console.log('Connection has been established successfully. Database:', sDb.config.database);
      sDb.sync({logging: false}).then(() => {
        console.log('All models were synchronized successfully. Database:', sDb.config.database);
      }).catch((err) => {
        console.log('Unable all models synchronized. Database:', sDb.config.database, err);
      })
    }).catch(err => {
      console.error('Unable to connect to the database. Database:', sDb.config.database, err);
    });
  }

}
