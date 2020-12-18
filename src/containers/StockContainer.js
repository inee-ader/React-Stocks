import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.displayed.map(stock => (
            <Stock handleStock={this.props.buy} stock={stock} key={stock.id} /> 
          ))
        }
      </div>
    );
  }

}

export default StockContainer;
