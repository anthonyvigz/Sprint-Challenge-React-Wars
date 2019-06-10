import React from 'react';


const Character = props => {
    return (
            <div>
            <div className="characters" onClick={props.homeworld}>
                {props.charitem.name}
            </div>
            <h1 className="mass">Mass: {props.charitem.mass}</h1>
            </div>
    )
}

export default Character;