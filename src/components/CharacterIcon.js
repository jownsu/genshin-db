import React from 'react'
import { ELEMENTS, WEAPONS, CHARACTER_ICON_URL, ASSET_URL, CHARACTER_CARD_URL } from '../configs/constants'
import { Link } from 'react-router-dom';

function CharacterIcon(props) {

    let {
        name, 
        vision, 
        weapon, 
        rarity, 
        isNew = false,
        hideName = false,
        big = false,
        cardLeft = false
    } = props;

    const renderStars = () => {
        let stars = [];

        for(let i = 1; i <= rarity; i++){
            stars.push(
                    <img src={ASSET_URL + 'star.png'} 
                         alt='star'
                         className='character_icon__star' 
                    />
                );
        }

        return stars;
    }



    return (
        <Link to={'/characters/' + name}>
            <div className="character_icon tooltip" style={ big ? { width: '100px', height: '100px' } : {}}>
                <span style={cardLeft ? {top:'120px',left:'100px',width:'250px'} : {} }>
                    <img src={CHARACTER_CARD_URL + name.split(' ').join('_') + '.png'} alt="" />
                </span>
                <img 
                    src={CHARACTER_ICON_URL + name.split(' ').join('_') + '.png'} 
                    alt={name}
                    className='character_icon__image'    
                />
                { 
                    weapon && 
                        <img 
                            src={WEAPONS[weapon]} 
                            alt={weapon}
                            className='character_icon__weapon'
                            style={big ? {width: '30px', height: '30px'} : {}}
                        />
                }

                {
                    vision && 
                        <img 
                            src={ELEMENTS[vision]} 
                            alt={vision} 
                            className='character_icon__element'    
                            style={big ? {width: '30px', height: '30px'} : {}}
                        />
                }
    

                { !hideName && <p className="character_icon__name">{name}</p>}
                { isNew && <span className="character_icon__new">New</span> }
                { rarity &&
                <div className="character_icon__stars">
                    {renderStars()}
                </div> }
            </div>
 
        </Link>
    )
}

export default CharacterIcon