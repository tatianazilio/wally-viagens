module.exports = (sequelize, DataTypes) => {
    const OrigemPacote = sequelize.define("OrigemPacote", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pacoteId: DataTypes.INTEGER,
        origemId: DataTypes.INTEGER
    },{
        tableName:'origemPacote',
    })

    return OrigemPacote;
}