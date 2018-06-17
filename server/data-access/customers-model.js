const Sequelize = require('sequelize');
const dataAccess = require('./data-access');
const Companies = require('../data-access/companies-model');
const Comments = require('../data-access/comments-model'); 

const Customers = dataAccess.connection.define('customers', {
    customer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING(20)
    },
    lastName: {
        type: Sequelize.STRING(20)
    },
    company_id: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING(50)
    },
    phone: {
        type: Sequelize.STRING(10)
    }
});

Customers.belongsTo(Companies, { foreignKey: 'company_id' });
Customers.hasMany(Comments, { foreignKey: 'customer_id' });
module.exports = Customers;
