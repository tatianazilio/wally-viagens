const { Pacote, Ambiente, Atracao, Destino, Origem } = require("../models");

let pacoteController = {
    index: async (_req, res) => {
        const pacotes = await Pacote.findAll({
            attributes: ['id', 'nome']
        });
        return res.render('listaPacotes', { pacotes });
    },
    create: (_req, res) => {
        return res.render('cadastroPacote');
    },
    store: (req, res) => {
        const { nome, dataDePartida, dataDeChegada, aereo, diarias, preco, descricao, destinoPais, destinoCidade, origemPais, origemCidade, ambiente, atracao } = req.body;
        const [imagem] = req.files;

        const pacote = Pacote.create({
            nome,
            dataDePartida,
            dataDeChegada,
            aereo: (aereo == 'on') ? true : false,
            diarias,
            preco,
            descricao,
            imagem: imagem.filename,
        });
        const destinos = Destino.create({
            pais: destinoPais,
            cidade: destinoCidade
        });
        const origens = Origem.create({
            pais: origemPais,
            cidade: origemCidade
        });
        const ambientes = Ambiente.create({
            nome: ambiente
        });
        const atracoes = Atracao.create({
            nome: atracao
        })

        return res.redirect("/");
    },
    update: (req, res) => {},
    delete: async (req, res) => {
        const { id } = req.params
        const resultado = await Pacote.destroy({
            where: { id: id }
        })

        res.redirect('pacote/ver')
    },

}

module.exports = pacoteController;