var React = require('react');
var FluxProduct = require('./FluxProduct.react.js');
var ProductStore = require('../stores/ProductStore.js');
var FluxCart = require('./FluxCart.react.js');
var CartStore = require('../stores/CartStore.js');

function getCartState(){
  return{
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected(),
    cartVisible: CartStore.getCartVisible()
  }
};

var FluxCartApp = React.createClass({
  getInitialState: function(){
    console.log(getCartState());
    return getCartState();
  },

  componentDidMount: function(){
    CartStore.addChangeListener(this.onChange);
    ProductStore.addChangeListener(this.onChange);
    console.log(this.state);
  },

  componentWillUnmount: function(){
    CartStore.removeChangeListener(this.onChange);
    ProductStore.removeChangeListener(this.onChange);
  },

  render: function(){
    return (
      <div className="flux-cart-app">
        <FluxCart visible={this.state.cartVisible}/>
        <FluxProduct product={this.state.product} selected={this.state.selectedProduct}/>
      </div>
    )
  },

  onChange: function() {
    this.setState(getCartState());
  }
});

module.exports = FluxCartApp;