require('dotenv').config();
const { Pacote, Destino, DestinoPacote, Ambiente, AmbientePacote, Atracao, AtracaoPacote } = require("../models");
const { Op } = require("sequelize");


let indexController = {

    index: async (req, res) => {
        const API_KEY = process.env.API_KEY;
        const usuario = (req.session.usuario) ? req.session.usuario : false;
        try {
            const pacotes = await Pacote.findAll({
                include: [{ all: true }],
                limit: 4 
            });

            
            const pacotesNacionais = await Pacote.findAll({
                include: [{ 
                    model: Destino, through: DestinoPacote, as: 'destinos', where: {pais: 'Brasil'},
                }, {
                    model: Ambiente, through: AmbientePacote, as: 'ambientes'
                }, {
                    model: Atracao, through: AtracaoPacote, as: 'atracoes'
                }],
                limit: 4,
             });
            
            const pacotesInternacionais = await Pacote.findAll({
                include: [{ 
                    model: Destino, through: DestinoPacote, as: 'destinos', where: {pais: {[Op.not]: 'Brasil'}},
                }, {
                    model: Ambiente, through: AmbientePacote, as: 'ambientes'
                }, {
                    model: Atracao, through: AtracaoPacote, as: 'atracoes'
                }],
                limit: 4,
            });
            
            return res.render('index', { pacotes, pacotesNacionais, pacotesInternacionais, API_KEY, usuario });
        } catch (error) {
            const usuario = (req.session.usuario) ? req.session.usuario : false;
            return res.render('error', { error, usuario });
        }
    },
    search: async (req, res) => {
        let { cidade, pais, ida, volta } = req.query;
        console.log(cidade, pais, ida, volta);
        
        try {
            let busca = await Pacote.findAll({
                where: {
                    '$destinos.pais$': { [Op.eq]: pais},
                    '$destinos.cidade$': { [Op.eq]: cidade},
                },
                include: { 
                    model: Destino, 
                    through: DestinoPacote,
                    as: 'destinos',
                }
            });
            console.log(busca);
            

            return res.render('resultadoBusca', { busca, usuario:req.session.usuario });

        } catch (error) {
            return res.render('error', { error });
        }

    }
}

module.exports = indexController;
