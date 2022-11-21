import React, {useRef} from 'react';
import Searchbar from '../components/Searchbar'
import WeatherApiCalls from "../api/WeatherApiCalls";

const Home = () => {

    const childRef = useRef();

    const props = {
        lat: "44.8199053",
        long: "-0.5980165"
    }

    return (
        <div className={"home"}>
            <h1>Trouvez votre météo en un rien de temps</h1>
            <Searchbar />
            <WeatherApiCalls ref={childRef} props={props}/>
            {/* <button onClick={() => childRef.current.getTest()}>BOUTON</button> */}

        </div>
    );
};

export default Home;