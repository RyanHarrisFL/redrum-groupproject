// var Sequelize = require(&quot;sequelize&quot;);
module.exports = function(Sequelize, DataTypes) {
  var tableOne = Sequelize.define("tableOne", {
    
    id: DataTypes.STRING,
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
  return tableOne;
  
};
console.log(tableOne);



