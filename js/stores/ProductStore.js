var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

var product = {};
var selected = null;

function loadProductData(data){
  product = data[0];
  selected = data[0].variants[0];
}

var ProductStore = {
  getProduct: function(){
    return product;
  }

};

module.exports = ProductStore;