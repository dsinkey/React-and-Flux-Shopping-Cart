var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action){
  this.dispatcher({
    source: 'VIEW_ACTION',
    action: action
  });
};

module.exports = AppDispatcher;