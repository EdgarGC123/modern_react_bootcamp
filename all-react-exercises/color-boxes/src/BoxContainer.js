import React, {Component} from 'react'
import Box from './Box';
import './BoxContainer.css'

class BoxContainer extends Component{
    static defaultProps = {
        numBoxes: 50,
        allColors: ["purple", "magenta", "pink", "violet", "red", "orange", "yellow","green","lime", "blue", "salmon"]
        // allColors: ["pink", "salmon"]
    }
    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map( () =>(
            <Box colors={this.props.allColors}/>
        ))
        return (
            <div className="BoxContainer">
                {boxes}
            </div>
        )
    }

}    
export default BoxContainer;