const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");
const { Pacote, Ambiente, AmbientePacote, Atracao, AtracaoPacote, Destino, DestinoPacote, Origem, OrigemPacote } = require("../models");
const moment = require('moment');
require('dotenv').config();

const pagamentoController = {

    view: async (req, res) => {
        try {
            let pacote = await Pacote.findByPk(req.params.id);
            console.log(pacote);
            
            return res.render('pagamento', { pacote, usuario:req.session.usuario });
        } catch (error) {
            console.log(error);
            return res.render('error', {error});
        }
    }

}

module.exports = pagamentoController;