module.exports = (sequelize, DataTypes) => {
    const AtracaoPacote = sequelize.define("AtracaoPacote", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pacoteId: DataTypes.INTEGER,
        atracaoId: DataTypes.INTEGER
    },{
        tableName:'atracaoPacote'
    })

    return AtracaoPacote;
}