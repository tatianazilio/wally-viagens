module.exports = (sequelize, DataTypes) => {
    const AmbientePacote = sequelize.define("AmbientePacote", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pacoteId: DataTypes.INTEGER,
        ambienteId: DataTypes.INTEGER
    },{
        tableName:'ambientePacote',
    })

    return AmbientePacote;
}