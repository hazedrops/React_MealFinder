import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import MealfinderContext from '../context/MealfinderContext';

import '../styles/style.scss';

// import { useState, useEffect } from 'react';

const SearchEntry = () => { 
  const { searchTerm, setSearchTerm, handleSearch, isLoading } = useContext(MealfinderContext);

  const handleChange = (e) => {
    const { value } = e.target;

    console.log({value});
    
    setSearchTerm(value);
  }

  return ( 
    <section className="searchEntry">
      <form 
        className="searchBar"
        onSubmit={ handleSearch }>
        <label htmlFor="search" className="offscreen">Enter a search term</label>
        <input 
          type="search" 
          required
          role="searchbox" 
          placeholder="Enter a search term..."
          value={ searchTerm }
          onChange={handleChange}
        />
        {/* <div className="none button clear" role="button" tabIndex="0" aria-label="Clear search terms">
          <FontAwesomeIcon className="faIcon" icon={faTimes} />
        </div> */}
        <button 
          className="button searchButton" 
          type="submit" 
          aria-label="Submit button"
          onClick={ handleSearch }> 
            <FontAwesomeIcon  className="faIcon" icon={faSearch} />
        </button>
      </form>     
    </section>
   );
}
 
export default SearchEntry;