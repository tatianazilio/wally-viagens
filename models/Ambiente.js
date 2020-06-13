module.exports = (sequelize, DataTypes) => {
    const Ambiente = sequelize.define("Ambiente", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: DataTypes.STRING,
    },{
        tableName:'ambiente',
    })

    Ambiente.associate = models => {
        Ambiente.belongsToMany(models.Pacote, {
            through: models.AmbientePacote,
            as: 'pacotes',
            foreignKey: 'ambienteId',
        })
    }

    return Ambiente;
}