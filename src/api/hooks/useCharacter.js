import React, { useState } from 'react'
import JSONCharacter from '../../assets/data/characters.json'

function useCharacter() {
    const [characters, setCharacters] = useState(JSONCharacter);

    const filterCharacter = (search) => {
        setCharacters(JSONCharacter.filter(item => {

            if (
                item.name.toLowerCase().match(search.search.toLowerCase()) && 
                filterMatch(search.vision, item.type) &&
                filterMatch(search.weapon, item.weapon)
                ) {
                return true
            }

            return false;
        }))
    }

    const getCharacter = (name) => {
        return JSONCharacter.find(item => item.name == name);
    }

    const filterMatch = (input, data) => {
        if(input == ''){
            return true;
        }

        if(input == data){
            return true;
        }

        return false;
    }

    return {
        characters,
        getCharacter,
        filterCharacter    
    }

}

export default useCharacter