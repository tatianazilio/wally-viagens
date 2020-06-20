module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        senha: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'usuario',
        timestamps: false
    })

    return Usuario;
}