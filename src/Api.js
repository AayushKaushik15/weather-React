import React from "react";
import ApiBody from "./ApiBody";


const Api = () => {
  return (
    <div className="hero-api">
      <div className="api-container">
        <div className="api-info">
          <h2>OpenWeather API</h2>
          <p className="api-para">
            OpenWeatherMap is an online service that provides global weather
            data via API. It's one of the most popular weather API apps.
            OpenWeatherMap's data is gathered from over 40,000 broadcast
            services all over the world. It's powered by convolutional machine
            learning solutions and performs at up to 500 m resolution.{" "}
          </p>

          <a
            href="https://openweathermap.org/api"
            target="_blank"
            className="button"
          >
            Now more
          </a>
        </div>

        <div className="api-card">
          <div className="card">
            <img
              src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
              alt=""
            />
            <div className="info-card">
              <h3>Current Weather Data</h3>
              <ul>
                <li>Access current weather data for any location</li>
                <li>
                  We collect and process weather data from different sources
                  such as global and local weather models, satellites, radars
                  and a vast network of weather stations
                </li>
                <li>JSON, XML, and HTML formats</li>
                <li>Included in both free and paid subscriptions</li>
              </ul>
              <div className="api-btns">
                <a
                  href="https://openweathermap.org/api/one-call-3"
                  className="apidocs apibtn"
                  target="_black"
                >
                  API doc
                </a>
                <a
                  href="https://home.openweathermap.org/subscriptions/billing_info/onecall_30/base?key=base&service=onecall_30"
                  className="subscribe apibtn"
                  target="_blank"
                >
                  subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-api">
        <ApiBody/>
      </div>
    </div>
  );
};

export default Api;
