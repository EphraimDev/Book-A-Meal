export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Menus', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    menuId: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUID4,
      allowNull: false
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    userId: {
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
  down: queryInterface => queryInterface.dropTable('Menus')
}