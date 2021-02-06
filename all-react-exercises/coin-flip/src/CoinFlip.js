import React, {Component} from 'react'
import Coin from './Coin.js'

class CoinFlip extends Component{
    // static defaultProps = {
    //     coins: [
    //         {side: "heads", imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
    //         {side: "tails", imgSrc: 'https://tinyurl.com/react-coin-tails-jpg'}
    //     ]
    // }
    constructor(props){
        super(props);
        this.state = {
            coin: false,
            count: [0,0,0],//total, headCount, tailCount //-- for some reason using an array doesn't work. 
            total: 0,
            nHeads: 0,
            nTails: 0
        }
    }
    flip = () =>{
        let c = Math.floor(Math.random() * 2);
        let tmp;
        if(c===0){
            tmp = 'head'
        }else{
            tmp = 'tail'
        };
        this.setState( st => {
            let newState = {
                ...st
            }
            newState.coin = tmp;
            // console.log("running setState", newState.count[0])
            if(tmp == 'head'){
                // newState.count[1]=newState.count[1] +1;
                // newState.count[0]=newState.count[0] +1;
                newState.total++
                newState.nHeads++;
            }else{
                // newState.count[2]=newState.count[2] +1;
                // newState.count[0]=newState.count[0] +1;
                newState.nTails++
                newState.total++
            }
            // console.log("after if statement: ", newState.count[0])
            return newState;
        });
        // console.log("completed setState", this.state.count[0])
    }
    handleClick = () =>{
        this.flip();
    }
    render(){
        let count = this.state.count;
        console.log("we are in render", this.state.total)
        let phrase = `Out of ${this.state.total} ${this.state.total===1 ? 'flip': 'flips'}, there have been ${this.state.nHeads} ${this.state.nHeads===1 ? 'head': 'heads'} and ${this.state.nTails} ${this.state.nTails===1 ? 'tail': 'tails'}`

        let altPhrase = `Out of ${count[0]} ${count[2]===1 ? 'flip': 'flips'}, there have been ${count[1]} ${count[2]===1 ? 'head': 'heads'} and ${count[2]} ${count[2]===1 ? 'tail': 'tails'}`
        return (
            <div>
                <h1>Let's flip a coin</h1>
                {this.state.coin && <Coin face = {this.state.coin}></Coin> }
                <button onClick={this.handleClick}>Flip Coin</button>
                <p>{phrase}</p>
            </div>
        )
    }
}

export default CoinFlip;