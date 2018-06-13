const express = require('express')
const router = express.Router()

const Companies = require('../data-access/companies-model');


router.get('/simpleGet', (req, res) => {
Companies.findAll().then(data => {
    console.log(data)
},err=> {console.error(err) } ) ; 

    res.send(JSON.stringify("work"))
});

module.exports = router;