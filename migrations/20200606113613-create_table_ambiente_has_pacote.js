'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ambiente_has_pacote', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fk_pacote: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'pacote'
          },
          key: 'id'
        }
      },
      fk_ambiente: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'ambiente'
          },
          key: 'id'
        }
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ambiente_has_pacote');
  }
};