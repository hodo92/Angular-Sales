const express = require('express')
const router = express.Router()
const Companies = require('../data-access/companies-model');
const Customers = require('../data-access/customers-model');


router.get('/customers-api', (req, res) => {
    Customers.findAll({ include: [Companies] }).then(data => {
        console.log(data)
        res.send(JSON.stringify(data))
    }, err => {
        console.error(err)
    });
});

router.post('/addCustomer', (req, res) => {
    Customers.create({}).then((data) => {
        console.log(data);
        res.send(JSON.stringify("IT WOKRED!"))
    }, (err) => {
        console.error(err)
    });
});

module.exports = router;