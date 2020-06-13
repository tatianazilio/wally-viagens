const { Pacote } = require("../models");

let indexController = {
    index: async (_req, res) => {
        try {
            const pacotes = await Pacote.findAll({ limit: 4 });
             /*const pacotesNacionais = await Pacote.findAll({
                where:
             }); */
             /*const pacotesInternacionais = await Pacote.findAll({
                where:
             }); */
        return res.render('index', { pacotes, /* pacotesNacionais, pacotesInternacionais */ });
        } catch (error) {
            console.log(error);
            return res.render('error', {error});
        }
    }
}
module.exports = indexController;
