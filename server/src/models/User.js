const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {

      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: true,
         autoIncrement: true

      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      }

   }, { timestamps: false });
};
