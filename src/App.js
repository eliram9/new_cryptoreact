import React, { Component } from 'react';

import './App.css';

import CryptoPrices from './components/CryptoPrices';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {} 
    
    }

    render() { 
        return ( 
            <div className="App text-light">
                <h1 className="display-3 pt-4">Crypto Tracker</h1>
                <CryptoPrices />
                <SearchResult />
                <Footer />
            </div>
        );
    }
}
 
export default App;
