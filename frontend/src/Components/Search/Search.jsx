import React from 'react'
import MetaData from '../layouts/MetaData';
import "./Search.css";


const Search = () => {

  return (
    <>
        <MetaData title = "Search - VedicHeal"/>
        <form className="searchBox">
            <input 
                type="text"
                placeholder='Search the Disease...'
            />
            <input type="submit" value="Search" />
        </form>
    </>
  )
}

export default Search