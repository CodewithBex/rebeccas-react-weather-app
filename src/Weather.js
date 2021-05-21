import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="Search"
                    placeholder="Enter a city.."
                            className="form-control"
                        autoFocus="on"/>
                    </div>
                     <div className="col-3">
                        <input type="Submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
            </form>
            <h1>Squamish, BC, Canada</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Rainy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
   
                     
                    <img
                    src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                            alt="Rainy"
                            
                        />
                   
                    <span className="temperature">13</span>
                            <span className="unit">°C</span>
               
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 80%</li>
                        <li>Humidity: 78%</li>
                        <li>Wind: 13 mph</li>
                    </ul>
             </div>
            </div>
        </div>
    )
}
