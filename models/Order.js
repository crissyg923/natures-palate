const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    allergy: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    status: {
      type:  DataTypes.STRING,
      allowNull: false,
      defaultValue: "New Order",
    },

    dish_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'dish',
        key: 'id',
      },
    },

    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'customer',
        key: 'id',
      },
    },

    customer_name: {
      type: DataTypes.STRING,
      references: {
        model: 'customer',
        key: 'name',
      },
    },

    employee_id: {
      type: DataTypes.STRING,
      references: {
        model: 'employee',
        key: 'id',
      },
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order',
  }
);

module.exports = Order;
