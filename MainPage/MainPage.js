import React from 'react'
import Body from './Body/Body';
import Header from './Header/Header'
import './main.css'
function MainPage(){
    const[workCards,setWorkCards] = React.useState([
        {id: 1,title: "Мастер и маргирита", autor: "Булгаков", text: "Это чистый спирт бла бла бла", looked: 920, liked: 880},
        {id: 2,title: "Война и мир", autor: "Толстой", text: "Небо небо такое небо", looked: 550, liked: 180},
        {id: 3,title: "Идиот", autor: "Достоевский", text: "Ох, эх, тоска ", looked: 220, liked: 190},
        {id: 4,title: "Как закалялась сталь", autor: "Островский", text: "Еще поборимся товарищи", looked: 320, liked: 280},
    ]);

    const [autorCards,setAutorCards] =React.useState([
        {id:1, isLiked: false,autor:"Булгаков", looked: 320, liked: 310},
        {id:2, isLiked: false, autor:"Пушкин", looked: 320, liked: 305},
        {id:3, isLiked: false, autor:"Лермонтов", looked: 310, liked: 301},
        {id:4, isLiked: false, autor:"Толстой", looked: 290, liked: 300},

    ])
    function workCardLiked(id, isLiked){
      setWorkCards(
        workCards.map(card =>{
            if(card.id ===id && !isLiked )
            {
                card.liked +=1;     
            }
            else if(card.id ===id && isLiked){
                card.liked -=1;
            }
            return card;
        })
      )  
    }

    function autorCardLiked(id, isLiked){
        setAutorCards(
          autorCards.map(card =>{
              if(card.id ===id && !isLiked )
              {
                  card.liked +=1;
              }
              else if(card.id ===id && isLiked){
                  card.liked -=1;
              }
              return card;
          })
        )  
      }

      function onCardClick(id, cardType){
          if(cardType ===0){
            setWorkCards(
                workCards.map(card =>{
                    if(card.id ===id )
                    {
                        card.looked ++;
                    }
                    return card;
                })
              )  

          }else if(cardType ===1){
            setAutorCards(
                autorCards.map(card =>{
                    if(card.id ===id )
                    {
                        card.looked ++;
                    }
                    return card;
                })
              )  
 
          }
        
      }
    return(
    <div>
    <Header/>
    <Body workCards = {workCards} 
        autorCards = {autorCards}
        onWorkCardClick = {workCardLiked}
        onAutorCardClick = {autorCardLiked}
        onCardClick = {onCardClick} 
        />
    </div>
    );
}
export default MainPage;