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
        tableName:'destino',
        timestamps:false
    })

    Destino.associate = models => {
        Destino.belongsToMany(models.Pacote, {
            foreignKey: 'fk_pacote',
            as: 'pacotesPorDestino',
            through: models.DestinoPacote
        })
    }

    return Destino;
}