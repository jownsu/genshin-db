import React, { useState } from 'react'
import { IMAGES_URL } from '../configs/constants'

function Highlights() {
    const [active, setActive] = useState(2);

    const activeClass = (val) => {
        if(active === val){
            return 'active';
        }
        else if(active - 1 === val){
            return 'prev';
        }
        else if(active + 1 === val){
            return 'next';
        }
        else if(val === 5 && active === 1){
            return 'prev';
        }else if(val === 1 && active === 5){
            return 'next';
        } else {
            return ""
        }
    }

    const incrementActive = () => {
        if(active >= 5){
            setActive(1);
        }else{
            setActive(prevState => prevState + 1);
        }
    }
    const decrementActive = () => {
        if(active <= 1){
            setActive(5);
        }else{
            setActive(prevState => prevState - 1);

        }

    }

    return (
        <div className="highlights reveal">
            <img 
                onClick={decrementActive}
                className='highlights__left-icon' 
                src={require('../assets/images/left.webp')} 
                alt="left-icon" 
            />
            <img 
                className={"highlights__item " + activeClass(1)} 
                src={IMAGES_URL + 'highlight-1.webp'} 
                alt="hightlight-1" 
            />
            <img 
                className={"highlights__item " + activeClass(2)} 
                src={IMAGES_URL + 'highlight-2.webp'} 
                alt="highlight-2" 
            />
            <img 
                className={"highlights__item " + activeClass(3)} 
                src={IMAGES_URL + 'highlight-3.webp'} 
                alt="highlight-3" 
            />
            <img 
                className={"highlights__item " + activeClass(4) }
                src={IMAGES_URL + 'highlight-4.webp'} 
                alt="highlight-4" 
            />
            <img 
                className={"highlights__item "  + activeClass(5)}
                src={IMAGES_URL + 'highlight-5.webp'} 
                alt="highlight-5" 
            />
            <img 
                onClick={incrementActive}
                className='highlights__right-icon' 
                src={require('../assets/images/right.webp')} 
                alt="right-icon" 
            />
        </div>
    )
}

export default Highlights