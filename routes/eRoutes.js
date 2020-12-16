const express = require('express');
const router = express.Router();
const eRentDb = require('../model/eModel')



router.get('/', async (req, res,) => {

    try {
        console.log('router is up...')
        let results = await eRentDb.find()
        if (results == null) {
            return res.status(404).json({ message: 'Cannot find result' })
        } else {
            return res.json(results)
        }

    } catch (err) {
        return json({ message: err.message })
    }
})

router.get('/:Size/:Area/:Price', async (req, res) => {

    try {
        const results = await eRentDb.find(req.params)
        if (results == null) {
            return res.status(404).json({ message: 'Cannot find result' })
        } else {
            console.log(results)
            return res.json(results)
        }
    } catch (err) {
        return json({ message: err.message })
    }

});

router.post('/', async (req, res) => {
    let result = new eRentDb({
        Area: req.body.Area,
        Size: req.body.Size,
        Price: req.body.Price
    })
    try {
        console.log(result)
        await result.save()
        res.status(201).json({ message: "House info added successfully" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

router.patch('/:id', searchResult, async (req, res) => {
    if (req.body.Area != null) {
        res.result.Area = req.body.area
    }
    if (req.body.Size != null) {
        res.result.Size = req.body.size
    }
    if (req.body.Price != null) {
        res.result.Price = req.body.price
    }
    try {
        const updatedResult = await response.subscriber.save()
        response.json(updatedResult)
    } catch (err) {
        response.status(400).json({ message: err.message })
    }
});

router.delete('/:id', (req, res) => {

})

async function searchResult(req, res, next) {
    let result
    try {
        result = await eRentDb.findById(req.params.id)
        if (result == null) {
            return res.status(404).json({ message: 'Cannot find result' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.result = result
    next()
}
module.exports = router;