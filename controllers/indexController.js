const { Pacote, Destino, DestinoPacote } = require("../models");
const { Op } = require("sequelize");

let indexController = {

    index: async (req, res) => {
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
            
        return res.render('index', { pacotes, pacotesNacionais, pacotesInternacionais, usuario: req.session.usuario });
        } catch (error) {
            console.log(error);
            return res.render('error', {error, usuario:req.session.usuario});
        }
    }
}
module.exports = indexController;
