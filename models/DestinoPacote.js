module.exports = (sequelize, DataTypes) => {
    const DestinoPacote = sequelize.define("DestinoPacote", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fk_pacote: DataTypes.INTEGER,
        fk_destino: DataTypes.INTEGER
    },{
        tableName:'destinoPacote',
        timestamps:false
    })

    return DestinoPacote;
}