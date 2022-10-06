import React from 'react';
import Searchbar from '../components/Searchbar'
import WeatherApiCalls from "../api/WeatherApiCalls";

const Home = () => {

    return (
        <div className={"home"}>
            <h1>Trouvez votre météo en un rien de temps</h1>
            <Searchbar/>

            <WeatherApiCalls lat="44.8199053" long="-0.5980165"/>

        </div>
    );
};

export default Home;