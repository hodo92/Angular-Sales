const express = require('express')
const router = express.Router()

const Companies = require('../data-access/companies-model');


router.get('/companies-api', (req, res) => {
Companies.findAll().then(data => {
    res.send(JSON.stringify(data))
},err=> {console.error(err) } ) ; 
});



router.post('/addCompany', (req, res) => {
    Companies.create({ company_id: "22222" , name: "Elbit", address: "12 Einstein St", country: "Israel" }).then((data) => {
      
    }, (err) => {
        console.error(err)
    });
    res.send(JSON.stringify("work"))
});

module.exports = router;