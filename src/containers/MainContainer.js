import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [], 
    portfolio: [], 
    displayed: [],
    filterBy: "All", 
    checked: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => this.setState({stocks: data, displayed: data}))
  }

  buyStock = (stock) => {
    // console.log(stock)
    this.setState(prevState => ({
      portfolio: [...new Set([stock, ...prevState.portfolio])]
    }))
  }

  sellStock = (stock) => {
    // console.log(stock)
    this.setState(prevState => ({
      portfolio: prevState.portfolio.filter(stockItem => stockItem !== stock)
    }))
  }

  sortType = (e) => {
    // console.log(e.currentTarget.value)
    this.setState({
      checked: e.currentTarget.value
    })
    this.sortChange()
  }

  sortChange = () => {
    if(this.state.checked === "Alphabetically"){
      return [...this.state.stocks].sort((a,b) => a.ticker > b.ticker ? 1 : -1)
    }else if(this.state.checked === "Price"){
      return [...this.state.stocks].sort((a,b) => a.price > b.price ? 1 : -1)
    }else{
      return this.state.stocks
    }
  }

  filterBy = (e) => {
    this.setState({
      filterBy: e.target.value
    })
  }

  filterStocks = () => {
    if(this.state.filterBy !== "All"){
      return this.sortChange().filter(stock=>stock.type===this.state.filterBy)
    }else{
      return this.sortChange()
    }
  }

  render() {
    return (
      <div>
        <SearchBar checked={this.state.checked} filterBy={this.filterBy} sortType={this.sortType} />

          <div className="row">
            <div className="col-8">

              <StockContainer buy={this.buyStock} displayed={this.filterStocks()} />

            </div>
            <div className="col-4">

              <PortfolioContainer sell={this.sellStock} portfolio={this.state.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
