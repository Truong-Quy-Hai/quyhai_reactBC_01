import React, { Component } from 'react'

export default class ThongTinSinhVien extends Component {
  // ! Có thể đổi: this.props.sinhVien.tuoi nhưng ko ai làm v !
  
  render() {
    let {sinhVien} = this.props;

    return (
      <div className="card text-white bg-primary">
        <img className="card-img-top" src="https://picsum.photos/180/100" width="100" height="180" alt="abc" />
        <div className="card-body">
          <h4 className="card-title">{sinhVien?.ma}</h4>
          <p className="card-text">{sinhVien?.ten}</p>
        </div>
      </div>

    )
  }
}
