import React from 'react'
import CharacterIcon from '../CharacterIcon'
import useCharacter from '../../api/hooks/useCharacter'

function TeamCard({characters = []}) {
    const { getCharacter } = useCharacter();

    return (
        <div className="team_card">
            {
                characters.map((item) => {
                    let character = getCharacter(item);

                    return <CharacterIcon 
                                key={item}
                                name={character.name}
                                vision={character.type}
                                weapon={character.weapon}
                            />
                })
            }

        </div>
    )

}

export default TeamCard