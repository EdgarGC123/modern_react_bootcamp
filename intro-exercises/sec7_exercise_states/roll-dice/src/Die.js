import React, { Component } from 'react';
import './Die.css'

class Die extends Component{
    render(){
        let shake = `${this.props.rolling ? 'rolling' : ''}`
        let diceFace = `Die fas fa-dice-${this.props.face} ${shake}`;
        return <i className={diceFace}></i>
    }
}

export default Die;