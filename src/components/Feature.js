import React from 'react';

function Feature(props) {
    const {title, content, image} = props
    return (
        <div className="feature reveal">
            <div className='feature__card'>
                <img src={require('../assets/images/corner.png')} alt="corner" className="feature__corner-top-left" />
                <img src={require('../assets/images/corner.png')} alt="corner" className="feature__corner-top-right" />
                <img src={require('../assets/images/corner.png')} alt="corner" className="feature__corner-bottom-left" />
                <img src={require('../assets/images/corner.png')} alt="corner" className="feature__corner-bottom-right" />
                <p className="feature__title">{title}</p>
                <p className="feature__content">{content}</p>
            </div>
            <img src={image} alt={title} className="feature__img" />
        </div>
    )
}

export default Feature