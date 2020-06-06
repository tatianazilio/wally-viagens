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
        timestamps:false
    })

    Ambiente.associate = models => {
        Ambiente.belongsToMany(models.Pacote, {
            foreignKey: 'fk_pacote',
            as: 'pacotesPorAmbiente',
            through: models.AmbientePacote
        })
    }

    return Ambiente;
}