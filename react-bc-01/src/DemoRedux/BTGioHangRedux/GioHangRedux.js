import React, { Component } from 'react'
// kết nối react component với redux store 
import { connect } from 'react-redux'

class GioHangRedux extends Component {
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((sp, index) => (
              <tr key={index}>
                <td>{sp.maSP}</td>
                <td>{sp.tenSP}</td>
                <td>
                  <button className="btn btn-primary mr-2" onClick={() => this.props.thayDoiSoLuong(sp.maSP, 1)}>+</button>
                  {sp.soLuong}
                  <button className="btn btn-primary ml-2" onClick={() => this.props.thayDoiSoLuong(sp.maSP, -1)}>-</button>
                  </td>
                <td>{sp.giaBan}</td>
                <td>{sp.giaBan * sp.soLuong}</td>
                <td><button className="btn btn-danger" onClick={() => this.props.xoaSanPham(sp.maSP)}>Xóa</button></td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}


// hàm chuyển state trên redux trở thành props của component
// state đại diện cho rootReducer
const mapStateToProps = (state) => {
  return {
    gioHang: state.gioHangReducer.gioHang
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    thayDoiSoLuong: (maSP, soLuong) => {
      dispatch({type: 'thayDoiSoLuong', payload: {maSP, soLuong}})
    },
    xoaSanPham: (maSP) => {
      dispatch({type: 'xoaSanPham', payload: maSP})
    }
  }
}

// Kết nối giữa component và redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)
