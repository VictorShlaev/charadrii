import React from 'react'
import './css/card.css'
import '../css/cardFooter.css'
import look from '../img/look.svg'
import smile from '../img/smile.svg'
import PropTypes from 'prop-types'
// import FullCard from '../FullCard/FullCard'

function WorkCard({card, onWorkCardClick, openFullCard }){
  let [isLiked, setLiked] = React.useState(false)
//   let [isOpen, setOpen] = React.useState(false)

  return (
        <div className="compos" onClick = {()=>{
            // setOpen(!isOpen)
            openFullCard(card.id)
        }
        } > {/*стоит поработать над закрыванием, будет фича а не баг ес чо */}
            {/* <FullCard isOpen = {isOpen} card = {card}/> */}
            <div className="comp-title" >  
                <p className="comp-name">{card.title}</p>
                <p className ="autor-name">{card.autor}</p>
            </div>
            <div className="comp-body">
                <p>{card.text}</p>
            </div>
            <div className="comp-footer">
                <div className="looked">
                    <img src={look} alt=""  />
                    <p>{card.looked}</p>
                </div>
                <div className="liked">
                    <button ><img src={smile} alt ="" onClick={()=>{onWorkCardClick(card.id, isLiked)
                    setLiked(isLiked =!isLiked)
                    }}/></button>
                    <p>{card.liked}</p>
                </div>
            </div>
        </div>
    );
}


WorkCard.propTypes={
    card: PropTypes.object.isRequired,
    onWorkCardClick: PropTypes.func.isRequired,
}
export default WorkCard;