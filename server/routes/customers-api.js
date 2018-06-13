const express = require('express')
const router = express.Router()
const Companies = require('../data-access/companies-model');
const Customers = require('../data-access/customers-model');


router.get('/getCustomers', (req, res) => {
    Customers.findAll({ include: [Companies] }).then(data => {
        console.log(data)
        res.send(JSON.stringify(data))
    }, err => {
        console.error(err)
    });
});

router.post('/addCustomer', (req, res) => {
    Customers.create({
        customer_id: 666666,
        firstName: "Perry",
        lastName: "Periwinkle",
        company_id: 1,
        email: "PPeriwink223@yahoo.com",
        phone: "9875552134"
    }).then((data) => {
        console.log(data);
        res.send(JSON.stringify("IT WOKRED!"))
    }, (err) => {
        console.error(err)
    });
});

module.exports = router;