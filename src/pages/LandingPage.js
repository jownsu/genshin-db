import React from 'react'
import Particles from '../components/Particles'
import NewCharacter from '../components/NewCharacter'
import Feature from '../components/Feature'
import { Link } from 'react-router-dom'
import { IMAGES_URL } from '../configs/constants'
import Highlights from '../components/Highlights'

function LandingPage() {

    return (
        <div className="landing-page">
            <Particles></Particles>
            <div className="landing-page__hero">
                <div className="container">
                    <div className="landing-page__info">
                        <h1 className="landing-page__title">An Open World Action RPG Game</h1>
                        <p className="landing-page__text">In the world of Teyvat - where all kinds of elemental powers constantly surge - epic adventures await, fearless travelers!</p>
                        <div className="landing-page__download">
                            <img src={require('../assets/images/google_play.png')} alt="google-play" />
                            <img src={require('../assets/images/app_store.png')} alt="apple-store" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="landing-page__main">
                <div className="container">
                    <p className="main-title">Highlights</p>
                    <Highlights />

                    <p className="main-title mb-2">New Characters</p>
                    <NewCharacter />
                    <Link to="/characters" className='btn-main mb-2'>See All Characters</Link>

                    <p className="main-title mb-2">Game Features</p>
                    <div className="landing-page__features">
                        <Feature 
                            title="An Epic Fantasy Adventure"
                            content="Experience an immersive single-player campaign. As a traveler from another world, you will embark on a journey to reunite with your long-lost sibling and unravel the mysteries of Teyvat, and yourself."
                            image={IMAGES_URL + 'an-epic-fantasy-adventure.png'}
                        />
                        <Feature 
                            title="Your World to Discover"
                            content="Fly across the open world, swim through crystal-clear waters, and climb towering mountains. Stray off the beaten path to discover all the hidden secrets of a world full of wonder and mystery."
                            image={IMAGES_URL + 'your-world-to-discover.png'}
                        />
                        <Feature 
                            title="Travel Alone or Battle Together"
                            content="Charge head-on into battles solo, or invite friends to join the fight against dangerous monsters with 4-player cross-play for PS4, iOS, Android, and PC."
                            image={IMAGES_URL + 'travel-alone-or-battle-together.png'}
                        />
                        <Feature 
                            title="Master the Seven Elements"
                            content="Not just another mindless hack and slash. Manipulating the various elements is the key to defeating powerful enemies and solving challenging puzzles."
                            image={IMAGES_URL + 'master-the-seven-elements.png'}
                        />
                        <Feature 
                            title="Build Your Dream Team"
                            content="Choose who fights by your side. Build your party from over 20+ characters (with more to come) — each with unique abilities, personalities, and combat styles."
                            image={IMAGES_URL + 'build-your-dream-team.png'}
                        />
                    </div>
     
                </div>
            </div>
        </div>
    )
}

export default LandingPage