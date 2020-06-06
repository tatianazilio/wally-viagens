'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pacote', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dataDePartida: {
        type: Sequelize.DATE,
        as: 'data-partida'
      },
      dataDeChegada: {
        type: Sequelize.DATE,
        as: 'data-chegada'
      },
      aereo: Sequelize.BOOLEAN,
      diarias: Sequelize.INTEGER,
      preco: Sequelize.DECIMAL,
      descricao: Sequelize.STRING,
      imagem: Sequelize.STRING,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pacote');
  }
};