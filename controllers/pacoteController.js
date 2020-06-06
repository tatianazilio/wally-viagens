const Pacote = require("../models/Pacote");

let pacoteController = {
    index: async (_req, res) => {
            const pacotes = await Pacote.findAll();
        return res.render('pacotes', { pacotes });
    },
    visualizarCadastro: (_req, res) => {
        return res.render('cadastroPacote');
    },
    cadastrarPacote: (req, res) => {
        let { nome, dataDePartida, dataDeChegada, descricao, preco, diarias, aereo, hospedagemLocal, hospedagemNomeDoHotel, hospedagemDataDeEntrada, hospedagemDatadDeSaida, hospedagemPessoas, hospedagemEstelas, hospedagemDescricao, imagem } = req.body;

        res.redirect('/');
    }

}

module.exports = pacoteController;