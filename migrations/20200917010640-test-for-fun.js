'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     addColumn('nemesis',{ type: Sequelize.BOOLEAN, defaultValue: 0 })
   

      
      return queryInterface.createTable('nemesis', { id: Sequelize.INTEGER });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('nemesis');
    
  }
};
