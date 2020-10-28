import React, { Component } from 'react';

// In this component we will make API call to get current cryprto prices
import axios from 'axios';
import './CryptoPrices.css';
import CryptoCard from './CryptoCard';

class CryptoPrices extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            prices: []
        }
    }

    async componentDidMount() {
        const myPrices = [];
        const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=35&page=1&sparkline=false';
        let currentPrices = await axios.get(URL);
            // const prices = response.data; --> A variable to check if we are getting the any response.
            let btc = currentPrices.data[0];
            let eth = currentPrices.data[1];
            let xrp = currentPrices.data[3];
            let bch = currentPrices.data[4];
            let xlm = currentPrices.data[16];
            let etc = currentPrices.data[33];
            myPrices.push(btc, eth, xrp, bch, xlm, etc);
            this.setState({ prices: myPrices, isLoading: false });
            // console.log("PRICES:", this.state.prices) --> Checking myPrice array's (line 18) current contidion. 
    };
    
    render() { 
        return (  
            <div className="container">
                {this.state.isLoading ? (
                    <div>
                        <div id='loader'></div> 
                        <h4>Loading...</h4>
                    </div>
                ) : (
                    <CryptoCard prices={this.state.prices} />
                )}
            </div>
        );
    }
}
 
export default CryptoPrices;