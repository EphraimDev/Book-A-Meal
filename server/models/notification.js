import Sequelize from 'sequelize';

export default (sequelize) => {
  const Notification = sequelize.define(
    'Notification',
    {
      notifId: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false
      },
    },
  ); 

  Notification.associate = (models) => {
    Notification.hasOne(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    Notification.hasOne(models.Menu, {
      foreignKey: 'menuId',
      onDelete: 'CASCADE',
    });

    Notification.hasOne(models.Orders, {
      foreignKey: 'orderId',
      onDelete: 'CASCADE',
    });

    Notification.hasOne(models.Meal, {
      foreignKey: 'mealId',
      onDelete: 'CASCADE',
    });
  };

  return Notification;
};