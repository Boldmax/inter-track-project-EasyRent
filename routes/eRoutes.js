const express = require('express');
const router = express();
const eRentDb = require('../model/eModel')



router.get('/', (req, res,) =>{

    try {
        console.log('are you there')
        let rent = new eRentDb({
            Area: 'Lagos island',
            Size: 'Flat',
            Price: 10000000
        });
        rent.save()
        .then((result) => {
            res.json(result)
        })
    } catch (err) {
        return json({message: err.megssage})
    }
})

router.get('/all', async (req, res) => {
    
    try {
        const results = await eRentDb.find()
        return res.json(results);
    } catch (err) {
        return json({message: err.message})
    } 
    
});


module.exports = router;