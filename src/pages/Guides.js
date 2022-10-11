import React, { useState, useEffect, useRef } from 'react';
import JSONTalent from '../assets/data/TalentAscend'
import JSONCharAsc from '../assets/data/characterAscend.json'
import JSONWeapAsc from '../assets/data/weaponAscend.json'
import GuideTable from '../components/GuideTable';

function Guides() {

    const didMount = useRef(false);

    useEffect(() => {
        if (!didMount.current) {
            didMount.current = true;
            return;
        }
    }, [])
    
    return (
        <div className="container">
            <div className="guides">
                <div className="header-box">
                    <h1>Genshin Impact Characters Tier List</h1>
                </div>

                <div className="guides__header">
                    <p>Knowing when and where to farm materials for talents, characters, and weapon ascensions will allow you to successfully plan ahead of time how to best invest your daily Resin. Below are the daily rotations for every item needed. You can farm every day-specific items on Sundays but it's less efficient because you will have a chance of getting any of them.</p>
                </div>

                <p className="heading-4">Character Talents Materials</p>
                <GuideTable 
                    data={JSONTalent}
                    days
                    characters
                />
                <p className="heading-4">Character Ascension Materials</p>
                <GuideTable 
                    data={JSONCharAsc}
                    characters
                />
                <p className="heading-4">Weapon Ascension Materials</p>
                <GuideTable 
                    data={JSONWeapAsc}
                    days
                />


            </div>
        </div>
    )
}

export default Guides;