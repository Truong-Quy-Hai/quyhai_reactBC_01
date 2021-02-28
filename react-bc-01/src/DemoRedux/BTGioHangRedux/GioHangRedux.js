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
            {this.props.gioHang.map(sp => (
              <tr>
                <td>{sp.maSP}</td>
                <td>{sp.tenSP}</td>
                <td>{sp.soLuong}</td>
                <td>{sp.gia}</td>
                <td>{sp.gia * sp.soLuong}</td>
                <td><button className="btn btn-danger">Xóa</button></td>
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

// Kết nối giữa component và redux
export default connect(mapStateToProps)(GioHangRedux)
