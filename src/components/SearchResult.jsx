import React, { useState, useEffect } from 'react';

import axios from 'axios';
import SearchBar from './SearchBar';
import './SearchResult.css';

const SearchResult = () => {
    const [coin, setCoin] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [searchHistory, setSearchHistory] = useState([]); // --> my next step for serach results box
    useEffect(() => {
        searchCoin();
    }, [])

    const searchCoin = async (searchInput) => {
        //const coinResult = [];
        const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${searchInput}&order=market_cap_desc&per_page=2000&page=1&sparkline=false`;
        const getSearchedCoin = await axios.get(URL);
        let results = await getSearchedCoin.data;
        
            for(let index in results) {
                let coin = results[index];
                searchHistory.push(coin);
                //setting the last coin here
                setCoin(coin);
                setIsLoading(false);
                // console.log(coin)
            }
            // console.log(searchHistory);

    }
    

    return ( 
        <div className="searchResult">
            <SearchBar searchCoin={searchCoin} />
                <div className="container">
                {isLoading ? (
                    <div>
                        <p></p>
                    </div>
                    ) : (
                        <div className="box_result">
                            <h4 className="lead p-2">
                                <img src={coin.image} alt="coin-icon" className="mr-1" />
                                {` ${coin.name} - ${coin.symbol.toUpperCase()} - $${coin.current_price.toFixed(2)}`}
                            </h4>
                        </div>
                    )
                }
                </div>
        </div>
    );
}
 
export default SearchResult;