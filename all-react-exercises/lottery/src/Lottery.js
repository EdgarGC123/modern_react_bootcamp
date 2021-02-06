import React, {Component} from 'react';
import Ball from './Ball.js'

class Lottery extends Component{
    static defaultProps ={
        title: 'Loto',
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props){
        super(props);
        this.state = {
            nums: []
        }
    }
    generate =()=>{
        //pick a bunch of random numbers
    }
    handleClick = ()=>{
        this.generate();
    }
    render(){
        return (
            <section className ="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    <Ball set={this.state.set1}></Ball>
                    <Ball set={this.state.set2}></Ball>
                </div>
                <button onClick={this.handleClick}></button>
            </section>
        )
    }
}

export default Lottery;