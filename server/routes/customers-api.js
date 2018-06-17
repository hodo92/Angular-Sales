const express = require('express')
const router = express.Router()
const Companies = require('../data-access/companies-model');
const Customers = require('../data-access/customers-model');
const Comments = require('../data-access/comments-model');


router.get('/customers-api', (req, res) => {
    
    Customers.findAll({ include: [Companies] }).then(data => {
        
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
        
        res.send(JSON.stringify("IT WOKRED!"))
    }, (err) => {
        console.error(err)
    });
});



router.delete('/removeCustomer/:cust', (req, res) => {
    cust = req.params.cust;
    console.log("+++++++CUSTOMERID++++++++++++++++" + cust);
    Customers.destroy({ where: { customer_id : cust } }).then(data => {
        res.send(JSON.stringify(data))
        console.log('customer id:' + cust + ' deleted');
    }, err => {
        console.error(err)
    });
});


router.get('/getComments/:customer_id', (req, res) => {
    customer_id_num = req.params.customer_id;
    console.log("+++++" + customer_id_num);
    Comments.findAll({ where: { customer_id: customer_id_num } }).then(data => {
        res.send(JSON.stringify(data))
    }, err => {
        console.error(err)
    });
});


module.exports = router;