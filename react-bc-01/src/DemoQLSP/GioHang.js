import React, { Component } from 'react'

export default class GioHang extends Component {
  
  render() {
    const { gioHang, tangGiamSoLuong } = this.props
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
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {
            gioHang.map(sp => <tr key={sp.maSP}>
              <td>{sp.maSP}</td>
              <td>{sp.tenSP}</td>
              <td><img src={sp.hinhAnh} width="50" height="50" /></td>
              <td>{sp.giaBan}</td>
              <td>
                <button className="btn btn-success rounded-circle" onClick={() => tangGiamSoLuong(sp.maSP, 1)}>+</button>
                <span className="d-inline-block mx-2">{sp.soLuong}</span>
                <button className="btn btn-danger rounded-circle" onClick={() => tangGiamSoLuong(sp.maSP, -1)}>-</button>
              </td>
              <td>{sp.giaBan * sp.soLuong}</td>
              <td><button className="btn btn-danger" onClick={() => this.props.xoaGioHang(sp.maSP)}>Xóa</button></td>
            </tr>)
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5"></td>
            <td>Tổng tiền</td>
            <td>{this.tinhTongTien()}</td>
          </tr>
        </tfoot>
      </table>
    )
  }
  tinhTongTien = () => {
    return this.props.gioHang.reduce((acc, sp) => acc + sp.giaBan * sp.soLuong, 0)
  }
}
