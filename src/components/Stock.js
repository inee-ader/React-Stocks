import React from 'react'

const Stock = ({stock, handleStock}) => (
  <div>

    <div onClick={()=>handleStock(stock)} className="card">
      <div className="card-body">
        <h5 className="card-title">{
            stock.name  
          }</h5>
        <p className="card-text">{
            stock.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
