'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ambiente_has_pacote', {
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
      ambienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'ambiente' },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ambiente_has_pacote');
  }
};