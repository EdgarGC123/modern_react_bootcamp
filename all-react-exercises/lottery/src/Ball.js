import React, {Component} from 'react';

class Ball extends Component{
    static defaultProps = {
        ballNums: [1]
    }
    render(){
        return (
            <div>{this.props.set}</div>
        )
    }
}

export default Ball