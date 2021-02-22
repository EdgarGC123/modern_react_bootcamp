import React, { Component } from "react";
import DogList from './DogList'
import DogDetails from './DogDetails'
import {Switch, Route} from 'react-router-dom'

class Routes extends Component{
    render(){
        const dogs = this.props.dogs;
        console.log("we are in routes calling a route")
        console.log(dogs[0].name)
        return (
            <Switch>
                <Route exact path="/" render={() => <DogList dogs={dogs}/>}/>
                {dogs.map(dog =>
                    <Route exact path={`/${dog.name}`} render={() => <DogDetails dog={dog}/>}/>
                )}
                {/* <Route exact path="/:dogname" render={(dogparams) => <DogDetails dog={dogparams}/>} /> */}
            </Switch>
        )
    }
}

export default Routes;