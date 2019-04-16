// Database for creating activity post
var moment = require("moment");

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define(
    "Post",
    {
      CreateDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          return moment
            .utc(this.getDataValue("CreateDate"))
            .format("YYYY-MM-DD");
        }
      },
      timePeriod: {
        type: DataTypes.STRING,
        defaultValue: "morning"
      },
      StartTime: {
        type: DataTypes.TIME,
        get: function() {
          let time = this.getDataValue("StartTime");

          if (moment(time, moment.ISO_8601, true).isValid()) {
            return moment(this.getDataValue("StartTime")).format("HH:mm:ss");
          } else {
            return time;
          }
        }
      },
      location: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      zip: DataTypes.INTEGER
    },
    {
      freezeTableName: true
    }
  );
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Post;
};
