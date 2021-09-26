import React from 'react';

const Journalist = (props) => {
    console.log(props);
    const{name, age} = props.journalist;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
        </div>
    );
};

export default Journalist;