import React from 'react';
import './App.css';

// Import all components
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import ConferenceTheme from './components/ConferenceTheme/ConferenceTheme';
import Objectives from './components/Objectives/Objectives';
import CallForPapers from './components/CallForPapers/CallForPapers';
import ImportantDates from './components/ImportantDates/ImportantDates';


function App() {
  return (
    <div className="conference-container">
      <Navigation />
      <HeroSection />
      <About />
      <ConferenceTheme />
      <Objectives />
      <CallForPapers />
      <ImportantDates />
      
    </div>
  );
}

export default App;