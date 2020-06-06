module.exports = (sequelize, DataTypes) => {
    const Origem = sequelize.define("Origem", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pais: DataTypes.STRING,
        cidade: DataTypes.STRING
    },{
        tableName:'origem',
        timestamps:false
    })

    Origem.associate = models => {
        Origem.belongsToMany(models.Pacote, {
            foreignKey: 'fk_pacote',
            as: 'pacotesPorOrigem',
            through: models.OrigemPacote
        })
    }

    return Origem;
}