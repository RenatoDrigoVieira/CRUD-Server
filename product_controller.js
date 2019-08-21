var express = require('express')
var router = express.Router()
var Department = require('./department')

router.post('/',(req,res)=>{
    let p = new Product({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        departments: req.body.departments
    })
    p.save((err,prod)=>{
        if(err){
            err.status(500).send(err)
        }else{
            res.status(200).send(prod)
        }
    })
})

router.get('/',(req,res)=>{
    Product.find().exec((err,prods)=>{
        if(err)
            res.status(500).send(err)
        else
            res.status(200).send(prods)     
    })
})

module.exports = router

