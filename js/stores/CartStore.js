var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants.js');
var _ = require('underscore');

var _products = {};
var _cartVisible = false;

function add(sku, update){
  update.quantity = sku in _products ? _products[sku].quantity + 1 : 1;
  _products[sku] = _.extend({}, _products[sku], update);
};

function setCartVisible(cartVisible){
  _cartVisible = cartVisible;
}

var CartStore = _.extend({}, EventEmitter.prototype, {
  getCartItems: function(){
    return _products;
  },

  getCartCount: function(){
    return Object.keys(_products).length;
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
  console.log(action);

  switch(action.actionType){
    case FluxCartConstants.CART_VISIBLE: setCartVisible(action.cartVisible);
      break;
    case FluxCartConstants.CART_ADD: add(action.sku, action.update);
      console.log(action.sku);
      console.log(action.update);
      break;
    default:
      return true;
  }

  CartStore.emitChange();

  return true;
});

module.exports = CartStore;