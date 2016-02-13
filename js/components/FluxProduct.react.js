var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions.js');



var FluxProduct = React.createClass({
  addToCart: function(event){
    console.log(this.props);
    var sku = this.props.selected.sku;
    var update = {
      name: this.props.product.name
    }
    FluxCartActions.addToCart(update);
    FluxCartActions.updateCartVisible(true);
  },

  selectVariant: function(event){
    FluxCartActions.selectProduct(event.target.value);
  },

  render: function(){
    return(
      <div className="flux-product">
        <img src={'img/' + this.props.product.image}></img>
        <div className="flux-product-detail">
          <h1 className="name">{this.props.product.name}</h1>
          <p className="description">{this.props.product.description}</p>
          <p className="price">{this.props.product.price}</p>
          <select onChange={this.selectVariant}>
            {this.props.product.variants.map(function(variant, index){
              return (
                <option key={index} value={index} >{variant.type}</option>
              )
            })}
          </select>
          <button type="button" onClick={this.addToCart}>Add to Cart</button>
        </div>
      </div>
    )
  }
});

module.exports = FluxProduct;