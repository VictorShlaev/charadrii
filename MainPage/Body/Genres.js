import React from 'react'

function Genres(){
    return(
        <ul className="genre">
            <li><button className="current-genre"  >Стих</button></li>
            <li><button >Проза</button></li>
        </ul>
    );
}

export default Genres;