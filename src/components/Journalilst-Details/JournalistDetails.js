import React, { useEffect, useState } from 'react';
import Journalist from '../Journalist/Journalist';

const JournalistDetails = () => {
    const[journalists, setJournalists] = useState([]);
    useEffect(() => {
        fetch('./journalist.json')
        .then(res => res.json())
        .then(data => setJournalists(data))
    },[]);
    return (
        <div>
            <h2>Name: </h2>
            {
                journalists.map(journalist => <Journalist
                key = {journalist.age}
                journalist = {journalist}
                ></Journalist>)
            }
        </div>
    );
};

export default JournalistDetails;