var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var _ = require('lodash');

var BuildingRecord = require('./models/buildingRecord.js');

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
    console.log('Handling API request');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({message: "Welcome to the Water Usage Intensity App!" });
});

app.use('/api', router);

app.listen(port);
mongoose.connect('mongodb://aecHack:hackathon@ds053312.mongolab.com:53312/annual-water-use');

router.route('/buildingRecord')
    .post(function(req, res) {
        var bld = new BuildingRecord();
        console.log("Add Building", req.body);
        bld = _.assign(bld, req.body);
        bld.save(function(err) {
            if (err) { res.send(err); }
            res.json({ message: 'Building Record added, ' + bld });
        });
    })
    .get(function(req, res) {
        console.log("Query Params: ", req.query);
        BuildingRecord.find(req.query, function(err, buildings) {
            if (err) { res.send(err); }
            res.json(buildings);
        });
    })


console.log("Magic happens on port " + port);



