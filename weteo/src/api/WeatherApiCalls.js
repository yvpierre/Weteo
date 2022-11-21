import $ from "jquery";
import React, {forwardRef, useEffect, useState, useImperativeHandle} from 'react';

const farhToCelcius = (tempFahr) => {
    return (tempFahr - 32)/1.8
}

const kelvToCelcius = (tempKev) => {
    return Math.round(tempKev -273.15)
}


const WeatherApiCalls = forwardRef((props, ref) => {

    let [cities, setCities] = useState([]);
    let [temps, setTemps] = useState([])

    useImperativeHandle(ref, () => ({
        getTest() {
            alert("test")
        }

    }))
/*
    let weatherApiRes = {
        temp: 0,
        city: "",
        country: "",
    }

    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c2b6c546db4d83d66aaad046da0c18ab",
        // url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toString()}&lon="${long.toString()}"&appid=c2b6c546db4d83d66aaad046da0c18ab`,
        success: function (data) {
            let temp = []
            weatherApiRes.temp = kelvToCelcius(data.main.temp)
            weatherApiRes.city = data.name
            weatherApiRes.country = data.sys.country
            temp.push(weatherApiRes)

            setTemps(temp)
        },
        error: function (data) {
            console.error(`Request error : ${data}`)
        },
        async: false
    })

    useEffect(() => {
        const settingsCities = {
            "async": false,
            "crossDomain": true,
            "url": "https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&country=FR&type=CITY",
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "3b4dfc6608msh06d069b548f171fp1c6258jsn683e42f5a961",
                "X-RapidAPI-Host": "spott.p.rapidapi.com"
            }
        };
        $.ajax(settingsCities).done(function (response) {
            console.log(response)
            setCities(response)
        })

    }, [])


    return (
        <div className={"temp--result"}>
        <div className={"temp--degrees"}>{temps[0].temp}&nbsp;°C</div>
                <div className={"temp--city"}>{temps[0].city},&nbsp;{temps[0].country}</div>
            {cities.map(elem => (
                <p>{elem.name}</p>
            ))}
       </div>
    )


 */
    return (<div>Test</div>)

});

export default WeatherApiCalls;