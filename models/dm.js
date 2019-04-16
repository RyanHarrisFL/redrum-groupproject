//Database for direct message feature
module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
      title: DataTypes.STRING,
      description: DataTypes.TEXT},
      {
        freezeTableName: true
      });
    return Message;
  };
  