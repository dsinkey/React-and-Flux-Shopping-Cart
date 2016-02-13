var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions.js');

var FluxCart = React.createClass({
  closeCart: function(){
    console.log("close cart");
    FluxCartActions.updateCartVisible(false);
  },

  openCart: function(){
    FluxCartActions.updateCartVisible(true);
    console.log("open cart");
  },

  render: function() {
  var self = this;
  var products = this.props.products;
  console.log(this.props);
    return(
      <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <button type="button" className="close-cart" onClick={this.closeCart}>X</button>
          <ul>
            <li>
              <h1 className="name">Name</h1>
              <p className="type">Type</p>
              <p className="price">Price</p>
              <button type="button" className="remove-item">Remove Button</button>
            </li>
          </ul>
          <span>Total: </span>
        </div>
         <button type="button" className="view-cart" onClick={this.openCart}>View Cart</button>
      </div>
    )
  }
});

module.exports = FluxCart;