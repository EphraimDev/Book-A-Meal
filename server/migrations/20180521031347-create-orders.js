export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    orderId: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      allowNull: true,
      defaultValue: null
    },
    /*preferredDeliveryMethod: {
      type: Sequelize.ENUM('pickup', 'home delivery'),
      allowNull: false,
      defaultValue: 'pickup'
    },*/
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
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Orders')
};