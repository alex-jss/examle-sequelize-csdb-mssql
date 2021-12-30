'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
        CREATE DATABASE [sDataBase]
        CONTAINMENT = NONE
        ON  PRIMARY
        ( NAME = N'sDataBase', FILENAME = N'C:\\tempSql\\sDataBase.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
        LOG ON
        ( NAME = N'sDataBase_log', FILENAME = N'C:\\tempSql\\sDataBase_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
        WITH CATALOG_COLLATION = DATABASE_DEFAULT
      `).then(async () => {
      await queryInterface.sequelize.query(`
          CREATE TABLE [sDataBase].[dbo].[tableBs](
          [id] [int] IDENTITY(1,1) NOT NULL,
          [codeId] int NOT NULL,
          [createdAt] [datetimeoffset](7) NOT NULL,
          [updatedAt] [datetimeoffset](7) NOT NULL,
          PRIMARY KEY CLUSTERED
          (
          [id] ASC
          )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
          ) ON [PRIMARY]
        `).then(async () => {
        await queryInterface.sequelize.query(`
          INSERT INTO [sDataBase].[dbo].[tableBs]
          VALUES
            (1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
        `);
      });
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
        DROP DATABASE [sDataBase]
      `);
  }
};
