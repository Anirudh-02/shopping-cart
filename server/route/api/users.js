const User  = require('../../db').User
const route = require('express').Router()

route.get('/', (req, res) => {
    //send array of users from database
    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: 'Could not retrieve users'
            })
        })
})

route.post('/', (req, res) => {
    //req to have name in it so create a new user
    if (req.body.flag === 'signup') {
        User.create({
            name: req.body.name,
            pass: req.body.pass
        })
            .then((user) => {
                res.status(201).send(user)
            })
            .catch((err) => {
                res.status(501).send({
                    error: 'could not add user'
                })
            })
    }
    if (req.body.flag === 'login') {
        User.findAll({
            where: {
                name: req.body.name,
                pass: req.body.pass
            }
        })
            .then((user) => {
                res.send({name: user[0].name})
            })  
            .catch((err) => {
                console.error(err);
            })
    }
})

module.exports = route