import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            year: new Date()
         }
    }

    componentDidMount() {
        // Edit year function
        this.timerID = setInterval(() => {
            this.setState({time: new Date()});
            // Check year every 24 hours
        }, 864000);
    }


    render() { 
        return ( 
            <div className="fixed-bottom">
                <p className="small">All rights reserved &copy; {this.state.year.getFullYear()} | Eliram Malachi</p>
            </div>
         );
    }
}
 
export default Footer;