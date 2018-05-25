export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: null,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: null,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: null,
    },
    phoneNo: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: null,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    role: {
      type: Sequelize.ENUM('caterer', 'customer', 'admin'),
      allowNull: false
    },
    passwordResetToken: {
      type: Sequelize.STRING,
      allowNull: true
    },
    passwordTokenExpiry: {
      type: Sequelize.BIGINT,
      allowNull: true
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
  down: queryInterface => queryInterface.dropTable('Users')
};