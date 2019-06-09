import React from 'react';
import Character from './Character';


const CharactersList = props => {
    console.log(props.charlist.starwarsChars)
    return (
        <div>
            {props.charlist.starwarsChars.map(char => {
                return (
                    <Character key={char.url} charitem={char} />
                )
            })}
        </div>
    )        
}

export default CharactersList;