import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './sass/main.scss'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Tiers from './pages/Tiers';
import Guides from './pages/Guides';
import Teams from './pages/Teams';
import LandingPage from './pages/LandingPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
        <Router>
            <ScrollToTop>
                <Navigation />
                <Routes>
                    <Route exact path='/' element={<LandingPage />}></Route>
                    <Route exact path='/characters/' element={<Characters />}></Route>
                    <Route exact path='/characters/:name' element={<Character />}></Route>
                    <Route exact path='/teams' element={<Teams />}></Route>
                    <Route exact path='/tiers' element={<Tiers />}></Route>
                    <Route exact path='/guides' element={<Guides />}></Route>
                </Routes>
                <Footer />
            </ScrollToTop>
        </Router>
  );
}

export default App;
