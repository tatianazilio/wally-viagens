const { Pacote, Ambiente, Atracao, Destino, Origem } = require("../models");

let pacoteController = {
    index: async (_req, res) => {
        try {
            const pacotes = await Pacote.findAll({
            attributes: ['id', 'nome']
            });
        return res.render('listaPacotes', { pacotes });
        } catch (error) {
            console.log(error);
            return res.render('error', {error});
        }
    },

    create: (_req, res) => {
        try {
            return res.render('cadastroPacote');
        } catch (error) {
            console.log(error);
            return res.render('error', {error});
        }
    },

    store: async (req, res) => {
        const { nome, dataDePartida, dataDeChegada, aereo, diarias, preco, descricao, destinoPais, destinoCidade, origemPais, origemCidade, ambiente, atracao } = req.body;
        const [imagem] = req.files;

        try {
            const pacote = await Pacote.create({
            nome,
            dataDePartida,
            dataDeChegada,
            aereo: (aereo == 'on') ? true : false,
            diarias,
            preco,
            descricao,
            imagem: imagem.filename
        });

        return res.redirect("/");

        } catch (error) {
            console.log(error);
            return res.render('error', {error});
        }
    },
    
    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const resultado = await Pacote.destroy({
                where: { id }
            });
            return res.redirect('/pacote/ver');
        } catch (error) {
            console.log(error);
            return res.render('error', {error});
        }
    },

}

module.exports = pacoteController;