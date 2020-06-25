'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('newsletter', { 
        id: {
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
        },
          email: {
            type: Sequelize.STRING,
            unique:true,
            notNull:true,            
        }
  });
},

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('newsletter');
  }
};
