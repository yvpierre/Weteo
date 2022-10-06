import $ from "jquery";
import React, {useEffect, useState} from 'react';

const farhToCelcius = (tempFahr) => {
    return (tempFahr - 32)/1.8
}

const kelvToCelcius = (tempKev) => {
    return Math.round(tempKev -273.15)
}

const CitiesApi = () => {

    const [initial, setInitial] = useState();

    let citiesApiRes = [];
    const GetInitialData = () => {
        const settings = {
            "async": false,
            "crossDomain": true,
            "url": "https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&country=FR&type=CITY",
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "3b4dfc6608msh06d069b548f171fp1c6258jsn683e42f5a961",
                "X-RapidAPI-Host": "spott.p.rapidapi.com"
            }
        };
        $.ajax(settings).done(function (response) {
            setInitial(response)
        });
    }

    useEffect(() => {
        let response = GetInitialData();
        for(let i in response) {
            console.log(response)
            citiesApiRes.push([response[i].coordinates.latitude,response[i].coordinates.latitude])
        }
    },[])

    return citiesApiRes;
}

const WeatherApi = () => {

    const [initial, setInitial] = useState();
    const getInitialData = () => {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c2b6c546db4d83d66aaad046da0c18ab",
            // url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toString()}&lon="${long.toString()}"&appid=c2b6c546db4d83d66aaad046da0c18ab`,
            success: function (data) {
                setInitial(data)
            },
            error: function (data) {
                console.error(`Request error : ${data}`)
            },
            async: false
        })
    }

    let weatherApiRes = {
        temp: 0,
        city: "",
        country: ""
    };

    useEffect(() => {
        getInitialData();
    }, [])

    let response = initial;
    if(response) {
        weatherApiRes.temp = kelvToCelcius(response.main.temp)
        weatherApiRes.city = response.name
        weatherApiRes.country = response.sys.country
    }

    console.log(weatherApiRes)
    return weatherApiRes
}


const getWeatherFromCoords = (lat, long) => {
    let tabCities = CitiesApi();
    let tabWeathers = WeatherApi();
    let res;
    for(let i in tabCities.length) {
        if(tabCities[i].latitude === lat && tabCities[i].longitude === long) {
            res = tabCities[i].name
        }
    }
    return res;
}

const WeatherApiCalls = (lat, long) => {

    return <div className={"temp--result"}>
                <div className={"temp--degrees"}>{WeatherApi().temp}&nbsp;°C</div>
                <div className={"temp--city"}>{WeatherApi().city},&nbsp;{WeatherApi().country}</div>
                {CitiesApi().map(elem => (
                    <p>{getWeatherFromCoords(45.7485, 4.84671)}</p>
                    ))}
           </div>


};

export default WeatherApiCalls;