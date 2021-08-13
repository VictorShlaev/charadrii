import React from 'react'

function ComposContainer(props){
    return(
        <div className="best-compos">
                {props.children}
        </div>

    );
}

export default ComposContainer;