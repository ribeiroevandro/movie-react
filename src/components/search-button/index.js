import React from 'react';
import './style.css'
const SearchButton = () => (
    <section className="search-button">
        <div className="container">
            <div className="search-wrap">
                <input type="text" name="search-field" id="search-field"/>
                <button className="search-btn">Funciona</button>
            </div>
        </div>
    </section>
);

export default SearchButton;