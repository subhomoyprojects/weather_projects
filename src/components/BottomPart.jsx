import React from "react";

const BottomPart = (props) => {
  return (
    <>
      <div className="bottom-part">
        <div className="item">
          <h4>
            <strong>Humidity</strong>
            {props.data.main ? <span>{props.data.main.humidity}%</span> : null}
          </h4>
        </div>
        <div className="item">
          <h4>
            <strong>Wind Speed</strong>
            {props.data.wind ? <span>{props.data.wind.speed} km/h</span> : null}
          </h4>
        </div>
        <div className="item">
          <h4>
            <strong>Wind Deg</strong>
            {props.data.wind ? (
              <span>
                {props.data.wind.deg}
                <sup>°</sup>
              </span>
            ) : null}
          </h4>
        </div>
        <div className="item">
          <h4>
            <strong>Pressure</strong>
            {props.data.main ? (
              <span>{props.data.main.pressure} HPA</span>
            ) : null}
          </h4>
        </div>
      </div>
    </>
  );
};

export default BottomPart;
