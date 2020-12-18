import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {


  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map(stock => (
              <Stock handleStock={this.props.sell} stock={stock} key={stock.id} />
              ))
          }
      </div>
    );
  }

}

export default PortfolioContainer;
