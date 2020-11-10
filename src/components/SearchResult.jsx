import React, { useState, useEffect } from 'react';

import axios from 'axios';
import SearchBar from './SearchBar';

const SearchResult = () => {
    const [coin, setCoin] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [searchHistory, setSearchHistory] = useState([]);
    useEffect(() => {
        searchCoin();
    }, [])

    const searchCoin = async (searchInput) => {
        //const coinResult = [];
        const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${searchInput}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
        const getSearchedCoin = await axios.get(URL);
        let results = await getSearchedCoin.data;
        
            for(var index in results) {
                var coin = results[index];
                searchHistory.push(coin);
                //setting the last coin here
                setCoin(coin);
                setIsLoading(false);
                // console.log(coin.current_price)
            }
            // console.log(searchHistory);
    }
    

    return ( 
        <div>
            <SearchBar searchCoin={searchCoin} />
                {isLoading ? (
                    <div>
                        <p></p>
                    </div>
                    ) : (
                        <h4 className="lead text-info">
                            {`${coin.id.toUpperCase()}: $${coin.current_price.toFixed(2)}`}
                        </h4>
                    )
                }
        </div>
    );
}
 
export default SearchResult;