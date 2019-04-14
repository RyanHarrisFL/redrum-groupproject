// var Sequelize = require(&quot;sequelize&quot;);
module.exports = function(Sequelize, DataTypes) {
  var Tableone = Sequelize.define("Tableone", {
    
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    photoUpload: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    zip: DataTypes.INTEGER

  });
  return Tableone;
};

//console.log("This is coming from tables model" + Tableone);


