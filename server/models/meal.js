import Sequelize from 'sequelize';

export default (sequelize) => {
  const Meal = sequelize.define(
    'Meal',
    {
      userId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        allowNull: true,
      },
      mealId: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      img: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    }, { paranoid: true }
  );

  Meal.associate = (models) => {
    Meal.belongsTo(models.User, {
      as: 'caterer',
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    Meal.belongsToMany(models.Menu, {
      through: models.MenuMeal,
      foreignKey: 'mealId',
    });

    Meal.belongsToMany(models.Orders, {
      through: models.OrderMeal,
      foreignKey: 'mealId',
    });
  };

  return Meal;
};