import React, { useState, useEffect } from 'react';

import CryptoCard from './CryptoCard';
import axios from 'axios';
import './CryptoPrices.css';

// Icons I want to display
import BTC from '../images/BTC.svg';
import ETH from '../images/ETH.svg';
import XLM from '../images/XLM.svg';
import XRP from '../images/XRP.svg';
import ETC from '../images/ETC.svg';
import BCH from '../images/BCH.svg';


const CurrentPrices = (props) => {
    const [currentPrices, setCurrentPrices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [assets, setAssets] = useState('');
    let intervalConst;

    useEffect(() => {
        getData();
        intervalConst = setInterval(() => {
            getData()
        }, 60000)
    }, [])

    const getData = async () => {
        const currentCoinsData = [];
        const API_KEY = '5f1669f9639c90e3b179bbd4e9569d83195316fd3252fdf9a54b0604120f1d1e'
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,XLM,ETC&tsyms=USD&api_key={${API_KEY}}`;
        const getCurentData = await axios.get(URL);
        let btc = getCurentData.data.RAW.BTC.USD;
        let eth = getCurentData.data.RAW.ETH.USD;
        let xrp = getCurentData.data.RAW.XRP.USD;
        let bch = getCurentData.data.RAW.BCH.USD;
        let xlm = getCurentData.data.RAW.XLM.USD;
        let etc = getCurentData.data.RAW.ETC.USD;
        
        // My personal total Assets
        let totalAssets = Math.floor(btc.PRICE * 0.08309080);
    

        // Add our icons as a new property to each coin object that was created
        btc.iconImage = BTC;
        eth.iconImage = ETH;
        xrp.iconImage = XRP;
        bch.iconImage = BCH;
        xlm.iconImage = XLM;
        etc.iconImage = ETC;

        // Pushing/updating the new coin objects to the currentCoinsData we declared in line 29
        currentCoinsData.push(btc, eth, xrp, bch, xlm, etc);
        setCurrentPrices(currentCoinsData);
        // console.log(currentCoinsData);
        setAssets(totalAssets);
        setIsLoading(false);       
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
            <div className="assets">
                <p>Total Assets: ${assets}</p>
            </div>
            
        </div>
    );
}
 
export default CurrentPrices;