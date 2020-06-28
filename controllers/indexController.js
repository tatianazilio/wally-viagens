require('dotenv').config();
const { Pacote, Destino, DestinoPacote } = require("../models");
const { Op } = require("sequelize");


let indexController = {

    index: async (req, res) => {
        const API_KEY = process.env.API_KEY;
        const usuario = (req.session.usuario) ? req.session.usuario : false;
        try {
            const pacotes = await Pacote.findAll({ limit: 4 });
            const pacotesNacionais = await Pacote.findAll({
                include: { 
                    model: Destino, through: DestinoPacote, as: 'destinos', where: {pais: 'Brasil'},
                },
                limit: 4,
             });
            
            const pacotesInternacionais = await Pacote.findAll({
                include: { 
                    model: Destino, through: DestinoPacote, as: 'destinos', where: {pais: {[Op.not]: 'Brasil'}},
                },
                limit: 4,
            });
            
            return res.render('index', { pacotes, pacotesNacionais, pacotesInternacionais, API_KEY, usuario });
        } catch (error) {
            const usuario = (req.session.usuario) ? req.session.usuario : false;
            return res.render('error', { error, usuario });
        }
    }
}

module.exports = indexController;
