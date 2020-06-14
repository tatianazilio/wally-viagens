module.exports = (sequelize, DataTypes) => {
    const Pacote = sequelize.define("Pacote", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            dataDePartida: {
                type: DataTypes.DATE,
                as: 'data-partida'
            },
            dataDeChegada: {
                type: DataTypes.DATE,
                as: 'data-chegada'
            },
            aereo: DataTypes.BOOLEAN,
            diarias: DataTypes.INTEGER,
            preco: DataTypes.DECIMAL,
            descricao: DataTypes.STRING,
            imagem: DataTypes.STRING,
        }, {
            tableName: "pacote"
        });
        
        Pacote.associate = models => {
            Pacote.belongsToMany(models.Destino, {
                through: models.DestinoPacote,
                as: 'destinos',
                foreignKey: 'destinoId',
            })

            Pacote.belongsToMany(models.Origem, {
                through: models.OrigemPacote,
                as: 'origens',
                foreignKey: 'origemId',
            })

            Pacote.belongsToMany(models.Ambiente, {
                through: models.AmbientePacote,
                as: 'ambientes',
                foreignKey: 'ambienteId',
            })

            Pacote.belongsToMany(models.Atracao, {
                through: models.AtracaoPacote,
                as: 'atracoes',
                foreignKey: 'atracaoId',
            })
        }



        return Pacote;
}