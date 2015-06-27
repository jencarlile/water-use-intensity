var express = require('express');
var bodyParser = require('body-parser');
var Keen = require('keen-js');

// Define our app using express
var app = express();

// Configure app to use bodyParser(), which allows us to get data from a POST
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/client'));

app.listen(port);
console.log("Magic happens on port " + port);

var client = new Keen({
    projectId: "5548294759949a3f905bce07",
    writeKey: "f09087ef5e4612c04e7da58c35cbc7d34ddffc65911cd1b01672d6a7698120c23bfa76eb97f0ac447607ff29e718073d6f245209cd273a666440513b813f6239a23d980c319f0027bbe32232914d4ad4357b8ff07f3803af9f028e47b345a544d8a04ebe467e9ee5f66c70c24be79844",
    readKey: "ceec78259391c271d89776e1683927ca720cb5f9fa48eda4612b46787e994aeae2030199e1580181e3baecfbadce44e6ff53ac2bf58e98b92386b7122e719860c42f1ea6f7b074b0820d7f2d0084779ff9b7d85dbd422efbd1f86eeac918e340f8cc9a0367e8bf2ff38b390d69559c24"
});
