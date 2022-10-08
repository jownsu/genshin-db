import React, { useState } from 'react'
import character from '../../assets/data/characters.json'

function useCharacter() {
    const [characters, setCharacters] = useState(character)

    const filterCharacter = (search) => {
        setCharacters(character.filter(item => {

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
        filterCharacter    
    }

}

export default useCharacter