import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    const { sp, onClick } = this.props;
    return (
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card" style={{ height: "100%" }}>
          <img className="card-img-top" src={sp.hinhAnh} style={{ width: "100%", objectFit: "contain", padding: "1rem" }} />
          <div className="card-body">
            <h4 className="card-title">{sp.tenSP}</h4>
            <p className="card-text">{sp.giaBan}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary mr-2" onClick={onClick.bind(this, sp.maSP)}>
              Thông tin chi tiết
            </button>
            <button className="btn btn-danger" onClick={() => this.props.themGioHang(sp)}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>

    )
  }
}
