import React, { Component } from 'react'
import ChiTietSP from './ChiTietSP';
import GioHang from './GioHang';
import SanPham from './SanPham';

export default class DemoQLSP extends Component {
  mangSanPham = [
    {
      "maSP": 1,
      "tenSP": "VinSmart Live",
      "manHinh": "AMOLED, 6.2\", Full HD+",
      "heDieuHanh": "Android 9.0 (Pie)",
      "cameraTruoc": "20 MP",
      "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
      "ram": "4 GB",
      "rom": "64 GB",
      "giaBan": 5700000,
      "hinhAnh": "./img/vsphone.jpg"
    },

    {
      "maSP": 2,
      "tenSP": "Meizu 16Xs",
      "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
      "heDieuHanh": "Android 9.0 (Pie); Flyme",
      "cameraTruoc": "20 MP",
      "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
      "ram": "4 GB",
      "rom": "64 GB",
      "giaBan": 7600000,
      "hinhAnh": "./img/meizuphone.jpg"
    },

    {
      "maSP": 3,
      "tenSP": "Iphone XS Max",
      "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
      "heDieuHanh": "iOS 12",
      "cameraSau": "Chính 12 MP & Phụ 12 MP",
      "cameraTruoc": "7 MP",
      "ram": "4 GB",
      "rom": "64 GB",
      "giaBan": 27000000,
      "hinhAnh": "./img/applephone.jpg"
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      sp: null,
      gioHang: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({ sp: this.mangSanPham.find(sp => sp.maSP === id) });
  }

  // Hàm xử lý làm thay đổi state sẽ được đặt tại component chứa state
  themGioHang = (spClick) => {
    this.setState(state => {
      if (state.gioHang.findIndex(sp => sp.maSP === spClick.maSP) === -1) return { gioHang: [...state.gioHang, {...spClick, soLuong: 1}] }
      let newGioHang = state.gioHang.map(sp => sp.maSP === spClick.maSP ? { ...sp, soLuong: sp.soLuong + 1 } : sp)
      return { gioHang: [...newGioHang] }
      // gioHang: giỏ hàng mới
    })
  }

  xoaSP = (maSP) => {
    this.setState(state => ({
      gioHang: state.gioHang.filter(sp => sp.maSP !== maSP)
    }))
  }

  renderSP() {
    return (
      this.mangSanPham.map(
        (sp) => (
          <SanPham key={sp.maSP} sp={sp} onClick={this.handleClick} themGioHang={this.themGioHang}/>
        )
      )
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="mt-4">Giỏ hàng</h1>
        <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaSP}/>

        <div className="row mb-5">
          {this.renderSP()}
        </div>

        <ChiTietSP sp={this.state.sp} />
      </div>
    )
  }
}
