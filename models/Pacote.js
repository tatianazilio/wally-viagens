module.exports = (sequelize, DataTypes) => {
    const Pacote = sequelize.define(
        "Pacote", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: DataTypes.STRING,
            dataPartida: {
                type: DataTypes.DATE,
                as: 'data-partida'
            },
            dataChegada: {
                type: DataTypes.DATE,
                as: 'data-chegada'
            },
            valor: DataTypes.FLOAT,
            descricao: DataTypes.STRING,
            passagem: DataTypes.BOOLEAN,
            diarias: DataTypes.INTEGER,
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