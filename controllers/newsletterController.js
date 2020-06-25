const Sequelize = require("sequelize");
const config = require("../config/database");
const Newsletter = require("../models/");

const newsletterController = {
    
        store: async (req, res) => {
        const {newsmail} = req.body;
        const con = new Sequelize(config);

        
        const newsletter = await con.query(
            "INSERT INTO newsletter(email) values (:newsmail)",
            
           
            {
                replacements: {
                    newsmail:newsmail
                }, 
                type: Sequelize.QueryTypes.INSERT
            }
           
        )
        .catch(error => { console.log(error);
            return res.status(400).end()
            
        });

        return res.sendStatus(200).end()
        
        
    }
};

module.exports = newsletterController;