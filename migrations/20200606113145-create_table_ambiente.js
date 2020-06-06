'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ambiente', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
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
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ambiente');
  }
};