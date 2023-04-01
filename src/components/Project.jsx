import React, { useState } from "react";
import axios from "axios";
import TopPart from "./TopPart";
import BottomPart from "./BottomPart";
import "./Project.css";

export default function Project() {
  const [flag, setFlag] = useState();
  const [city, setcity] = useState();
  const [data, setdata] = useState({});
  const [icon, setIcon] = useState();
  const valuechange = (e) => {
    setcity(e.target.value);
  };
  const axiosFetch = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=73dc731ba55dd7b5076e0c73e65df03a`
      )
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
        setIcon(res.data.weather[0].icon);
        setFlag(1);
      })
      .catch((err) => {
        console.log(err);
        setFlag(0);
      });
  };
  const keyPress = (e) => {
    if (e.key === "Enter") {
      axiosFetch();
    }
  };
  const handelclick = (e) => {
    axiosFetch();
  };

  return (
    <>
      <section className="home-wrapper">
        <div className="container">
          {flag === 1 ? <TopPart icon={icon} data={data} /> : null}

          <div className="location-choose">
            <div className="select-location">
              <h2>Select a Location</h2>
              <div className="input-holder">
                <input
                  type="text"
                  name="cname"
                  placeholder="Put City Name"
                  onChange={valuechange}
                  onKeyDown={keyPress}
                />
                <button onClick={handelclick} type="button">
                  Search
                </button>
              </div>
              {flag === 0 ? <h3 className="error">No Data Found</h3> : null}
            </div>
          </div>

          {flag === 1 ? <BottomPart data={data} /> : null}
        </div>
      </section>
    </>
  );
}
