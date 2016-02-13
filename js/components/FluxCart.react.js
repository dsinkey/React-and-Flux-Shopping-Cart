var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions.js');

var FluxCart = React.createClass({
  render: function() {
  var self = this;
  var products = this.props.products;

    return(
      <div className="flux-cart active">
        <div className="mini-cart">
          <button type="button" className="closeCart">X</button>
          <ul>
            <li>
              <h1 className="name">Name</h1>
              <p className="type">Type</p>
              <p className="price">Price</p>
              <button type="button">Remove Button</button>
            </li>
          </ul>
          <span>Total: </span>
        </div>
      </div>
    )
  }
});

module.exports = FluxCart;