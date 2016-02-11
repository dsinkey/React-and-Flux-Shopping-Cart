var FluxCartActions = require('../actions/FluxCartActions.js');

module.exports = {
  getProductData: function(){
    var data = JSON.parse(localStorage.getItem('product'));
    console.log(data);
    
    FluxCartActions.receiveProduct(data);
  }
};