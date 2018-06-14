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
   console.log(req.body)
    Customers.create({
        customer_id:req.body.customer_id,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        company_id:req.body.company_id,
        email:req.body.email,
        phone:req.body.phone
    }).then((data) => {
        console.log(data);
        res.send(JSON.stringify("IT WOKRED!"))
    }, (err) => {
        console.error(err)
    });
});

module.exports = router;