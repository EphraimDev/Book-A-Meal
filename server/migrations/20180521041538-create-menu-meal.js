export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('MenuMeals', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    mealId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      allowNull: true,
      defaultValue: null,
      references: {
        model: 'Meals',
        key: 'mealId',
        as: 'mealId'
      }
    },
    menuId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      allowNull: true,
      defaultValue: null,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),

  down: queryInterface => queryInterface.dropTable('MenuMeals')
};