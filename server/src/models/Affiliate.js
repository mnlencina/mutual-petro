const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Affiliate', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true,
      },
      name:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      lastname:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      gender:{
         type: DataTypes.ENUM("F", "M"),
         allowNull: false,
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      postalcode:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      city:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      province:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      nationality:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      civilstatus:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthdate:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      type:{
        type: DataTypes.ENUM("titular", "familiar"),
        defaultValue: "titular",
      },
      del:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
      },
   });
};