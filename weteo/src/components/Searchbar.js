import React from 'react';

const Searchbar = () => {
    return (
        <div className={"searchbar"}>
            <input type={"text"} placeholder={"Bordeaux, Paris, New York, ..."}/>
            <btn type={"submit"}>Rechercher</btn>
        </div>
    );
};

export default Searchbar;