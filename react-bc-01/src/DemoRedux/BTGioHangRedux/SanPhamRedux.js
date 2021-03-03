import React, { Component } from 'react'

import {connect} from 'react-redux'

class SanPhamRedux extends Component {
  render() {
    const {sanPham: sp} = this.props
    return (
        <div className="card" style={{ width: "100%" }}>
          <img className="card-img-top" src={sp.hinhAnh} style={{ width: "100%", objectFit: "contain", padding: "1rem" }} />
          <div className="card-body">
            <h4 className="card-title">{sp.tenSP}</h4>
            <p className="card-text">{sp.giaBan}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={() => {
              this.props.themGioHang(sp)
            }}>Thêm giỏ hàng</button>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      dispatch({type: "themGioHang",payload: {...sanPhamClick, soLuong: 1}})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux)