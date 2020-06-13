module.exports = (sequelize, DataTypes) => {
    const Destino = sequelize.define("Destino", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pais: DataTypes.STRING,
        cidade: DataTypes.STRING
    },{
        tableName:'destino'
    })

    Destino.associate = models => {
        Destino.belongsToMany(models.Pacote, {
            through: models.DestinoPacote,
            as: 'pacotes',
            foreignKey: 'destinoId',
        })
    }

    return Destino;
}