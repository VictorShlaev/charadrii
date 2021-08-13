import React from 'react'
import './css/content.css'
import WorkCard from '../../MyComponents/WorkCard/WorkCard'
import AutorCard from '../../MyComponents/AutorCard/AutorCard'
import PropTypes from 'prop-types'
import ComposContainer from './ComposContainer'
import Genres from './Genres'
import Content from './Content'
import Compositions from './Compositions'
import FullCard from '../../MyComponents/FullCard/FullCard'
function Body(props){
    let [isOpen, setIsOpen] = React.useState(false)
    let [card, setCard] = React.useState({})
    function openFullCard(id){
        setIsOpen(true)
        props.workCards.map(card =>{
            if(card.id === id)
                setCard(card)
                return card;
        })
    }
    return(
        <Content>
            <FullCard isOpen = {isOpen} setOpenState={setIsOpen} card = {card}/>
            <ComposContainer>
                <p>Лучшие прозведения</p>
                <Genres/>
                <Compositions>
                    {props.workCards.map((card) =>{
                        return <WorkCard card = {card} 
                        key = {card.id} 
                        onWorkCardClick = {props.onWorkCardClick} 
                        openFullCard = {openFullCard}
                        />
                    })}
                </Compositions>
             </ComposContainer>

             <ComposContainer>
                <p>Лучшие авторы</p>
                <Genres/>
                <Compositions>
                 {
                    props.autorCards.map(card=>{
                        return <AutorCard card = {card} key = {card.id}
                                onAutorCardClick = {props.onAutorCardClick}     
                                onCardClick = {props.onCardClick}/>
                            })
                    }
                </Compositions>
             </ComposContainer>
        </Content>    
    );
}


Body.propTypes = {
    workCards: PropTypes.arrayOf(PropTypes.object).isRequired,
    autorCards: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Body;