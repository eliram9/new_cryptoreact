import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = ({ searchCoin }) => {
    const [searchInput, setSearchInput] = useState("Enter coin's name");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        searchCoin(searchInput);
        setSearchInput(evt.target.reset());
    }

   
    return ( 
        <div className="search container">
            <div className="">
            <h4 className="text-light lead">Search more coins</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-row align-items-center px-4 py-2">
                        <div className="col">
                            <input type="text" 
                                   className="form-control mb-2" 
                                   id="inlineFormInput" 
                                   name="searchInput"
                                   placeholder={searchInput} 
                                   onChange={evt => setSearchInput(evt.target.value.toLocaleLowerCase())}
                                   required
                            />
                        </div>
                        {/* Button */}
                        <div className="col-auto">
                            <button type="submit" className="btn btn-outline-warning mb-2">Go!</button>
                        </div>
                    </div>
                </form>
            </div>            
        </div>
    );
}
 
export default SearchBar;