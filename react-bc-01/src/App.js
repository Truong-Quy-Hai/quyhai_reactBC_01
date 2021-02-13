import React, { Component } from 'react';
import './App.css';
import Glasses from './components/Glasses';
import Header from './components/Header';
import Model from './components/Model';
export default class App extends Component {
  state = {
    glasses: {},
    arrProduct: [
      { id: 1, price: 30, name: 'GUCCI G8850U', url: './images/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
      { id: 2, price: 50, name: 'GUCCI G8759H', url: './images/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
      { id: 3, price: 30, name: 'DIOR D6700HQ', url: './images/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
      { id: 4, price: 30, name: 'DIOR D6005U', url: './images/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
      { id: 5, price: 30, name: 'PRADA P8750', url: './images/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
      { id: 6, price: 30, name: 'PRADA P9700', url: './images/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
      { id: 7, price: 30, name: 'FENDI F8750', url: './images/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
      { id: 8, price: 30, name: 'FENDI F8500', url: './images/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
      { id: 9, price: 30, name: 'FENDI F4300', url: './images/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    ]
  }

  setGlasses = (id) => {
    this.setState(state => ({
      glasses: state.arrProduct.find(product => product.id === id)
    }), () => { console.log(this.state.glasses) })
  }

  render() {
    return (
      <div className="App" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url('./images/background.jpg')" }}>
        <Header />
        <div className="container">
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <Model glasses={this.state.glasses} />
            <Model glasses={{}} />
          </div>
          <Glasses arrProduct={this.state.arrProduct} setGlasses={this.setGlasses} />
        </div>
      </div>
    )
  }
}
