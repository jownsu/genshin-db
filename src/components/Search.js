import React, { useState } from 'react'
import SearchIcon from '../assets/images/search.svg'
import CloseIcon from '../assets/images/close.svg'

function Search({ onSubmit = () => {}, onChange = () => {}}) {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value);
        onChange(e.target.value);
    }

    const handleDelete = () => {
        setSearch('');
        onChange('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(search);
    }

    return (
        <div className="search">
            <img 
                src={SearchIcon} 
                alt="search-icon" 
                className='search__search-icon' 
            />
            <form action="#" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Search for a character...' className='search__input'
                    value={search}
                    onChange={handleChange}    
                />
            </form>
            <img 
                src={CloseIcon} 
                alt="close-icon" 
                className='search__close-icon' 
                onClick={handleDelete}    
            />
        </div>
    )
}

export default Search