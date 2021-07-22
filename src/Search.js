import React from 'react'

const Search = ({handleSubmit, handleChange, search}) => {



    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
            <input 
            className="search" 
            type="search" 
            placeholder="Search"
            value={search}
            onChange={handleChange}
            />
            </form>
        </div>
    )
}

export default Search
