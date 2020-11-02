import React, { useState, useEffect } from 'react';

import axios from 'axios';


export default function CurrentPriceHooks() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=33&page=1&sparkline=false')
             .then(result => setData(result.data));
    }, []);
}

return(
    <div>
        <ul>
            {data.map(coin => (
                <li key={coin.id}>
                    <p>Name:{coini.id}</p>
                </li>
            ))}
        </ul>
    </div>
)