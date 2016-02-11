var React = require('react');
var FluxProduct = require('./FluxProduct.react.js');
var ProductStore = require('../stores/ProductStore.js');

var FluxCartApp = React.createClass({
  getInitialState: function(){
    return {
      product: ProductStore.getProduct()
    }
  },

  render: function(){
    return (
      <div>
        <FluxProduct product={this.state.product} />
      </div>
    )
  }
});

module.exports = FluxCartApp;