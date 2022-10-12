import React from 'react'
import Particles from '../components/Particles'

function LandingPage() {
  return (
        <div className="landing-page">
            <Particles></Particles>
            <div className="container">
                <div className="landing-page__info">
                    <h1 className="landing-page__title">An Open-world Action RPG Game</h1>
                    <p className="landing-page__text">In the world of Teyvat - where all kinds of elemental powers constantly surge - epic adventures await, fearless travelers!</p>
                    <div className="landing-page__download">
                        <img src={require('../assets/google_play.png')} alt="google-play" />
                        <img src={require('../assets/app_store.png')} alt="apple-store" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage