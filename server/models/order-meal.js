import Sequelize from 'sequelize';

export default (sequelize) => {
  const OrderMeal = sequelize.define(
    'OrderMeal',
    {
      mealId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        allowNull: true,
        references: {
          model: 'Meals',
          key: 'mealId',
          as: 'mealId'
        }
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
      delivered: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      orderId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        allowNull: true,
        references: {
          model: 'Orders',
          key: 'orderId',
          as: 'orderId'
        }
      },
    }
  );

  return OrderMeal;
};