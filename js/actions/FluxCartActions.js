var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var FluxCartConstants = require('../constants/FluxCartConstants');

var FluxCartActions = {
  receiveProduct: function(data){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    })
  },

  addToCart: function(update){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      update: update
    });
  },

  setSelected: function(index){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.SELECT_PRODUCT,
      data: index
    });
  },

};

module.exports = FluxCartActions;