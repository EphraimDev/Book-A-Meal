import Sequelize from 'sequelize';

export default (sequelize) => {
  const Orders = sequelize.define(
    'Orders',
    {
      orderId: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'userId',
          as: 'userId'
        }
      },
      preferredDeliveryMethod: {
        type: Sequelize.ENUM('pickup', 'home delivery'),
        allowNull: false,
        defaultValue: 'pickup'
      },
      deliveryAddress: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      deliveryPhoneNo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('started', 'pending', 'delivered', 'canceled'),
        allowNull: true,
        defaultValue: 'started'
      },
    },
  );
 
  Orders.associate = (models) => {
    Orders.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'customer'
    });

    Orders.belongsToMany(models.Meal, {
      as: 'meals',
      through: models.OrderMeal,
      foreignKey: 'orderId'
    });

    Orders.hasMany(models.Notification, {
      foreignKey: 'orderId',
      as: 'notifications'
    });
  };

  return Orders;
};