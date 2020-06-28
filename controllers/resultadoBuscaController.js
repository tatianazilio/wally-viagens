const { Pacote, Destino, DestinoPacote } = require("../models");
const { Op } = require("sequelize");

let resultadoBuscaController = {

    index: async (req, res) => {
        try {
            const pacotes = await Pacote.findAll({ limit: 1 });
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
            console.log(req.session);
            
        return res.render('resultadoBusca', { pacotes, pacotesNacionais, pacotesInternacionais, usuario: req.session.usuario });
        } catch (error) {
            console.log(error);
            return res.render('error', {error});
        }
    }
}
module.exports = resultadoBuscaController;
