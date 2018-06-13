const express = require('express')
const router = express.Router()

const Companies = require('../data-access/companies-model');


router.get('/simpleGet', (req, res) => {
Companies.findAll().then(data => {
    console.log(data)
},err=> {console.error(err) } ) ; 

    res.send(JSON.stringify("work"))
});



router.post('/addCompany', (req, res) => {
    Companies.create({ company_id: "22222" , name: "Elbit", address: "12 Einstein St", country: "Israel" }).then((data) => {
        console.log(data);
    }, (err) => {
        console.error(err)
    });
    res.send(JSON.stringify("work"))
});

module.exports = router;