import React from 'react'
import './css/fullCard.css'

function FullCard(props){
    const [isOpen, setOpenState] = [props.isOpen, props.setOpenState]
return (
        <React.Fragment>
            {isOpen &&(
            <div className="window">
                <div className="win-content">
                    <p>{props.card.title}</p>
                    <button onClick={()=>setOpenState(false)}>Close</button>
                </div>
            </div>)}
        </React.Fragment>

);
}



export default FullCard;