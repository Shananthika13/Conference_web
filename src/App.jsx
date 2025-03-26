import React from 'react';
import './App.css';

// Import all components
import Navigation from './Components/Navigation/Navigation';
import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/About/About';
import ConferenceTheme from './Components/ConferenceTheme/ConferenceTheme';
import Objectives from './Components/Objectives/Objectives';
import CallForPapers from './Components/CallForPapers/CallForPapers';
import ImportantDates from './Components/ImportantDates/ImportantDates';


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