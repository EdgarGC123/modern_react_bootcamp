import React, {Component} from 'react';

class Coin extends Component{
    static defaultProps={
        face:null
    }
    constructor(props){
        super();
    }
    render(){
        let coin = {
            'head': `https://tinyurl.com/react-coin-heads-jpg`,
            'tail': `https://tinyurl.com/react-coin-tails-jpg`
        }
        return (
            <img src={coin[this.props.face]}/>
        )
    }
}

export default Coin;