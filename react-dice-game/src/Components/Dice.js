import React, { Component } from "react";
import { connect } from "react-redux";

class Dice extends Component {
  render() {
    const { banChon, mangXucXac } = this.props;
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-4">
            <button className="bg-danger h-100" style={{ border: "none" }}>
              <div
                className="p-5 bg-danger text-white h-100 d-flex justify-content-center align-items-center"
                style={{ fontSize: 50, width: 200 }}
                onClick={() => banChon('Tài')}
              >
                TÀI
              </div>
            </button>
          </div>

          <div className="col-4">
            {mangXucXac.map((xucXac, index) => (
              <img
                src={xucXac.hinhAnh}
                key={index}
                style={{ width: "calc(100% / 3)" }}
              />
            ))}
          </div>

          <div className="col-4">
            <button className="bg-danger h-100" style={{ border: "none" }}>
              <div
                className="p-5 bg-dark text-white h-100 d-flex justify-content-center align-items-center"
                style={{ fontSize: 50, width: 200 }}
                onClick={() => banChon('Xỉu')}
              >
                XỈU
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.gameReducer.mangXucXac,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    banChon: (val) => {
      dispatch({
        type: "game/choose",
        payload: val
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dice);

// import React from 'react'

// export default function Dice() {
//   return (
//     <div>

//     </div>
//   )
// }
