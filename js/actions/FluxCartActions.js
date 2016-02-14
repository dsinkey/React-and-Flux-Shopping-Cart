var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var FluxCartConstants = require('../constants/FluxCartConstants');

var FluxCartActions = {
  receiveProduct: function(data){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    })
  },

  selectProduct: function(index){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.SELECT_PRODUCT,
      data: index
    });
  },

  addToCart: function(sku, update){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      update: update
    });
  },

  updateCartVisible: function(cartVisible){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    });
  },

  removeFromCart: function(sku){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_REMOVE,
      sku: sku
    });
  }
};

module.exports = FluxCartActions;