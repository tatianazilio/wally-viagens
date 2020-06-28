const { Pacote, Destino, DestinoPacote } = require("../models");
const { Op } = require("sequelize");

let resultadoBuscaController = {

    search: async (req, res) => {
        console.log(req.query);
        

        return res.redirect("/cadastro/lista");
        

        /* try {
            busca = await Pacote.findAll({
                
            })
            return res.render('/resultadobusca', { pacotes, usuario:req.session.usuario })
        } catch (error) {
            return res.render('error', {error, usuario:req.session.usuario});
        } */
        

        /* try {
            const busca = await Pacote.findAll({
                where: {
                  destinos: 12
                }
              }, {
                include: [
                    { model: Destino, through: DestinoPacote, as: 'destinos' }, 
                ]
            });            
            return res.redirect("/cadastro/lista");

        } catch (error) {
            console.log(error);
            return res.render('error', {error, usuario:req.session.usuario});
        } */
    }
}
module.exports = resultadoBuscaController;
