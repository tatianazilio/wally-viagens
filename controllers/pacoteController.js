let PacoteController = {
    viewForm: (_req, res) => {
        return res.render('cadastroPacote');
    },
    cadastrarPacote: (req, res) => {
        let { nome, dataDePartida, dataDeChegada, descricao, preco, diarias, aereo, hospedagemLocal, hospedagemNomeDoHotel, hospedagemDataDeEntrada, hospedagemDatadDeSaida, hospedagemPessoas, hospedagemEstelas, hospedagemDescricao, imagem } = req.body;

        res.redirect('/');
    }

}

module.exports = PacoteController;