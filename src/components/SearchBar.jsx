import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = ({ searchCoin }) => {
    const [searchInput, setSearchInput] = useState("Enter full coin's name");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSearchInput(evt.target.reset());
    }

    // a seperate component from the button itself to prevent initial call every time we landing on the page.
    const onSearch = (evt) => {
        searchCoin(searchInput);
    }
   
    return ( 
        <div className="search container">
            <div className="">
            <h4 className="text-light lead">Search more coins</h4>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="form-row align-items-center px-4 py-2">
                        <div className="col">
                            <input type="text" 
                                   className="form-control mb-2" 
                                   id="inlineFormInput" 
                                   name="searchInput"
                                   placeholder={searchInput} 
                                   onChange={evt => setSearchInput(evt.target.value.toLowerCase())}
                                   required
                            />
                        </div>
                        {/* Button */}
                        <div className="col-auto">
                            <button type="submit" className="btn btn-outline-warning mb-2" onClick={e => onSearch(e)}>Go!</button>
                        </div>
                    </div>
                </form>
            </div>            
        </div>
    );
}
 
export default SearchBar;