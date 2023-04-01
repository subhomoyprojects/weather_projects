import React from "react";

const TopPart = (props) => {
  const url = `https://openweathermap.org/img/wn/${props.icon}@4x.png`;
  return (
    <>
      <div className="top-part">
        <div className="top-left-part">
          <h1>
            <i className="fa-sharp fa-thin fa-location-dot"></i>
            {props.data.name}
            {props.data.sys ? <span>{props.data.sys.country}</span> : null}
          </h1>
        </div>
        <div className="top-right-part">
          <h3>
            <span className="img-wrap">
              <img src={url} alt="" />
            </span>
            {props.data.main ? (
              <strong>
                <span>{props.data.main.temp}</span>
                <sup>°</sup>C
              </strong>
            ) : null}
          </h3>
          {props.data.weather ? (
            <h4>{props.data.weather[0].description}</h4>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TopPart;
