//First.js
import React from 'react'
imort Second from './second'
function First(){
    let [isOpen, setOpenState] = React.useState(false)
    return(
        <div>
        <Second isOpen = {isOpen}/>
        <button onClick={()=>{setOpenState(true)}}>Open</button>
        </div>
    );
}
export default First;

//Second.js

import React from 'react'
function Second(props){
    let [isOpen, setOpenState] = React.useState(props.isOpen)
    return(
        isOpen&&<div>
        <p>Text</p>
        <button onClick={()=>{setOpenState(false)}}>Close</button>
        </div>
    );
}export default Second;
