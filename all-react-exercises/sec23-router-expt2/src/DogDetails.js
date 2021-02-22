import React, { Component } from "react";

class DogDetails extends Component{
    render(){
        // const dogdetails = this.props.dog;
        const {dog, page} = this.props
        const facts = dog.facts.map(fact => <p>{fact}<br/></p>)
        return (
            <div>
                <h1>Name: {dog.name}</h1>
                <h2>Age: {dog.age}</h2>
                <h4>Facts:</h4>
                {facts}
                <img src={dog.src}/>
                {/* {dogdetails.match.params.dogname} */}

            </div>
        )
    }
}

export default DogDetails;