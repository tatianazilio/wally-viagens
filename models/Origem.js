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
        tableName:'origem'
    })

    Origem.associate = models => {
        Origem.belongsToMany(models.Pacote, {
            through: models.OrigemPacote,
            as: 'pacotes',
            foreignKey: 'pacoteId',
        })
    }

    return Origem;
}