const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const eRentDb = require('../model/eModel')



router.get('/', (req, res,) => {
    try {
        
    } catch (err) {
        return json({message: err.megssage})
    }
})


module.exports = router;