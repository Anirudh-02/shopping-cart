const Product = require('../../db').Product
const route = require('express').Router()
const { Op } = require('sequelize')

route.get('/', (req, res) => {
    console.log({logging: req.query.q});
    //send array of products from database
    Product.findAll({
        attributes: ['id', 'name', 'price', 'imgUrl'],
        where: {
            name: {
                [Op.substring]: `${(req.query.q).toLowerCase()}`
            }
        }
    })
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send({
                error: 'Could not retrieve products'
            })
        })
})

route.post('/', (req, res) => {
    //validate the values
    if (isNaN(parseFloat(req.body.price))) {
        return res.status(403).send({
            error: 'Price is not valid'
        })
    }

    //req to have name in it so create a new product
    Product.create({
        name: req.body.name,
        price: parseFloat(req.body.price),
        imgUrl: req.body.imgUrl //body has strings so need to parse it as float
    })
        .then((product) => {
            res.status(201).send(product)
        })
        .catch((err) => {
            res.status(501).send({
                error: 'could not add product'
            })
        })
})

module.exports = route