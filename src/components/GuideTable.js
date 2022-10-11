import React from 'react';
import Icon from './Icon';
import CharacterIcon from './CharacterIcon';
import { MATERIAL_ICON_URL } from '../configs/constants'
import useCharacter from '../api/hooks/useCharacter';

function GuideTable({data, characters, days}) {
    const { getCharacter } = useCharacter();

    return (
        <table className='guide_table'>
            <thead>
                <tr>
                    <th>Materials</th>
                    { days && <th>Days</th>}
                    { characters && <th>Characters</th>}
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item => (
                        <tr key={item.id}>
                            <td data-label="Materials">
                                <div className="guide_table__name">
                                    <Icon 
                                        url={MATERIAL_ICON_URL}
                                        name={item.name.toLowerCase()}    
                                    />
                                    {item.name}
                                </div> 
                            </td>
                            { days && <td data-label="Days">{item.days.join(', ')}</td> } 
                            { characters && 
                                <td data-label="Characters">
                                    <div className='guide_table__chars'>
                                        {
                                            item.characters.map(item => {
                                                let char = getCharacter(item);
                                                return <CharacterIcon 
                                                            key={char.name}
                                                            name={char.name}
                                                            vision={char.type}
                                                            weapon={char.weapon}
                                                            small
                                                            hideName
                                                        />
                                            })
                                        }
                                    </div>
                                </td>
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default GuideTable