import React, { Component } from 'react';

// In this component we will make API call to get current cryprto prices & new crypto icons
import axios from 'axios';
import './CryptoPrices.css';
import CryptoCard from './CryptoCard';

import BTC from '../images/BTC.svg';
import ETH from '../images/ETH.svg';
import XLM from '../images/XLM.svg';
import XRP from '../images/XRP.svg';
import ETC from '../images/ETC.svg';
import BCN from '../images/BCN.svg';


const btcIcon = {iconId: 0, icon: BTC};
const ethIcon = {imgId: 1, icon: ETH};
const xrpIcon = {iconId: 2, icon: XRP};
const bcnIcon = {imgId: 3, icon: BCN};
const xlmIcon = {iconId: 4, icon: XLM};
const etcIcon = {imgId: 5, icon: ETC};

class CryptoPrices extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            coins: []
        }
    }

    componentDidMount() {
        this.getCurrentPrices();
        // Recall coins prices every 1 hour.
        setInterval(() => {
            this.getCurrentPrices();
            console.log("just recall prices!");
        }, 3600000);
    };
    
    getCurrentPrices = async () => {
        const myPrices = [];
        const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=33&page=1&sparkline=false';
        let currentPrices = await axios.get(URL);
            // const prices = response.data; --> A variable to check if we are getting the any response.
            let btc = currentPrices.data[0];
            let eth = currentPrices.data[1];
            let xrp = currentPrices.data[3];
            let bcn = currentPrices.data[4];
            let xlm = currentPrices.data[16];
            let etc = currentPrices.data[32];

            // Adding to each coin object the new icon that I want to dispaly
            btc = {...btc, ...btcIcon};
            eth = {...eth, ...ethIcon};
            xrp = {...xrp, ...xrpIcon};
            bcn = {...bcn, ...bcnIcon};
            xlm = {...xlm, ...xlmIcon};
            etc = {...etc, ...etcIcon};

            myPrices.push(btc, eth, xrp, bcn, xlm, etc);
            this.setState({ coins: myPrices, isLoading: false });
            console.log("Prices: ", this.state.coins); // --> Checking myPrice array's (line 18) current contidion.
    }

    render() { 
        return (  
            <div className="container">
                {this.state.isLoading ? (
                    <div>
                        <div id='loader'></div> 
                        <h4>Loading...</h4>
                    </div>
                ) : (
                    <CryptoCard editedCoins={this.state.coins} />
                )}
            </div>
        );
    }
}
 
export default CryptoPrices;