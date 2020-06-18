module.exports = (sequelize, DataTypes) => {
    const Atracao = sequelize.define("Atracao", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: DataTypes.STRING,
    },{
        tableName:'atracao'
    })

    Atracao.associate = models => {
        Atracao.belongsToMany(models.Pacote, {
            through: models.AtracaoPacote,
            as: 'pacotes',
            foreignKey: 'atracaoId',
        })
    }

    return Atracao;
}