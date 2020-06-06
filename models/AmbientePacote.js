module.exports = (sequelize, DataTypes) => {
    const AmbientePacote = sequelize.define("AmbientePacote", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fk_pacote: DataTypes.INTEGER,
        fk_ambiente: DataTypes.INTEGER
    },{
        tableName:'ambientePacote',
        timestamps:false
    })

    return AmbientePacote;
}