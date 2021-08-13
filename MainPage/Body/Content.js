import React from 'react'


function Content(props){
    return (
        <div className="content">
            <div className="content-container">
                {props.children}  
            </div>
        </div>
    );
}
export default Content;