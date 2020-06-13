'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('origem_has_pacote', {
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
      origemId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'origem' },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('origem_has_pacote');
  }
};