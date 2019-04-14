// var Sequelize = require(&quot;sequelize&quot;);

module.exports = function(sequelize, DataTypes) {
  var Tableone = sequelize.define("Tableone", {

    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    skillLevel: DataTypes.STRING,
    activityType: DataTypes.STRING, 
    photoUpload: DataTypes.STRING,
    gender: DataTypes.STRING,
    ageRange: DataTypes.STRING,
    zip: DataTypes.INTEGER

  });
  return Tableone;
  console.log("This is table one" + Tableone);
};




