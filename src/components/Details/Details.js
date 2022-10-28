import React from 'react';

const Details = (props) => {
    const { name, email, address } = props.x;
    return (
        <div>
            <h5>Full Name: {name}</h5>
            <h5>Email: {email}</h5>
            <h5>Address: {address?.suite}, {address?.street}</h5>
            <p>City: {address?.city}</p>
        </div>
    );
};

export default Details;