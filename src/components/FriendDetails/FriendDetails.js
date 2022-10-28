import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Details/Details';

const FriendDetails = () => {
    let { id } = useParams();
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    let x = {};
    friends.map(friend => {
        if (friend.id === parseInt(id)) {
            return x = friend;
        }
    })
    return (
        <div>
            <h3>Detail about my friend {x.username}</h3>
            <Details x={x}></Details>
        </div>
    );
};

export default FriendDetails;