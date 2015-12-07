'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  userId: String,
  addedOn: Date,
  imgSrc: String
});

module.exports = mongoose.model('Thing', ThingSchema);
