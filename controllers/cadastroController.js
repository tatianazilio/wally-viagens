const { 
    Pacote, 
    Ambiente, 
    AmbientePacote, 
    Atracao, 
    AtracaoPacote, 
    Destino, 
    DestinoPacote, 
    Origem, 
    OrigemPacote 
} = require("../models");
const moment = require('moment');
require('dotenv').config();

let cadastroController = {
    index: async (req, res) => {
        try {
            let pacotes = await Pacote.findAll({
                attributes: ['id', 'nome', 'dataDePartida', 'dataDeChegada']
            });

            pacotes.forEach(pacote => {
                pacote.ida = moment(pacote.dataDePartida).locale('pt-br').format('L');
                pacote.volta = moment(pacote.dataDeChegada).locale('pt-br').format('L');
            });
            return res.render('listaPacotes', { pacotes, usuario:req.session.usuario });
        } catch (error) {
            console.log(error);
            return res.render('error', {error, usuario:req.session.usuario });
        }
    },

    view: async (req, res) => {
        try {
            let pacote = await Pacote.findByPk(req.params.id, {
                include: [{ all: true }],
            });

            return res.render('destino', { pacote, usuario:req.session.usuario});
            
        } catch (error) {
            console.log(error);
            return res.render('error', {error, usuario:req.session.usuario});
        }
    },

    create: (req, res) => {
        const API_KEY = process.env.API_KEY;
        try {
            return res.render('cadastroPacote', {usuario:req.session.usuario, API_KEY});
        } catch (error) {
            console.log(error);
            return res.render('error', {error, usuario:req.session.usuario});
        }
    },

    store: async (req, res) => {
        const { nome, 
            dataDePartida, 
            dataDeChegada, 
            aereo, 
            diarias, 
            preco, 
            descricao, 
            destinoPais, 
            destinoCidade, 
            origemCidade, 
            origemPais, 
            ambiente, 
            atracao 
        } = req.body;
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
            return res.redirect("/cadastro/lista");

        } catch (error) {
            return res.render('error', {error, usuario:req.session.usuario});
        }
    },
    
    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const resultado = await Pacote.destroy({ where: { id } });
            return res.redirect("/cadastro/lista");
        } catch (error) {
            return res.render('error', {error, usuario:req.session.usuario});
        }
    },

    //COMO CONFIGURAR A EXIBIÇÃO DA PÁGINA DE EDIÇÃO DE CADA PACOTE E O UPDATE?

    formUpdate: async (req, res)=>{
        const {id} = req.params;
        const pacote = await Pacote.findByPk(id, {
            include: [{ all: true }],
        })
        const destino = pacote.destinos[0];
        const origem = pacote.origens[0];
        const ambiente = pacote.ambientes[0];
        const atracao = pacote.atracoes[0];
        const API_KEY = process.env.API_KEY;
        return res.render('editarPacote', {id, pacote, destino, origem, ambiente, atracao, usuario:req.session.usuario, API_KEY});
    },

    update: async (req, res) => {
        const {id} = req.params;
        const { 
            nome, 
            dataDePartida, 
            dataDeChegada, 
            aereo, 
            diarias, 
            preco, 
            descricao, 
            destinoPais, 
            destinoCidade, 
            origemCidade, 
            origemPais, 
            ambiente, 
            atracao 
        } = req.body;
        let [imagem] = req.files;

        try {
            const pacote = await Pacote.update({
            nome,
            dataDePartida,
            dataDeChegada,
            aereo: (aereo == 'on') ? true : false,
            diarias,
            preco,
            descricao,
            imagem: imagem ? imagem.filename:undefined,
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
                ], 
                where: { id }
            });
            return res.redirect("/cadastro/lista");

        } catch (error) {
            return res.render('error', {error, usuario:req.session.usuario});
        }
    },

}

module.exports = cadastroController;