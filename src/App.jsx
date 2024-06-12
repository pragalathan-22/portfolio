import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContectMe from './components/ContectMe/ContectMe';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills/>
        <WorkExperience/>
        <ContectMe/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
