import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { COLORS } from '../configs/constants';
import useCharacter from '../api/hooks/useCharacter';
import CharacterIcon from '../components/CharacterIcon';
import CharacterShowcase from '../components/CharacterShowcase';
import CharacterInfoList from '../components/CharacterInfo/CharacterInfoList';
import Builds from '../components/Builds/Builds';

function Character() {
    const params = useParams();
    const {getCharacter} = useCharacter();
    const [character, setCharacter] = useState({})
    // const didMount = useRef(false);

    useEffect(() => {
        // if (!didMount.current) {
        //     didMount.current = true;
        //     return;
        // }
        setCharacter(getCharacter(params.name));
    }, []);

    if(Object.keys(character).length == 0){
        return <p>Loading...</p>
    }

    return (
        <div className="container">
            <div className="character">
                <div className="character__header">
                    <CharacterIcon 
                        name={character.name}
                        rarity={character.rarity}
                        vision={character.type}
                        weapon={character.weapon}
                        hideName
                        big
                        cardLeft
                    />
                    <div className='header__title'>
                        <p className='title__game'>Genshin Impact</p>
                        <p className='title__name'>{character.name} Best Build</p>
                        <p className='title__info'><span className={COLORS[character.type]}>{character.type}</span> | {character.weapon}</p>
                    </div>

                </div>

                <div className="character__nav">
                    <a href="#builds">Builds</a>
                    <a href="#skills">Skills</a>
                    <a href="#passives">Passives</a>
                    <a href="#constellations">Constellations</a>
                    <a href="#showcase">Showcase</a>
                </div>

                <div className="character__main">

                    <Builds 
                        id="builds"
                        name={character.name} 
                        data={character.builds}
                        theme={character.type}
                    />

                    <CharacterInfoList 
                        id="skills"
                        title={character.name + " Skills Talents"}
                        data={character.skills}
                        theme={character.type}
                        primary='name'
                        secondary='type'
                    />

                    <CharacterInfoList 
                        id="passives"
                        title={character.name + " Passive Talents"}
                        data={character.passives}
                        theme={character.type}
                        primary='name'
                        secondary='unlock'
                    />

                    <CharacterInfoList 
                        id="constellations"
                        title={character.name + " Constellations"}
                        data={character.constellations}
                        theme={character.type}
                        primary='name'
                        customSecondary={index => "Constellations Lvl. " + (index + 1)}
                    />
                    
                    {
                        character.showcase &&
                            <CharacterShowcase 
                                id="showcase"
                                name={character.name}
                                link={character.showcase.link}
                                description={character.showcase.description}
                            />
                    }
     
       
                </div>
            </div>
        </div>
    )
}

export default Character