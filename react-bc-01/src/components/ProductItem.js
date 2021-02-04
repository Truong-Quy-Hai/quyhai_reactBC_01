import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {imgSrc, title, des, alt} = this.props;
    return (
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src={imgSrc} alt={alt} />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{des}</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
    )
  }
}
