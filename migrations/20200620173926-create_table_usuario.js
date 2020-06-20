'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('usuario', { 
        id: {
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
        },
          email: {
            type: Sequelize.STRING,
            allowNull:false,
        },
        senha: {
            type: Sequelize.STRING,
        }
  });
},

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('usuario');
  }
};
