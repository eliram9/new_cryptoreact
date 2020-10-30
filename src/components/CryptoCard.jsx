import React, { Component } from 'react';

class CryptoCard extends Component {
    constructor(props) {
        super();
        this.state = {
            rt_coins: []
        }
    }

    async componentDidMount() {
        const newCoins = await this.props.editedCoins;
        this.setState({ rt_coins: newCoins });
        console.log(this.state.rt_coins);
    }
    

    render() { 
    
        return (  
            <div className="mt-4">
                <div className="coin_list row mt-4">
                    {this.state.rt_coins.map(coin => (
                        <div className="col-4 col-md-2 mt-4" key={coin.id}>
                            <img src={coin.icon} alt="image cap" />
                            <div className="align-bottom py-3">
                                <h5 className="meduim">{coin.name}</h5>
                                <p className="text-warning small">${coin.current_price.toFixed(2)}</p>
                            </div>
                    </div>
                    ))}

                    
                    {/* <div className="col-4 col-sm-4 col-md-2 col-lg-4 col-xl-2" style={{border:"1px solid #333"}}>
                        <img src={BTC} alt="image cap"/>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2 col-lg-4 col-xl-2" style={{border:"1px solid #333"}}>
                        <img src={BTC} alt="image cap"/>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2 col-lg-4 col-xl-2" style={{border:"1px solid #333"}}>
                        <img src={BTC} alt="image cap"/>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2 col-lg-4 col-xl-2" style={{border:"1px solid #333"}}>
                        <img src={BTC} alt="image cap"/>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2 col-lg-4 col-xl-2" style={{border:"1px solid #333"}}>
                        <img src={BTC} alt="image cap"/>
                    </div> */}
                </div>  
            </div>
        );
    }
}
 
export default CryptoCard;