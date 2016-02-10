var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var FluxCartConstants = require('../constants/FluxCartConstants');

var FluxCartActions = {
  receiveProduct = function(){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    })
  }
};

module.exports = FluxCartActions;