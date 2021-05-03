import {useState} from 'react';

//call useState
//return piece of state AND a function to toggle it

function useToggle(initialVal = false){
    const [state, setState] = useState(initialVal);
    const toggle = () =>{
        setState(!state)
    }
    return [state, toggle];
}

export default useToggle;