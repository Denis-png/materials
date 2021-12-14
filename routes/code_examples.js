const express = require('express');
const db = require('../models/database')
const fs = require('fs')
const path = require('path')
const router = express.Router();


router.get('/:chapter', function (req, res, next) {
    //console.log(path.join(__dirname,'../public/javascripts/code_examples/Lesson',`${req.params.chapter}.js`))
    fs.readFile(path.join(__dirname,'../public/javascripts/code_examples/',`Lesson${req.params.chapter}.js`), 'utf8', (err, data) => {
        if (err){
            console.log(err)
            return
        }
        return res.json(JSON.stringify(data))
    })
})




module.exports = router;
