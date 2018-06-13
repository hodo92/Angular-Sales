
const Sequelize = require('sequelize'); 

const  dataAccess = require('./data-access'); 



const Companies = dataAccess.connection.define('companies', {
    company_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(20)
    },
    address: {
        type: Sequelize.STRING(20)
    },
    country: {
        type: Sequelize.STRING(20)
    }
});


module.exports = Companies;