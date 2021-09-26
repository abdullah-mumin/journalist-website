import React, { useEffect, useState } from 'react';
import AddedJournalist from '../Added-Journalist/AddedJournalist';
import Journalist from '../Journalist/Journalist';
import './JournalistDetails.css';

const JournalistDetails = () => {
    const[journalists, setJournalists] = useState([]);
    const[totalJournalist, setTotalJournalist] = useState([]);
    useEffect(() => {
        fetch('./journalist.json')
        .then(res => res.json())
        .then(data => setJournalists(data))
    },[]);

    const handleAddJournalist = (journalist) => {
        const newTotalJournalist = [...totalJournalist, journalist];
        setTotalJournalist(newTotalJournalist);
    };

    return (
        <div>
            <div>
                <AddedJournalist totalJournalist={totalJournalist}></AddedJournalist>
            </div>

            <div className="single-journalist">
            {
                journalists.map(journalist => <Journalist
                key = {journalist.age}
                journalist = {journalist}
                handleAddJournalist = {handleAddJournalist}
                ></Journalist>)
            }
            </div>
        </div>
    );
};

export default JournalistDetails;