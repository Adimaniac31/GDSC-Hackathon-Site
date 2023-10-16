import React from 'react';
import "./LinkDiv.css";

const LinkDiv = (props) => {
    return (
        <div className='content' style={{ backgroundColor: "white" }}>
            <img src={props.img} className='image' />
            <h1 style={{fontFamily:"Nunito Sans"}}>
                {props.name}
            </h1>
            <div className='link'>
                <a href={props.Link}>🔗{props.Link}</a>
            </div>
        </div>
    )
}

export default LinkDiv;