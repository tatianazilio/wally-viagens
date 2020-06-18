const { Pacote, Destino, DestinoPacote } = require("../models");

let indexController = {
    index: async (_req, res) => {
        try {
            const pacotes = await Pacote.findAll({ limit: 4 });
            
            const pacotesNacionais = await Pacote.findAll({
                include: { 
                    model: Destino, through: DestinoPacote, as: 'destinos', where: {pais: 'Brasil'},
                },
                limit: 4,
             });
             
            /*const pacotesInternacionais = await Pacote.findAll({
                include: { 
                    model: Destino, through: DestinoPacote, as: 'destinos', where: {pais: {$notLike: '%Brasil'}},
                },
                limit: 4,
            });

            console.log(pacotesInternacionais); */
            

        return res.render('index', { pacotes, pacotesNacionais, /*pacotesInternacionais */ });
        } catch (error) {
            console.log(error);
            return res.render('error', {error});
        }
    }
}
module.exports = indexController;
