import React, { Component } from 'react'



export default class Glasses extends Component {
  
  renderGlasses = () => {
    return this.props.arrProduct.map(product => {
      return <img onClick={() => {this.props.setGlasses(product.id)}} className="glasses" key={product.id} src={product.url} />
    })
  }
  render() {
    return (
      <div className="glassesContainer">
        {this.renderGlasses()}
      </div>
    )
  }
}
