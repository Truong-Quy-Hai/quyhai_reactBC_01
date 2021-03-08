const stateDefault = {
  banChon: "Tài",
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { diem: 1, hinhAnh: "./images/1.png" },
    { diem: 1, hinhAnh: "./images/1.png" },
    { diem: 1, hinhAnh: "./images/1.png" },
  ],
};

export const gameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "game/choose":
      return { ...state, banChon: action.payload };
    case "game/play":
      const diem = action.payload.reduce((acc, cur) => acc + cur.diem, 0);
      if (
        (state.banChon === "Tài" && diem >= 12) ||
        (state.banChon === "Xỉu" && diem < 12)
      ) {
        return {
          ...state,
          soBanThang: state.soBanThang + 1,
          tongSoBanChoi: state.tongSoBanChoi + 1,
          mangXucXac: action.payload,
        };
      }
      return { ...state, tongSoBanChoi: state.tongSoBanChoi + 1, mangXucXac: action.payload };
    default:
      return state;
  }
};
