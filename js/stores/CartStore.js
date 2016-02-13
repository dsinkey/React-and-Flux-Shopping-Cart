var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var FluxCartConstants = require('../constants/FluxCartConstants.js');
var _ = require('underscore');

var products = {};
var cartVisible = false;

function add(sku, update){
  update.quantity = sku in products ? products[sku].quantity + 1 : 1;
  products[sku] = _.extend({}, products[sku], update);
};

function setCartVisible(cartVisible){
  cartVisible = cartVisible;
}

var CartStore = {

  getCartVisible: function(){
    return cartVisible;
  }
}

AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case FluxCartConstants.CART_VISIBLE: setCartVisible(action.cartVisible);
      break;
  }
});