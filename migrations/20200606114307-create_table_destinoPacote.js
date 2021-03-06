'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('destinoPacote', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pacoteId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'pacote' },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      destinoId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'destino' },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('destinoPacote');
  }
};