import $ from "jquery";
import React, {useState} from 'react';

const farhToCelcius = (tempFahr) => {
    return (tempFahr - 32)/1.8
}

const kelvToCelcius = (tempKev) => {
    return Math.round(tempKev -273.15)
}

const WeatherApiCalls = (lat, long) => {
    let res = {
        temp: 0,
        city: "",
        country: ""
    };
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c2b6c546db4d83d66aaad046da0c18ab",
        // url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toString()}&lon="${long.toString()}"&appid=c2b6c546db4d83d66aaad046da0c18ab`,
        success: function (data) {
            console.log(data)
            res.temp = kelvToCelcius(data.main.temp)
            res.city = data.name
            res.country = data.sys.country
        },
        error: function (data) {
            console.error(`Request error : ${data}`)
        },
        async: false
    })
    return <div className={"temp--result"}>
                <div className={"temp--degrees"}>{res.temp}&nbsp;°C</div>
                <div className={"temp--city"}>{res.city},&nbsp;{res.country}</div>
           </div>


};

export default WeatherApiCalls;