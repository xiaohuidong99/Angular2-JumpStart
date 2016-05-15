"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    orderTotal:DataTypes.FLOAT

  }, {
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.State)
      },
      getAll: function(){
        return User.findAll();
      }
    }
  });

  return User;
};
