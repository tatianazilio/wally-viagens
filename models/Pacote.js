module.exports = (sequelize, DataTypes) => {
    const Pacote = sequelize.define(
        "Pacote", {
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
            descricao: DataTypes.STRING,
            preco: DataTypes.FLOAT,
            diarias: DataTypes.INTEGER,
            aereo: DataTypes.BOOLEAN,
            /* incluir campo 1: N
            fotos: 
            */

            /* incluir campos N:N
            origens: {pais, estado, cidade},
            atracoes: {id, nome},
            ambientes: {id, nome},
            hospedagens: {id, nome-hotel, data-entrada, data-saida, numero-pessoas, estrelas, refeicoes, descricao, cep, complemento, pais, estado, cidade, bairro, rua}
            localizacoes: {pais, cidade}
            */

        }
    )
}