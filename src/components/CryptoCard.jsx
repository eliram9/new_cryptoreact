import React from 'react';

import BTC from '../images/BTC.svg';
// import ETH from '../images/ETH.svg';
// import XLM from '../images/XLM.svg';
// import XRP from '../images/XRP.svg';
// import ETC from '../images/ETC.svg';
// import BCN from '../images/BCN.svg';

const CryptoCard = (props) => {
    const prices = props.prices.map((price) => {
    return <div><p>{price.name}</p></div>
    }) ;
    

    return (  
        <div>
            {/* <div className="card" style={{ width: "13rem" }}> */}
            <img src={BTC} alt="image cap" style={{ width: '15%', padding: 15 }} />
            {/* <img src={ETH} alt="image cap" style={{ width: '15%', padding: 15 }} />
            
            <img src={ETC} alt="image cap" style={{ width: '15%', padding: 15 }} />
            <img src={BCN} alt="image cap" style={{ width: '15%', padding: 15 }} />
            <img src={XRP} alt="image cap" style={{ width: '15%', padding: 15 }} />
            
            <img src={XLM} alt="image cap" style={{ width: '15%', padding: 10 }} /> */}
            
                {/* <div className="card-body">
                    <h5 className="card-title text-info">{prices[1].name}</h5>
                    <p className="card-text lead text-info">${prices[1].current_price}</p> */}
                    {/* <a href="#" className="btn btn-outline-info">Go somewhere</a> */}
                {/* </div> */}
            {/* </div> */}
            {prices}
        </div>
    );
}
 
export default CryptoCard;