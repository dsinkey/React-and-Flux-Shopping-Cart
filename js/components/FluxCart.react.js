var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions.js');

var FluxCart = React.createClass({
  render: function() {
  var self = this;
  var products = this.props.products;
  
    return(
      <div>
        <div>
          <button type="button">Test Button</button>
        </div>
      </div>
    )
  }
});

module.exports = FluxCart;