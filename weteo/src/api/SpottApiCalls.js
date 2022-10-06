import React from 'react';
import $ from "jquery";

const SpottApiCalls = () => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3b4dfc6608msh06d069b548f171fp1c6258jsn683e42f5a961',
            'X-RapidAPI-Host': 'spott.p.rapidapi.com'
        }
    };

    let res = [];
    const settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&country=US%2CCA&q=Sea&type=CITY",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "3b4dfc6608msh06d069b548f171fp1c6258jsn683e42f5a961",
            "X-RapidAPI-Host": "spott.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        for(let i in response) {
            res.push(response[i].name)

        }
        console.log(res);
    });
    return (
        <div>
            TEST Av

            {res.map(elem => (
                <p>{elem}</p>
            ))}
            apres
        </div>
    );
};

export default SpottApiCalls;