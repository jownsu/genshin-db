import React from 'react'
import { CHARACTER_INFOS_URL } from '../../configs/constants'
import { COLORS } from '../../configs/constants'

function CharacterInfoCard(props) {
    const {
        name,
        type,
        description,
        theme,
    } = props

    return (
        <div className="character-info-card">
            <div className="character-info-card__header">
                <img 
                    src={CHARACTER_INFOS_URL + name.split(' ').join('_').split("'").join('_').split(':').join('').toLowerCase() + '.png'} 
                    alt={name} 
                    className='character-info-card__icon'
                />
                <p className={'character-info-card__name ' + COLORS[theme]}>{name}</p>
                <p className='character-info-card__type'>{type}</p>
            </div>
   
            <div 
                className='character-info-card__description'
                dangerouslySetInnerHTML={{__html: description}}
            ></div>
        </div> 
    )
}

export default CharacterInfoCard                         