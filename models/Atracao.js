module.exports = (sequelize, DataTypes) => {
    const Atracao = sequelize.define("Atracao", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: DataTypes.STRING,
    },{
        tableName:'atracao',
        timestamps:false
    })

    Atracao.associate = models => {
        Atracao.belongsToMany(models.Pacote, {
            foreignKey: 'fk_pacote',
            as: 'pacotesPorAtracao',
            through: models.AtracaoPacote
        })
    }

    return Atracao;
}