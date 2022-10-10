import React from 'react'
import CharacterInfoCard from './CharacterInfoCard';

function CharacterInfoList(props) {

    const {
        id,
        title = "",
        data = [],
        theme = "",
        primary = "",
        secondary = "",
        customSecondary = false
    } = props;

    return (
        <div className='character-info-list' id={id}>  
            <p className='heading-4'>{title}</p>
            <div className="character-info-list__container">
                {data.map((item, index) => {
                    return <CharacterInfoCard 
                                key={index}
                                name={item[primary]}
                                type={ 
                                        customSecondary 
                                            ? customSecondary(index) 
                                            : item[secondary] ?? 'Unlock Automatically'
                                    }
                                description={item.description}
                                theme={theme}
                            />;
                })}
            </div>
        </div>    
    )
}

export default CharacterInfoList