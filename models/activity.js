
// Creating database for list of activities
module.exports = function(sequelize, DataTypes) {
	var Activity = sequelize.define(
		'Activity',
		{
			biking: DataTypes.BOOLEAN,
			yoga: DataTypes.BOOLEAN,
			surfing: DataTypes.BOOLEAN,
			weights: DataTypes.BOOLEAN,
			volleyball: DataTypes.BOOLEAN,
			basketball: DataTypes.BOOLEAN,
			swimming: DataTypes.BOOLEAN,
			rollerblading: DataTypes.BOOLEAN,
			tennis: DataTypes.BOOLEAN,
			mma: DataTypes.BOOLEAN
		},
		{
			freezeTableName: true
		}
	);
	Activity.associate = function(models) {
		Activity.belongsTo(models.User, {
			foreignKey: {
				allowNull: true
			}
		});
	};
	return Activity;
};
