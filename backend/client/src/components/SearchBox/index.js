import React from 'react';

const Searchbox = ({placeholder,handleChange}) =>{
    return(
        <input type='search'
        className='search'
        placeholder={placeholder}
        onChange={handleChange}
        />
    )
}

export default Searchbox