module.exports = function(sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
    biking: DataTypes.BOOLEAN,
    yoga: DataTypes.BOOLEAN,
    surfing: DataTypes.BOOLEAN,
    weights: DataTypes.BOOLEAN,
    volleyball: DataTypes.BOOLEAN,
    basketball: DataTypes.BOOLEAN,
    swimming: DataTypes.BOOLEAN,
    rollerblading: DataTypes.BOOLEAN,
    tennis: DataTypes.BOOLEAN,
    mma: DataTypes.BOOLEAN,
    bikingSkillLevel: DataTypes.INTEGER,
    yogaSkillLevel: DataTypes.INTEGER,
    surfingSkillLevel: DataTypes.INTEGER,
    weightsSkillLevel: DataTypes.INTEGER,
    volleyballSkillLevel: DataTypes.INTEGER,
    basketballSkillLevel: DataTypes.INTEGER,
    swimmingSkillLevel: DataTypes.INTEGER,
    rollerbladingSkillLevel: DataTypes.INTEGER,
    tennisSkillLevel: DataTypes.INTEGER,
    mmaSkillLevel: DataTypes.INTEGER,
    
    }, 
    {
      freezeTableName: true
    });
    Activity.associate = function(models) {
      Activity.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Activity;
  };