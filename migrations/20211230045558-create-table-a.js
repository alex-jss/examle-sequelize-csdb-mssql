'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tableAs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {charset: 'utf8', collate: 'utf8_general_ci'}).then(async () => {
      await queryInterface.bulkInsert('tableAs', [
          {
            name: 'a1',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'a2',
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        ]
      )
    }).catch((err) => {
      console.log('migrate_tableAs', err);
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tableAs');
  }
};
