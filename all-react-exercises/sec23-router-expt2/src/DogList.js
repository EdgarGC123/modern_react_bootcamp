import React, { Component } from "react";
import './DogList.css'

class DogList extends Component{
    render(){
        const dogs = this.props.dogs;
        return(
            <div className="DogList">
                {dogs.map(dog =>
                    <div key={dog.name} className="indy-dog">
                        <img src={dog.src}/>
                        <p>{dog.name}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default DogList;