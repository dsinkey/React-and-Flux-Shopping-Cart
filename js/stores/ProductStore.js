var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('event').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

var product = {};
var selected = null;

function loadProductData(data){
    product = data[0];
    selected = data[0].variants[0];
}