var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

var product = {};
var selected = null;

function loadProductData(data){
  product = data[0];
  selected = data[0].variants[0];
};

function setSelected(index){ 
  selected = product.variants[index];
};


var ProductStore = {
  getProduct: function(){
    return product;
  },

  getSelected: function(){
    return selected;
  },

};

AppDispatcher.register(function(payload){
  var action = payload.action;
  
  switch(action.actionType){
    case FluxCartConstants.RECEIVE_DATA: loadProductData(action.data);
      break;
    case FluxCartConstants.SELECT_PRODUCT: setSelected(action.data);
      break;
  }

});

module.exports = ProductStore;