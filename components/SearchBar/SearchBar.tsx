"use client"
import React, { useState } from 'react';
import SearchManuFacturer from '../SearchManufacturer/SearchManuFacturer';
import { manufacturers } from '../../constants/index';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState()
    const handleSearch =() =>{

    }
    return (
       <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManuFacturer 
            manufacturers={manufacturer}
            setManufacturer={setManufacturer}
            />
        </div>
       </form>
    );
};

export default SearchBar;