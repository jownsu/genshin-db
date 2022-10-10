import React, { useState, useEffect, useRef } from 'react'
import Filter from '../components/Filter';
import Search from '../components/Search';
import useCharacter from '../api/hooks/useCharacter';
import TierCard from '../components/TierCard';

function Tiers() {
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
            <div className="tiers">
                <div className="header-box">
                    <h1>Genshin Impact Characters Tier List</h1>
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

                <div className="tiers__header">
                    <p>Units are evaluated at the constellation marked on their portrait and by their optimal roles. Tiers are ordered alphabetically.
                    Heavily based on the Tier List by <a href="https://space.bilibili.com/24889090" target="_blank">Usagi Sensei</a>, a well known and respected theory crafter.</p>
    
                </div>

                <div className="tiers__main">
     
                    <TierCard 
                        tier={0}
                        characters={characters.filter(item => item.tier == 0)}
                    />
                    <TierCard 
                        tier={1}
                        characters={characters.filter(item => item.tier == 1)}
                    />
                    <TierCard 
                        tier={2}
                        characters={characters.filter(item => item.tier == 2)}
                    />
                    <TierCard 
                        tier={3}
                        characters={characters.filter(item => item.tier == 3)}
                    />
                    <TierCard 
                        tier={4}
                        characters={characters.filter(item => item.tier == 4)}
                    />
                    <TierCard 
                        tier={5}
                        characters={characters.filter(item => item.tier == 5)}
                    />
                    <TierCard 
                        tier={6}
                        characters={characters.filter(item => item.tier == 6)}
                    />
                </div>

            </div>
        </div>
    )
}

export default Tiers;