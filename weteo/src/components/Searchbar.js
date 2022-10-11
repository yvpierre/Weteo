import $ from "jquery";
import React, {useState} from 'react';
import WeatherApiCalls from "../api/WeatherApiCalls";


const farhToCelcius = (tempFahr) => {
    return (tempFahr - 32)/1.8
}

const kelvToCelcius = (tempKev) => {
    return Math.round(tempKev -273.15)
}

const Searchbar = () => {
    return (
        <div className={"searchbar"}>
            <input type={"text"} placeholder={"Bordeaux, Paris, New York, ..."} />

            <div className={"btn--search"}>Rechercher</div>
        </div>
    );
};

export default Searchbar;