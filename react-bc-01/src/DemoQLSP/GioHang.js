import React, { Component } from 'react'

export default class GioHang extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-right">Giỏ Hàng</div>
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

            <tr>
              <th>1</th>
              <th>Iphone</th>
              <th><img src="./img/applephone.jpg" width="50" height="50" /></th>
              <th>Giá SP</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
