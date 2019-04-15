

module.exports = function(sequelize, DataTypes) {
  var Tableone = sequelize.define("Tableone", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    photoUpload: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    zip: DataTypes.INTEGER
  },
{
  freezeTableName: true
  });
  Tableone.associate = function(models) {
    Tableone.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Tableone;
};

//console.log("This is coming from tables model" + Tableone);


