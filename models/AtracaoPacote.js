module.exports = (sequelize, DataTypes) => {
    const AtracaoPacote = sequelize.define("AtracaoPacote", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fk_pacote: DataTypes.INTEGER,
        fk_atracao: DataTypes.INTEGER
    },{
        tableName:'atracaoPacote',
        timestamps:false
    })

    return AtracaoPacote;
}