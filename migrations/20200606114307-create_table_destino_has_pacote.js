'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('destino_has_pacote', {
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
      fk_destino: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'destino'
          },
          key: 'id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('destino_has_pacote');
  }
};