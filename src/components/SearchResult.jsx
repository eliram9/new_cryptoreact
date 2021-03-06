import React, { useState, useEffect } from 'react';

import axios from 'axios';
import SearchBar from './SearchBar';
import './SearchResult.css';

const SearchResult = () => {
    const [coin, setCoin] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [firstLanding, setFirstLanding] = useState(true);
    const [notFound, setNotFound] = useState('');
    const [searchHistory, setSearchHistory] = useState([]); // --> my next step for serach results box
    
    useEffect(() => {
        //searchCoin();
    }, [])

    const searchCoin = async (searchInput) => {
        // const coinResult = [];
        // const API_KEY = '5f1669f9639c90e3b179bbd4e9569d83195316fd3252fdf9a54b0604120f1d1e'
        // var URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${searchInput}&tsyms=USD&api_key={${API_KEY}}`;
        setNotFound('');
        setCoin('');
        setIsLoading(true)
        URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${searchInput}&order=market_cap_desc&per_page=7000&page=1&sparkline=false`;
        const getSearchedCoin = await axios.get(URL);
        let results = await getSearchedCoin.data;
        console.log(results);
            if (results == 0) {
                setNotFound('Coin was not found 🙁');
            }

            else {
                for(let index in results) {
                    let coin = results[index];
                    // searchHistory.push(coin);
                    setCoin(coin);
                    setIsLoading(false);
                    // console.log(coin)
                }
                // console.log(searchHistory);
            }
    }
    
    return ( 
        <div className="searchResult">
            <SearchBar searchCoin={searchCoin} />
                <div className="container">
                {/* In case the coin was not found */}
                <h4>{notFound}</h4>

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