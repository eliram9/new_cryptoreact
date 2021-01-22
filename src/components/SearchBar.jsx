import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = ({ searchCoin }) => {
    const [searchInput, setSearchInput] = useState("Enter full coin's name");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSearchInput(evt.target.reset());
        searchCoin(searchInput);
    }

    return ( 
        <div className="search container">
            <div className="inputLine">
            <h4 className="text-light lead">Search more coins</h4>
                <form onSubmit={evt => handleSubmit(evt)}>
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
                            <button type="submit" className="btn btn-outline-warning mb-2">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    {/* <div className="secondInput">
                        <div className="secondSearch">
                            <input type="text" className="input" placeholder={searchInput} />
                            <button className="btn">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div> */}
                </form>
            </div>            
        </div>
    );
}
 
export default SearchBar;