import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;

    let navigate = useNavigate();

    const showFriendDetail = () => {
        const path = `/friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={showFriendDetail}>{username}</button>
        </div>
    );
};

export default Friend;