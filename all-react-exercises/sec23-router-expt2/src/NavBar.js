import React, { Component } from "react";
import {NavLink} from 'react-router-dom'

class NavBar extends Component{
    render(){
        const dogs = this.props.dogs; //const {dogs} = this.props

        console.log(dogs[0].name)
        return (
            <nav navbar navbar-expand-lg navbar-dark bg-light>
                <NavLink exact activeClassName="active-link" className="nav-link" to="/">Home</NavLink>
                {dogs.map(dog => 
                     <NavLink exact activeClassName="active-link" className="nav-link" to={`/${dog.name}`} key={dog.name}>{dog.name}</NavLink>)}
            </nav>
        )
    }
}

export default NavBar;