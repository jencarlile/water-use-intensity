var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var mongoose = require('mongoose');

// Define our app using express
var app = express();

// Configure app to use bodyParser(), which allows us to get data from a POST
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/client'));

var router = express.Router();
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({message: "hooray! welcome to our api!" });
});

app.use('/api', router);

app.listen(port);
mongoose.connect('mongodb://aecHack:hackathon@ds053312.mongolab.com:53312/annual-water-use');

var Cat = mongoose.model('Cat', { name: String });

router.route('/cats')
    .post(function(req, res) {
        console.log("req", req.body);
        var cat = new Cat();
        cat.name = req.body.name;
        console.log("name", cat.name);

        cat.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Cat created!' });
        });

    });


console.log("Magic happens on port " + port);



