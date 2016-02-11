var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

var product = {};
var selected = null;

function loadProductData(data){
  console.log("This is from Product Store: ");
  console.log(data);

  product = data[0];
  selected = data[0].variants[0];
}

var ProductStore = {
  getProduct: function(){
    return product;
  }

};

AppDispatcher.register(function(payload){
  var action = payload.action;
  
  switch(action.actionType){
    case FluxCartConstants.RECEIVE_DATA: loadProductData(action.data);
      break;
  }

});

module.exports = ProductStore;