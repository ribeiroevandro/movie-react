import React from 'react';
import './style.css'

import { Link } from 'react-router-dom';

const Header = () => (
    <div className="main-header">
        <h1><Link to="/" className="logo-movie">
            <span className="before-logo">in.</span>Movie</Link></h1>
    </div>
)

export default Header;