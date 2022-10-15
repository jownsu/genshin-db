import React, {useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import GenshinLogo from '../assets/images/genshin-logo.svg'
function Navigation() {
    const location = useLocation();
    const [active, setActive] = useState(false)

    const toggleNav = () => {
        setActive(prevState => !prevState);
    }

    const offNav = () => {
        setActive(false);
    }

    return (
        <nav className={'nav ' + (location.pathname === '/' && 'transparent')}>
            <div className="container">
                <NavLink exact="true" to='/'end className='logo'>
                    <img src={GenshinLogo} alt="genshin-logo" className="logo__image"/>
                    <div className="logo__title">
                        Genshin.DB
                    </div>
                </NavLink>
                <div className={"nav__links " + (active && 'active')}>
                    <NavLink 
                        exact="true" 
                        to="/characters" 
                        end 
                        className="nav__link"
                        activeclassname="active"
                        onClick={offNav}
                    >
                        Characters
                    </NavLink>

                    <NavLink 
                        exact="true" 
                        to="/teams" 
                        className="nav__link" 
                        activeclassname="active"
                        onClick={offNav}
                    >
                        Teams
                    </NavLink>

                    <NavLink 
                        exact="true" 
                        to="/tiers" 
                        className="nav__link" 
                        activeclassname="active"
                        onClick={offNav}
                    >
                        Tier List
                    </NavLink>

                    <NavLink 
                        exact="true" 
                        to="/guides" 
                        className="nav__link" 
                        activeclassname="active"
                        onClick={offNav}
                    >
                        Farming Guide
                    </NavLink>
                </div>
                <div className="nav__ham" onClick={toggleNav}>
                    <div className={'nav__hambar ' + (active && 'active')}></div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation