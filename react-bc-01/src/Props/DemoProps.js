import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class DemoProps extends Component {
  mangSinhVien = [
    { ma: "sv01", ten: "Khải", tuoi: 18 },
    { ma: "sv02", ten: "Sĩ", tuoi: 22 },
    { ma: "sv03", ten: "Phú", tuoi: 24 },
  ]

  renderSinhVien= () => {
    return this.mangSinhVien.map((sv, i) => {
      return <div className="col-4" key={i}>
        <ThongTinSinhVien sinhVien={sv} />
      </div>
    })
  }

  render() {
    // state & props != nhau ntn ?
    // giống: đều là thuộc tính của component để binding dữ liệu lên giao diện
    // Khác:
    // * state: quản lý các trạng thái của biến làm thay đổi giao diện
    // * có thể gán lại giá trị được
    // * props: nhận giá trị từ component cha truyền vào
    // * Không cho phép gán lại giá trị


    return (
      <div className="container">
        <h3 className="text-center display-4">Thông tin sinh viên</h3>

        <div className="row">
          {/* <div className="col-4"><ThongTinSinhVien sinhVien={this.mangSinhVien[0]} /></div>
          <div className="col-4"><ThongTinSinhVien sinhVien={this.mangSinhVien[1]}/></div>
          <div className="col-4"><ThongTinSinhVien sinhVien={this.mangSinhVien[2]} /></div>
          */}
          {this.renderSinhVien()}
        </div>
      </div>
    )
  }
}
