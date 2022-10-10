import React from 'react'
import CharacterIcon from './CharacterIcon'

const COLORS = [
    "#FA3434",
    "#EF5350", 
    "#FF7F7F", 
    "#FFBF7F", 
    "#FFFF7F", 
    "#BFFF7F", 
    "#7FFF7F"
];

const TIERS = [
    'SSS',
    'SS+', 
    'S+', 
    'S', 
    'A', 
    'B', 
    'C',
];

function TierCard({tier, characters = []}) {
    return (
        <div className="tier-card">
            <div className="tier-card__tier" style={{background: COLORS[tier]}}>
                {TIERS[tier]}
            </div>
            <div className="tier-card__main">
                {characters.map(item => (
                    <CharacterIcon 
                        key={item.id}
                        name={item.name}
                        weapon={item.weapon}
                        vision={item.type}
                    />
                ))}
            </div>
        </div>
    )
}

export default TierCard