var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions.js');

var FluxProduct = React.createClass({
  render: function(){
    var fromFluxProduct = this.props.product;
    console.log("This is from FluxProductComponent:");
    console.log(fromFluxProduct);

    return(
      <div>
        <img src={'img/' + this.props.product.image}></img>
        <div>
          <h1>{this.props.product.name}</h1>
          <p>{this.props.product.description}</p>
          <p>{this.props.product.price}</p>
        </div>
      </div>
    )
  }
});

module.exports = FluxProduct;