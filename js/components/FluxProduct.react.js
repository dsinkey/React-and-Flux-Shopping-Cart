var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions.js');

var FluxProduct = React.createClass({
  render: function(){
    return(
      <div className="flux-product">
        <img src={'img/' + this.props.product.image}></img>
        <div className="flux-product-detail">
          <h1 className="name">{this.props.product.name}</h1>
          <p className="description">{this.props.product.description}</p>
          <p className="price">{this.props.product.price}</p>
          <button type="button">Add to Cart</button>
        </div>
      </div>
    )
  }
});

module.exports = FluxProduct;