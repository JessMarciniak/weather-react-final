import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  console.log(props);
  function maxTemperature() {
    let temperature = Math.round(props.data.highTemp);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.lowTemp);
    return `${temperature}`;
  }
  function feelsTemperature() {
    let temperature = Math.round(props.data.feelsLike);
    return `${temperature}`;
  }
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
                size={50}
              />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <hr />
        <div className="container weatherCurrentStats">
          <div className="row weatherCurrentSection justify-content-between">
            <div className="col weatherConditions">
              <div className="col weatherCondition">
                <span className="col currentFeelsLike">
                  Feels Like: {feelsTemperature()}°
                </span>{" "}
                <span className="col currentMax">H: {maxTemperature()}°</span>{" "}
                <span className="col currentMin">L: {minTemperature()}°</span>{" "}
                <span className="col currentHumidity">
                  Humidity :{props.data.humidity}%
                </span>{" "}
                <span className="col currentWind">
                  Wind : {props.data.wind} km/h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
