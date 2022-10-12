import React from 'react'
import Particles from '../components/Particles'
import NewCharacter from '../components/NewCharacter'

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


            <div className="landing-page__new">
                <div className="container">
                    <NewCharacter />
                </div>
            </div>
        </div>
    )
}

export default LandingPage