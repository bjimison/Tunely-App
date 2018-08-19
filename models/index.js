// require mongoose and connect to database
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

var Album = require("./album");
var Song = require("./song");

module.exports = {
  Album: Album,
  Song: Song
};
