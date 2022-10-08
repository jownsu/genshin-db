import React, {useState} from 'react'
import GenshinLogo from '../assets/genshin-logo.svg'
function Navigation() {
    const [active, setActive] = useState(false)

    const toggleNav = () => {
        setActive(prevState => !prevState);
    }

    return (
        <nav className='nav'>
            <div className="container">
                <div className='logo'>
                    <img src={GenshinLogo} alt="genshin-logo" className="logo__image"/>
                    <div className="logo__title">
                        <a href='#'>Geshin.GG</a>
                    </div>
                </div>
                <div className={"nav__links " + (active && 'active')}>
                    <a href="#" className="nav__link">Characters</a>
                    <a href="#" className="nav__link">Teams</a>
                    <a href="#" className="nav__link">Tier List</a>
                    <a href="#" className="nav__link">Farming Guide</a>
                </div>
                <div className="nav__ham" onClick={toggleNav}>
                    <div className={'nav__hambar ' + (active && 'active')}></div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation