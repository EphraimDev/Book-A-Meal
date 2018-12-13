export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Order-meals', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    mealId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      allowNull: true,
      primaryKey: true,
      references: {
        model: 'Meals',
        key: 'mealId',
        as: 'mealId',
      },
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: true,
      default: 1,
      validate: {
        isInt: true,
        min: 1
      }
    },
    status: {
      type: Sequelize.ENUM('started', 'pending', 'delivered', 'canceled'),
      allowNull: true,
    },
    orderId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      allowNull: true,
      defaultValue: null
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
  }),
  down: queryInterface => queryInterface.dropTable('Order-meals')
}