import React from "react";

export default function weather() {
  return (
    <div className="weather">
      <div>
        <h1>🌤 Currently</h1>
        <ul>
          <li id="date">Sunday 11.10</li>
        </ul>
        <h3 className="cityPlaceholder" id="city">
          Harare
        </h3>

        <div className="container">
          <div className="row">
            <div className="col-1">
              🌤
              <br />
              10.00
            </div>
            <div className="col-1">
              🌤 <br />
              12.00
            </div>
            <div className="col-1">
              🌤 <br />
              14.00
            </div>
            <div className="col-1">
              🌤 <br />
              18.00
            </div>
          </div>
        </div>

        <hr />

        <form className="search-form" id="search-form">
          <input type="search" id="cityName" placeholder="enter any city" />

          <input type="submit" value="search" id="name" />
          <br />
          <br />
          <button id="current"> Current location</button>
        </form>

        <br />
        <span>
          <div className="row">
            <div className="col-2">
              🌧 <br />
              22°
              <br />
              Monday
            </div>
            <div className="col-2">
              ☀️ <br />
              26° <br />
              Tuesday
            </div>
            <div className="col-2">
              ☀️ <br />
              26° <br />
              Wednesday
            </div>

            <div className="col-2">
              ☀️ <br />
              27° <br />
              Thursday
            </div>
            <div className="col-2">
              ☀️ <br />
              26° <br />
              Friday
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
