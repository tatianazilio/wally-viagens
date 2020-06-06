'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('atracao_has_pacote', {
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
      fk_atracao: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'atracao'
          },
          key: 'id'
        }
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('atracao_has_pacote');
  }
};