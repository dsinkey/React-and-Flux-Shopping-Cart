var React = require('react');
var FluxProduct = require('./FluxProduct.react.js');
var ProductStore = require('../stores/ProductStore.js');
var FluxCart = require('./FluxCart.react.js');
var CartStore = require('../stores/CartStore.js');

function getCartState(){
  return{
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected(),
    cartVisible: CartStore.getCartVisible(),
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
  }
};

var FluxCartApp = React.createClass({
  getInitialState: function(){
    return getCartState();
  },

  componentDidMount: function(){
    CartStore.addChangeListener(this.onChange);
    ProductStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function(){
    CartStore.removeChangeListener(this.onChange);
    ProductStore.removeChangeListener(this.onChange);
  },

  render: function(){
    return (
      <div className="flux-cart-app">
        <FluxCart products={this.state.cartItems} count={this.state.cartCount} visible={this.state.cartVisible} total={this.state.cartTotal}/>
        <FluxProduct product={this.state.product} cartitems={this.state.cartItems} selected={this.state.selectedProduct}/>
      </div>
    )
  },

  onChange: function() {
    this.setState(getCartState());
  }
});

module.exports = FluxCartApp;