import React, { useState, useEffect } from 'react';

import CryptoCard from './CryptoCard';
import axios from 'axios';
import './CryptoPrices.css';

import BTC from '../images/BTC.svg';
import ETH from '../images/ETH.svg';
import XLM from '../images/XLM.svg';
import XRP from '../images/XRP.svg';
import ETC from '../images/ETC.svg';
import BCN from '../images/BCN.svg';


const CurrentPrices = () => {
    const [currentPrices, setCurrentPrices] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    let intervalConst;

    useEffect(() => {
        getData();
        intervalConst = setInterval(() => {
            getData()
        }, 60000)
    }, [])

    const getData = async () => {
        const currentCoinsPrice = [];
        const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
        const getCurentData = await axios.get(URL);
        let btc = getCurentData.data[0];
        let eth = getCurentData.data[1];
        let xrp = getCurentData.data[3];
        let bcn = getCurentData.data[4];
        let xlm = getCurentData.data[17];
        let etc = getCurentData.data[33];

        // Add our icons as a new property to each coin object
        btc.iconImage = BTC;
        eth.iconImage = ETH;
        xrp.iconImage = XRP;
        bcn.iconImage = BCN;
        xlm.iconImage = XLM;
        etc.iconImage = ETC;

        // Push all the editted objects on one array
        currentCoinsPrice.push(btc, eth, xrp, bcn, xlm, etc);
        
        // Update the currentPrices "state" & isLoading = false
        setCurrentPrices(currentCoinsPrice);
        setIsLoading(false);
        // console.log(currentCoinsPrice);
    }

    return ( 
        <div className="container">
            {isLoading ? (
                <div >
                    <div id='loader'></div> 
                        <h4>Loading...</h4>
                     </div>
                ) : (
                    <CryptoCard coins={currentPrices} />   
            )}
        </div>
    );
}
 
export default CurrentPrices;