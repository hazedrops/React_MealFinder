import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';

import '../styles/style.scss';

// import { useState, useEffect } from 'react';

const SearchEntry = (props) => { 
  // props.setModal(false);

  return ( 
    <section className="searchEntry">
      <form 
        className="searchBar"
        onSubmit={props.HandleSearch}>
        <label htmlFor="search" className="offscreen">Enter a search term</label>
        <input 
          type="search" 
          required
          role="searchbox" 
          placeholder="Enter a search term..."
          value={ props.searchTerm }
          onChange={(e) => props.setSearchTerm(e.target.value)} />
        {/* <div className="none button clear" role="button" tabIndex="0" aria-label="Clear search terms">
          <FontAwesomeIcon className="faIcon" icon={faTimes} />
        </div> */}
        <button 
          className="button searchButton" 
          type="submit" 
          aria-label="Submit button"
          onClick={ props.handleSearch }> 
            <FontAwesomeIcon  className="faIcon" icon={faSearch} />
        </button>
      </form>     
    </section>
   );
}
 
export default SearchEntry;