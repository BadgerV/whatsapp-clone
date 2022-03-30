import React from 'react';
import './search.styles.css';
import {FiSearch} from 'react-icons/fi'

const Search =  () => (
    <div className = "search">
        <div className="search-container" >
            <div className= "search-rest-part">
                
                <FiSearch className = "search-icon" />
                <input type="text" placeholder='Search or start a new chat' className="search-input" />
            </div>
        </div>
    </div>
)

export default Search;