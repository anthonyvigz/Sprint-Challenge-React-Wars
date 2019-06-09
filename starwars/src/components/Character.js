import React from 'react';


const Character = props => {
    return (
            <div className="characters">
                {props.charitem.name}
            </div>
    )
}

export default Character;