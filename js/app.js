window.React = require('react');
var ProductData = require('./ProductData.js');
var CartAPI = require('./utils/CartAPI.js');
var FluxCartApp = require('./components/FluxCartApp.js');

ProductData.init();

CartAPI.getProductData();

React.render(
  <FluxCartApp />, document.getElementById('flux-cart')
);
