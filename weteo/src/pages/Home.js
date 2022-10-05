import React from 'react';
import Searchbar from '../components/Searchbar'

const Home = () => {
    return (
        <div className={"home"}>
            <h1>Trouvez votre météo en un rien de temps</h1>
            <Searchbar/>
        </div>
    );
};

export default Home;