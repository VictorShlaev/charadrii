import React from 'react'
import './css/autor.css'
import '../css/cardFooter.css'
import look from '../img/look.svg'
import smile from '../img/smile.svg'
import PropTypes from 'prop-types'

function AutorCard({card, onAutorCardClick, onCardClick}){
    let [isLiked, setLiked] = React.useState(false)
    return(
        <div className="autor" >  
            <p className="autor-n"  onClick={()=>{onCardClick(card.id, 1);}}>{card.autor}</p>
            <div className="autor-footer">
                <div className="looked">
                    <img src={look} alt = ""/>
                    <p>{card.looked}</p>
                </div>
                <div className="liked">
                    <button ><img src={smile} alt ="" onClick = {()=>{onAutorCardClick(card.id, isLiked)
                    setLiked(isLiked =!isLiked)
                    }}/></button>
                    <p>{card.liked}</p>
                </div>
            </div>
        </div>
    );
}

AutorCard.propTypes = {
    card: PropTypes.object.isRequired,
    onAutorCardClick: PropTypes.func.isRequired,
    onCardClick: PropTypes.func.isRequired
}

export default AutorCard;