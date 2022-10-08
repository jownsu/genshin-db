import React, { useState, useEffect, useRef } from 'react'
import CharacterIcon from '../CharacterIcon'
import Filter from './Filter';
import Search from '../Search';
import useCharacter from '../../api/hooks/useCharacter';

function CharacterList() {
    const [filter, setFilter] = useState({
        search: '',
        vision: '',
        weapon: ''
    })

    const { characters, filterCharacter } = useCharacter();

    const didMount = useRef(false);

    useEffect(() => {
        if (!didMount.current) {
            didMount.current = true;
            return;
        }
        filterCharacter(filter);
    }, [filter])
    

    return (
        <div className="container">
            <div className="character_list">
                <div className="character_list__header">
                    <h1>Genshin Impact Characters List</h1>
                    <Search 
                        onChange={(val) => {
                            setFilter(prevState => (
                                {
                                    ...prevState,
                                    search: val
                                }
                            ))
                        }}
                    />
                </div>

                <Filter 
                    onVisionChange={(val) => {
                        setFilter(prevState => (
                            {
                                ...prevState,
                                vision: val
                            }
                        ))
                    }}
                    onWeaponChange={(val) => {
                        setFilter(prevState => (
                            {
                                ...prevState,
                                weapon: val
                            }
                        ))
                    }}
                />
            
                <div className="character_list__main">
                    {
                        characters.map(item => (
                            <CharacterIcon 
                                key={item.id}
                                name={item.name}
                                weapon={item.weapon}
                                vision={item.type}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default CharacterList