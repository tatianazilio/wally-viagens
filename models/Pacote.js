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
            fk_destino: DataTypes.INTEGER,
            fk_origem: DataTypes.INTEGER,
            fk_ambiente: DataTypes.INTEGER,
            fk_atracao: DataTypes.INTEGER
        }, {
            tableName: "pacote",
            timestamp: false
        });
        
        Pacote.associate = models => {
            Pacote.belongsToMany(models.Destino, {
                foreignKey: 'fk_destino',
                as: 'destinosDoPacote',
                through: models.DestinoPacote
            })

            Pacote.belongsToMany(models.Origem, {
                foreignKey: 'fk_origem',
                as: 'origensDoPacote',
                through: models.OrigemPacote
            })

            Pacote.belongsToMany(models.Ambiente, {
                foreignKey: 'fk_ambiente',
                as: 'ambientesDoPacote',
                through: models.AmbientePacote
            })

            Pacote.belongsToMany(models.Atracao, {
                foreignKey: 'fk_atracao',
                as: 'atracaoDoPacote',
                through: models.AtracaoPacote
            })
        }



        return Pacote;
}