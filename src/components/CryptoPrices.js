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
        let currentPrices = await axios.get(URL)
            .then(response => {
                // const prices = response.data;
                let btc = response.data[0];
                let eth = response.data[1];
                let xrp = response.data[3];
                let bch = response.data[4];
                let xlm = response.data[16];
                let etc = response.data[33];
                myPrices.push(btc, eth, xrp, bch, xlm, etc);
                this.setState({ prices: myPrices, isLoading: false  });
                // console.log("PRICES:", this.state.prices)
        });
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
                    <CryptoCard prices={this.state.prices} />
                )}
            </div>
        );
    }
}
 
export default CryptoPrices;