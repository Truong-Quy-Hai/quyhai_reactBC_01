import React, { Component } from 'react'

export default class GioHang extends Component {
  render() {
    const { gioHang } = this.props
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã SP</th>
            <th>Tên SP</th>
            <th>Hình ảnh</th>
            <th>Giá SP</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {
            gioHang.map(sp => <tr key={sp.maSP}>
              <td>{sp.maSP}</td>
              <td>{sp.tenSP}</td>
              <td><img src={sp.hinhAnh} width="50" height="50" /></td>
              <td>{sp.giaBan}</td>
              <td>{sp.soLuong}</td>
              <td>{sp.giaBan * sp.soLuong}</td>
              <td><button className="btn btn-danger" onClick={() => this.props.xoaGioHang(sp.maSP)}>Xóa</button></td>
            </tr>)
          }
        </tbody>
      </table>
    )
  }
}
