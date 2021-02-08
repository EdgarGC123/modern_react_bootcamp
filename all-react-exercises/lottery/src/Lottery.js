import React, {Component} from 'react';
import Ball from './Ball.js'
import './Lottery.css'

class Lottery extends Component{
    static defaultProps ={
        title: 'Loto',
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props){
        super(props);
        this.state = {
            nums: Array.from({length: this.props.maxBalls})
        };
    }
    generate =()=>{
        //pick a bunch of random numbers
        this.setState(curState=>({
            nums: curState.nums.map(
                n => Math.ceil(Math.random()*this.props.maxNum)
            )
        }))
    }
    handleClick = ()=>{
        this.generate();
    }
    render(){
        return (
            <section className ="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n =>{
                        return (
                            <Ball num={n}></Ball>
                        )
                    })}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        )
    }
}

export default Lottery;