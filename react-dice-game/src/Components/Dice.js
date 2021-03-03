import React, { Component } from 'react'

export default class Dice extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-4">
            <button className="bg-danger h-100" style={{border: 'none'}}>
              <div className="p-5 bg-danger text-white h-100 d-flex justify-content-center align-items-center" style={{fontSize: 50, width: 200}}>
                TÀI
              </div>
            </button>
          </div>
        
          <div className="col-4">
            <img src="./images/1.png" style={{height: "100%"}}/>
          </div>
          
          <div className="col-4">
            <button className="bg-danger h-100" style={{border: 'none'}}>
              <div className="p-5 bg-dark text-white h-100 d-flex justify-content-center align-items-center" style={{fontSize: 50, width: 200}}>
                XỈU
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

// import React from 'react'

// export default function Dice() {
//   return (
//     <div>
      
//     </div>
//   )
// }
