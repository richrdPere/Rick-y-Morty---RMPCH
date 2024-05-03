
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: true,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "Unkown"),
         allowNull: false,
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      gender: {
         type: DataTypes.ENUM("Female", "Male", "Genderless"),
         allowNull: false,
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false,
      }



   }, { timestamps: false });
};
