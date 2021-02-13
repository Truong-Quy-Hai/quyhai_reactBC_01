import React, { Component } from 'react'

export default class Model extends Component {
  render() {
    const {url, name, desc} = this.props.glasses;
    return (
      <div className="card model" style={{ width: '300px', height: "514px", marginTop: "64px" }}>
        <img className="card-img-top" src="./images/model.jpg" />
        <img className="modelGlasses" src={url} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>

    )
  }
}
