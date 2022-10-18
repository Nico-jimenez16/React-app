import React from 'react';
import PropTypes from 'prop-types';

const Search = ( {seachcharacters} ) => {

    return (
        <>
        
            <div className="w-full flex justify-center mb-8">
                <input className="w-3/4 border-2 border-teal-600 rounded-full p-4" type="text" placeholder="Search character" onChange={ e => seachcharacters(e.target.value) }></input>
            </div>
        
        </>
    )
}

Search.propTypes = {
    seachcharacters: PropTypes.func.isRequired
}

export default Search;
