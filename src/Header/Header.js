import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome to our page</h1>
            <nav className='header'>
                <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/about-us">About us</Link>
            </nav>
        </div>
    );
};

export default Header;