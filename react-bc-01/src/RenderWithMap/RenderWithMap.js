import React, { Component } from 'react'

export default class RenderWithMap extends Component {
  mangSinhVien = [
    { ma: 1, ten: "Nguyễn Văn A" },
    { ma: 2, ten: "Nguyễn Văn B" },
    { ma: 3, ten: "Nguyễn Văn C" },
  ]

  renderSinhVien = () => {
    const arrJSX = [];

    for (let i = 0; i < this.mangSinhVien.length; i++) {
      let tagP = <li key={i}>{this.mangSinhVien[i].ten}</li>
      arrJSX.push(tagP);
    }

    return arrJSX;
  }

  render() {
    const arrJSX = this.mangSinhVien.map((sinhVien, i) => {
      return <li key={i}>{sinhVien.ten}</li>
    })
    return (
      // [<p key={1}>Hello Sĩ</p>,
      // <p key={2}>Hello Phú</p>]
      // <div className="container">
      //   <ul>
      //     {this.renderSinhVien()}
      //   </ul>
      // </div>
      
      // * cách 2
      // <ul>
      //   {arrJSX}
      // </ul>

      <table className="table">
        <thead>
          <tr>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.mangSinhVien.map((sinhVien, i) => {
              return <tr key={i}>
                <td>{sinhVien.ma}</td>
                <td>{sinhVien.ten}</td>
                <td><button className="btn btn-danger">Xóa</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    )
  }
}
