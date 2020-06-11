module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    }, {
        tableName: 'usuario',
        timestamps: false
    })

    return Usuario;
}