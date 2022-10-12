import React from 'react'
import { ICONS_URL } from '../configs/constants'

function Icon(props) {

    let {
        url,
        name, 
        rarity, 
    } = props;




    const renderStars = () => {
        let stars = [];

        for(let i = 1; i <= rarity; i++){
            stars.push(
                    <img 
                        key={i}
                        src={ICONS_URL + 'star.png'} 
                        alt='star'
                        className='character_icon__star' 
                    />
                );
        }

        return stars;
    }

    return (
        <div className="character_icon">
            <img 
                src={url + name.split(' ').join('_').toLowerCase() + '.png'} 
                alt={name}
                className='character_icon__image'    
            />
            { rarity &&
                <div className="character_icon__stars">
                    {renderStars()}
                </div> 
            }
        </div>
    )
}

export default Icon