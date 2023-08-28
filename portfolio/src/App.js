import React, { createContext, useState } from 'react'; 
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';

export const ThemeContext = createContext(null);


const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div id='dark'>
    <Header />
    <main class="main">
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Work />
      <Contact />
    </main>
    
    <Footer />
    <ScrollUp />
    </div>
    </ThemeContext.Provider>
  )
}

export default App