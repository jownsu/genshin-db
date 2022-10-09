import React from 'react'

function CharacterShowcase(props) {
    const {name, link, description, id} = props;

    return (
        <div className='character_showcase' id={id}>
            <p className="heading-4">{name} Showcase</p>

            <div className="character_showcase__main">
                <p dangerouslySetInnerHTML={{__html: description}}></p>
                <iframe src={link}></iframe>
            </div>
            
        </div>
    )
}

export default CharacterShowcase