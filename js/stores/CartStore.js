var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants.js');
var _ = require('underscore');

var products = {};
var _cartVisible = null;

function add(sku, update){
  update.quantity = sku in products ? products[sku].quantity + 1 : 1;
  products[sku] = _.extend({}, products[sku], update);
};

function setCartVisible(cartVisible){
  console.log("setCartVisible called " + cartVisible);
  _cartVisible = cartVisible;
}

var CartStore = _.extend({}, EventEmitter.prototype, {
  getCartItems: function(){
    return products;
  },

  getCartVisible: function(){
    return _cartVisible;
  },

  emitChange: function(){
    this.emit('change');
  },

  addChangeListener: function(callback){
    this.on('change', callback);
  },

  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case FluxCartConstants.CART_VISIBLE: setCartVisible(action.cartVisible);
    console.log('AppDispatcher cartVisible');
      break;
    case FluxCartConstants.CART_ADD: add(action.sku, action.update);
      break;
    default:
      return true;
  }

  CartStore.emitChange();

  return true;
});

module.exports = CartStore;