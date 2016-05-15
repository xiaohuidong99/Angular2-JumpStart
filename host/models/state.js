"use strict";

module.exports = function(sequelize, DataTypes) {
  var State = sequelize.define("State", {
    abbreviation: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      // associate: function(models) {
      //   State.hasOne(models.User, {
      //     onDelete: "CASCADE",
      //     foreignKey: {
      //       allowNull: false
      //     }
      //   });
      // }
    }
  });

  return State;
};
