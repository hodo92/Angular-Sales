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



router.delete('/removeCompany/:comp', (req, res) => {
    comp = req.params.comp;
    console.log("+++++++company remove++++++++++++++++" + comp);
    Companies.destroy({ where: { company_id: comp } }).then(data => {
        res.send(JSON.stringify(data))
        console.log('company id:' + comp + ' deleted');
    }, err => {
        console.error(err)
    });
});


module.exports = router;