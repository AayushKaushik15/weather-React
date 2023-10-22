import React, { useEffect, useState } from "react";


const Body = () => {
  const [dataOne, setData] = useState(null);
  console.log(dataOne);
  const [cityName, setName] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
     // Add loading indicator when making API call
    if (loading) {
      console.log("Loading...")
      search()
    }
  });
  const search = async () => {
    try {
      // setLoading(true)
      let api_key = "ff391317eda6a08d34ff4447fb53cc48";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},&appid=${api_key}`;

      let response = await fetch(url);
      let data = await response.json();

      
    if (cityName === " ") {
      alert("No data found Er:404")
    } else {
      setData(data)
    }

      // setData(data);
    } catch (error) {
      console.log(error);
    }
  };



  const iconPack = async() => {
    const response = await fetch('https://openweathermap.org/img/wn/10d@2x.png')
    const dataPack = await response.json();
    console.log(dataPack)
  }

  iconPack();
  
  const [temp, setTemp] = useState("°C");



  const timeStampOne = dataOne?.sys?.sunrise;
  const dateOne = new Date(timeStampOne * 1000)
  const hour = dateOne.getHours() ;
  const min = dateOne.getMinutes();
  const hour12 = hour % 12 || 12;
  const showTime = hour > 12 ? "AM" : "PM";
  const formattedTime = `${hour12}:${min} ${showTime}`

  


  const timeStampTwo = dataOne?.sys?.sunset;
  const dateTwo = new Date(timeStampTwo * 1000)
  
  const hours = dateTwo.getHours();
  const mins = dateTwo.getMinutes();

  const showSetTime = hours % 12 || 12;
  const checkTime = hours > 12 ? "AM" : "PM" 

  const setTime = `${showSetTime}:${mins} ${checkTime}`


  const currentTime = new Date ();
  const currentDate = currentTime.toLocaleDateString();
  
  return (
    <div className="hero">
      <div className="container">
        <div className="form">
          <input
            type="text"
            placeholder="State name"
            value={cityName}
            onChange={(e) => {
              let show = e.target.value;
              setName(show);
            }}
          />

          <button onClick={() => search()}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {dataOne && dataOne.name && (
          <div>
            <div className="temp">
            <div className="icon-pack">
            <span class="material-symbols-outlined ">
cloud
</span>
            </div>
              <h1 className="cityName">{dataOne.name}</h1>
              <div className="temp-container">
              <h2 className="Celsius">{
                temp === "°F"
                ? `${Math.floor(dataOne.main.temp - 273.15)}°C`
                : `${Math.ceil((dataOne.main.temp - 273.15) * (9 / 5) + 32)}°F`
              }</h2>
              <span className="weather">{dataOne.weather[0].main}</span>
              <span className="temp-F" unselectable="off" onClick={() => {
                if (temp == "°C") {
                  setTemp("°F")
                } else {
                  setTemp("°C")
                }


              }}>{temp}</span>
              </div>
            </div>
            <div className="info">
              <div className="wind">
                <i className="fa-solid fa-wind"></i>
                <div className="min-info-two">
                  <span className="windOne">
                    {Math.round(dataOne.wind?.speed)} km/h
                  </span>
                  <span className="span-info">Wind Speed</span>
                </div>
              </div>
              <div className="humidity">
                <i className="fa-solid fa-water"></i>
                <div className="min-info-two">
                  <span className="humidityOne">{dataOne.main?.humidity}%</span>
                  <span className="span-info">Humidity</span>
                </div>
              </div>
            </div>
            <div className="info info-two">
              <div className="sun">
                <span class="material-symbols-outlined">water_lux</span>
                <div className="min-info-two">
                  <span>{formattedTime}</span>
                  <span className="sunO">sunrise</span>
                </div>
              </div>
              <div className="sun">
                <span class="material-symbols-outlined">wb_twilight</span>
                <div className="min-info-two">
                  <span>{setTime}</span>
                  <span className="sunO">sunset</span>
                </div>
              </div>
            </div>
            {/* <div className="country">
              <span className="Cname">Country : {dataOne.sys.country}</span>
              <span>{currentDate}</span>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
