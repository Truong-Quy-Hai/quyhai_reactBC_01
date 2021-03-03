

const stateDefault = {
  gioHang: [
  ]
}

const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "themGioHang":
      {
        const index = state.gioHang.findIndex((el) => el.maSP === action.payload.maSP)
        if (index !== -1) return { ...state, gioHang: state.gioHang.map((sp, i) => index === i ? { ...sp, soLuong: sp.soLuong + 1 } : sp) }
        return { ...state, gioHang: [...state.gioHang, action.payload] }
      }
    case "xoaSanPham":
      return { ...state, gioHang: state.gioHang.filter(el => el.maSP !== action.payload) }
    case "thayDoiSoLuong":
      {
        const index = state.gioHang.findIndex(el => el.maSP === action.payload.maSP);
        if (state.gioHang[index].soLuong + action.payload.soLuong > 0)
          return { ...state, gioHang: state.gioHang.map(el => el.maSP === action.payload.maSP ? { ...el, soLuong: el.soLuong + action.payload.soLuong } : el) }
        return { ...state, gioHang: state.gioHang.filter(el => el.maSP !== action.payload.maSP) }
      }

    default:
      return state
  }
}
export default gioHangReducer