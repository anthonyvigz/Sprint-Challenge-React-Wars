import React from 'react';
import Character from './Character';


const CharactersList = props => {
    return (
        <div>
            {props.charlist.starwarsChars.map(char => {
                return (
                    <Character homeworld={props.homeworld} key={char.url} charitem={char} />
                )
            })}
        </div>
    )        
}

export default CharactersList;