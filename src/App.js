import React from 'react';

import './App.css';

import CryptoPrices from './components/CryptoPrices';
import Footer from './components/Footer';
//import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';


const App = () => {
    return (  
        <div className="App text-light">
            <h1 className="display-3 pt-2">Crypto Tracker</h1>
            <CryptoPrices />
            <SearchResult />
            <Footer />
        </div>
    );
}
 
export default App;