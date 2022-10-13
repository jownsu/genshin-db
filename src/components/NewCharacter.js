import React, { useState } from 'react'
import { NEW_CHARACTER_URL } from '../configs/constants';
const CHAR = {
    'cyno' : {
        title       : 'cyno-title.webp',
        video       : 'cyno-video.webp',
        icon        : 'cyno-icon.webp',
        portrait    : 'cyno.webp',
        description : 'The General Mahamatra in charge of supervising the researchers of the Akademiya. It is said that when he gets down to work. The General Mahamara is even more efficient than the "Great Vayuvyastra" made by the Kshahrewar.',
        link        : 'https://youtu.be/2bNgDa4nApQ?list=TLGGO3l645APzGIxMjEwMjAyMg'
    },
    'nilou' : {
        title       : 'nilou-title.webp',
        video       : 'nilou-video.webp',
        icon        : 'nilou-icon.webp',
        portrait    : 'nilou.webp',
        description : 'The star of Zubayr Theater. She is full of warmth and innocence, nd her dances are lively and elegant',
        link        : 'https://youtu.be/rhvEIQj92w0?list=TLGGM7GZYyesgjMxMjEwMjAyMg'   
    },
    'candace' : {
        title       : 'candace-title.webp',
        video       : 'candace-video.webp',
        icon        : 'candace-icon.webp',
        portrait    : 'candace.webp',
        description : 'A descendant of King Deshret with an amber left eye. The defender of Aaru Village.',
        link        : 'https://youtu.be/-n5ZlOtLzKU?list=TLGGq3asrCD6cuAxMjEwMjAyMg'
    }
};

function NewCharacter() {
    const [currentChar, setCurrentChar] = useState('cyno');

    return (
            <div className="new__main reveal">
                <div className="new__info">
                    <img src={NEW_CHARACTER_URL + CHAR[currentChar].title} alt="cyno" />
                    <p>{CHAR[currentChar].description}</p>
                </div>
                
                <a href={CHAR[currentChar].link} target="_blank" rel="noreferrer" className='new__video' >
                    <img src={NEW_CHARACTER_URL + CHAR[currentChar].video} alt="cyno-video" />
                </a>
 

                <div className="new__icons">
                    <img 
                        onClick={() => setCurrentChar('cyno')}
                        src={NEW_CHARACTER_URL + CHAR['cyno'].icon} 
                        alt="cyno-icon" 
                        className={currentChar === 'cyno' ? 'active' : ''} />
                    <img 
                        onClick={() => setCurrentChar('nilou')}
                        src={NEW_CHARACTER_URL + CHAR['nilou'].icon} 
                        alt="nilou-icon" 
                        className={currentChar === 'nilou' ? 'active' : ''}    
                    />
                    <img 
                        onClick={() => setCurrentChar('candace')}
                        src={NEW_CHARACTER_URL + CHAR['candace'].icon} 
                        alt="candace-icon" 
                        className={currentChar === 'candace' ? 'active' : ''}
                    />
                </div>

                <img src={NEW_CHARACTER_URL + CHAR[currentChar].portrait} alt="" className="new__portrait" />
            </div>    
    )
}

export default NewCharacter