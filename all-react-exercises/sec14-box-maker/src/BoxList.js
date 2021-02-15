import React, {Component} from 'react';
import Box from './Box.js';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: []
        }//state
    }
    remove(id){
        this.setState({
            boxes: this.state.boxes.filter(box=> box.id !== id)
        })
    }
    create=(newBox)=>{
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }
    render(){
        const boxes = this.state.boxes.map(box =>(
            <Box
                id={box.id}
                key={box.id}
                width = {box.width}
                height = {box.height}
                color={box.color}
                removeBox = {() => this.remove(box.id)}
            />
        ))
        return (
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm createBox={this.create}/>
                {boxes}
            </div>
        );
    }
}

export default BoxList;