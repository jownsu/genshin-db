import React from 'react';
import './sass/main.scss'
import Navigation from './components/Navigation';
import CharacterIcon from './components/CharacterIcon';
import CharacterList from './components/characters/CharacterList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Navigation />
        <CharacterList />
        <Footer />
        {/* <CharacterIcon 
            name='Albedo' 
            vision='Pyro' 
            weapon='Sword' 
        />
        <CharacterIcon 
            name='Eula' 
            vision='Cryo' 
            weapon='Claymore' 
        /> */}

    </div>
  );
}

export default App;
