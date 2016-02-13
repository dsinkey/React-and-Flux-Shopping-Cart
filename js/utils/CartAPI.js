var FluxCartActions = require('../actions/FluxCartActions.js');

module.exports = {
  getProductData: function(){
    var data = JSON.parse(localStorage.getItem('product'));
    FluxCartActions.receiveProduct(data);
  }
};