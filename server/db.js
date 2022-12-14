const Sequelize = require('sequelize')
require('dotenv').config()

let db
if (process.env.MYSQL_URL == 'localhost') {
    db = new Sequelize('shopdb', 'shopper', 'shoppass', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            min: 0,
            max: 5
        }
    })        
} else {
    db = new Sequelize(process.env.MYSQL_URL)
}

const User = db.define('users', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false
    },
    pass: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false
    }
})

const Product = db.define('products', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    imgUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
})

db.sync({alter: true})
    .then(() => {
        console.log('Database synced');
    })
    .catch((err) => {
        console.error(err);
    })

module.exports = {
    User, Product
}