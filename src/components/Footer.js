import React from 'react'
import GenshinLogo from '../assets/images/genshin-logo.svg'

function Footer() {
  return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__info">
                    <div className='logo'>
                        <img src={GenshinLogo} alt="genshin-logo" className="logo__image"/>
                        <div className="logo__title">
                            <a href='#'>GENSHIN.DB</a>
                        </div>
                    </div>
                    <p>
                        <span className='fw-bold'>GENSHIN.DB</span> is not affiliated with or endorsed by miHoYo. <span className='fw-bold'>GENSHIN.DB</span> is a Database and Tier List for the GENSHIN GGpact game for PC, Switch, Playstation 4, and mobile game app on iOS and Android.
                    </p>
                    <p>© GENSHIN.DB 2022</p>
                </div>

                <div className="footer__links">
                    <p className="fw-bold">More Links</p>
                    <a href="#">Contact</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Manage Cookie Settings</a>
                </div>

                <div className="footer__community">
                    <p className="fw-bold">Community Links</p>
                    <a href="#">Discord</a>
                    <a href="#">Reddit</a>
                    <a href="#">Facebook</a>
                </div>

            </div>
        </footer>
    )
}

export default Footer