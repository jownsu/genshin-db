import React, { useState, useEffect, useRef } from 'react'
import CharacterIcon from '../components/CharacterIcon';
import Filter from '../components/Filter';
import Search from '../components/Search';
import useCharacter from '../api/hooks/useCharacter';

function Character() {
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
            <div className="characters">
                <div className="header-box">
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
            
                <div className="characters__main">
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

export default Character