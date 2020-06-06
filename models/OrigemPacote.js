module.exports = (sequelize, DataTypes) => {
    const OrigemPacote = sequelize.define("OrigemPacote", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fk_pacote: DataTypes.INTEGER,
        fk_origem: DataTypes.INTEGER
    },{
        tableName:'origemPacote',
        timestamps:false
    })

    return OrigemPacote;
}