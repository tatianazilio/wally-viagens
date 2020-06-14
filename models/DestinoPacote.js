module.exports = (sequelize, DataTypes) => {
    const DestinoPacote = sequelize.define("DestinoPacote", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pacoteId: DataTypes.INTEGER,
        destinoId: DataTypes.INTEGER
    },{
        tableName:'destinoPacote',
    })

    return DestinoPacote;
}