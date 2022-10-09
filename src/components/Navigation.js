import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
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
                        <NavLink exact to='/'end>Geshin.GG</NavLink>
                    </div>
                </div>
                <div className={"nav__links " + (active && 'active')}>
                    <NavLink exact to="/" end   className="nav__link" activeClassName="active">Characters</NavLink>
                    <NavLink exact to="/teams"  className="nav__link" activeClassName="active">Teams</NavLink>
                    <NavLink exact to="/tiers"  className="nav__link" activeClassName="active">Tier List</NavLink>
                    <NavLink exact to="/guides" className="nav__link" activeClassName="active">Farming Guide</NavLink>
                </div>
                <div className="nav__ham" onClick={toggleNav}>
                    <div className={'nav__hambar ' + (active && 'active')}></div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation