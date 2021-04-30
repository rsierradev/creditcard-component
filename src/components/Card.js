import React from "react";

export const Card = () => {
  return (
    <div className="center-block">
      <div className="row">
        <div className="col-md-12">
          <h3 className="gold pull-right">
            <b>VISA GOLD</b>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img
            src="./chip.png"
            alt="chip"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-12 mt-2">
          <h3
            className="gold"
            style={{ fontSize: "21px", textAlign: "center", letterSpacing: 3 }}
          >
            1234 5678 9101 1234
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 pull-right">
          <p style={{ color: "white", fontSize: "10px" }}>4000</p>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-12" align="center">
          <p className="gold midpxfont">
            <span style={{ color: "white", fontSize: 10 }}>Exp. </span>12/20
          </p>
        </div>
      </div>
    </div>
  );
};
