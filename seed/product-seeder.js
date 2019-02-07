var Product = require('../models/product');
var mongoose = require('mongoose'); 

//mongoose.connect('localhost:27017/shopping'); 

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true })


var products = [
    new Product({
        imagePath: 'https://pinchofyum.com/wp-content/uploads/Best-Easy-Pasta-Salad-Recipe.jpg',
        title: 'Pasta Salad',
        description: 'Steak, Bell Pepper, Green Beans, Tomatoes, Carrot',
        price: 10
    }),
    new Product({
        imagePath: 'https://www.chelseasmessyapron.com/wp-content/uploads/2014/02/Best-Tomato-Basil-Soup5.jpg',
        title: 'Creamy Tomato Soup',
        description: 'Tomato, heavy cream, water, crutons, basil',
        price: 4.99
    }),
    new Product({
        imagePath: 'https://www.seriouseats.com/recipes/images/2013/04/040313-246922-Sunday-Supper-Jamaican-Beef-StewB.jpg',
        title: 'Stew Beef with Rice',
        description: 'Beef, tomato sauce, rice, vegetable oil',
        price: 8.99
    }),
    new Product({
        imagePath: 'https://mms.businesswire.com/media/20170327005591/en/577451/5/ARB17_TradGyro_solo_silo.jpg',
        title: 'Gyro',
        description: 'beef, ground beef, butter, olive oil',
        price: 8.99
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
