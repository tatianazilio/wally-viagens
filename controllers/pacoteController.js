const { Pacote, Ambiente, AmbientePacote, Atracao, AtracaoPacote, Destino, DestinoPacote, Origem, OrigemPacote } = require("../models");
const moment = require('moment');

let pacoteController = {
    index: async (_req, res) => {
        try {
            let pacotes = await Pacote.findAll({
            attributes: ['id', 'nome', 'dataDePartida', 'dataDeChegada']
            });

            pacotes.forEach(pacote => {
                pacote.ida = moment(pacote.dataDePartida).locale('pt-br').format('L');
                pacote.volta = moment(pacote.dataDeChegada).locale('pt-br').format('L');

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
            imagem: imagem.filename,
            destinos: [{pais: destinoPais, cidade: destinoCidade}],
            origens: [{pais: origemPais, cidade: origemCidade}],
            ambientes: [{nome: ambiente}],
            atracoes: [{nome: atracao}]
            }, {
                include: [
                    { model: Origem, through: OrigemPacote, as: 'origens' }, 
                    { model: Destino, through: DestinoPacote, as: 'destinos' }, 
                    { model: Ambiente, through: AmbientePacote, as: 'ambientes' }, 
                    { model: Atracao, through: AtracaoPacote, as: 'atracoes'}
                ]
            });
        
            return res.redirect("/pacote/ver");

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