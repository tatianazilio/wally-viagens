module.exports = (sequelize, DataTypes) => {
    const Newsletter = sequelize.define("Newsletter", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: DataTypes.STRING,
    },{
        tableName:'newsletter'
    })

    return Newsletter;
}