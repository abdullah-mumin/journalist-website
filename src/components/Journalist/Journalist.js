import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Journalist.css';

const Journalist = (props) => {
    // console.log(props.journalist);
    const{name, age, img, birthPlace, workPlace, status} = props.journalist;
    const person = <FontAwesomeIcon icon={faUser} />;
    return (
           <div className="journalist-container">
            <div className="journalist">
                <img src={img} alt="" />
                <h3>Name:{name}</h3>
                <p>Birth Place: {birthPlace}</p>
                <p>Work Place: {workPlace}</p>
                <p>Status: {status}</p>
                <h3>Age:{age}</h3>
                <button className="btn-journalist"
                onClick={() =>props.handleAddJournalist(props.journalist)}
                > { person } <span className="btn-add">Add Journalist</span> </button>
            </div>
           </div>
    );
};

export default Journalist;