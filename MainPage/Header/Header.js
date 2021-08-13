import React from 'react';
import bird from './img/bird.svg';
import loupe from './img/loupe.svg';
import user from './img/user.svg';
import './css/header.css';
function Header(){
    return(
    <div  className="header">
        <div className="header-container">
            <div className="nav">
                <button  className="logo">
                    <div className="logo-sq">
                        <div className="logo-el">
                            <img src={bird} alt="Chardarii" />
                        </div>
                    </div>
                    <p>Chardarii</p>
                </button>
                
                
                <ul className="menu">
                    <li><button  className="current-menu-p">Главная</button></li>
                    <li><button>Авторы</button></li>
                    <li><button >Жанр</button></li>
                    <li><button >Стать автором</button></li>
                </ul>
                
                <div className="search-box">
                    <button  className="search-btn">
                        <img src={loupe} alt="" />
                    </button>
                    <input  type = "text" className="search-txt" placeholder="Поиск..." />
                </div>
                
                
                  <ul className="lang-menu">
                    <li><button  className="submenu-link">Русский</button>
                      <ul className="submenu">
                        <li><button >Английский</button></li>
                        <li><button >Мокшень кяль</button></li>
                        <li><button >Эрьзянь кяль</button></li>
                      </ul>
                    </li>
                  </ul>       
                
                <div className="user"><button ><img src={user} alt=""/></button></div>

            </div>
        </div>
    </div>


    );
}
export default Header;