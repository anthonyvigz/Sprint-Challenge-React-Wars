import React from 'react';


const Character = props => {
    return (
            <div className="characters" onClick={props.homeworld}>
                {props.charitem.name}
            </div>
    )
}

export default Character;