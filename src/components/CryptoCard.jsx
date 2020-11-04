import React from 'react';

import './CryptoCard.css';

const CryptoCard = ({ coins }) => {  

    return (
        <div className="mt-4">
            <div className="coin_list row mt-4">
                {coins.map(coin => (
                    <div className="col-4 col-md-2 mt-4" key={coin.id}>
                        <img src={coin.iconImage} alt="image cap" width="100px" />
                        <div className="align-bottom py-3">
                            <h5 className="coin_name">{coin.name}</h5>
                            <p className="coin_price">${coin.current_price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default CryptoCard;

