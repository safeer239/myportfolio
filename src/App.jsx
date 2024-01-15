import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import {useState} from 'react'

function App() {
  const [lightmode,setLightmode]=useState(true)
  return (
    <div className={lightmode?'bg-dark':'bg-light'}>
      <Header lightmode={lightmode} setLightmode={setLightmode}/>
      <Main lightmode={lightmode} setLightmode={setLightmode}/>
      <About lightmode={lightmode} setLightmode={setLightmode}/>
      <Skills lightmode={lightmode} setLightmode={setLightmode}/>
      <Projects lightmode={lightmode} setLightmode={setLightmode}/>
      <Contact lightmode={lightmode} setLightmode={setLightmode}/>
      <Footer lightmode={lightmode} setLightmode={setLightmode}/>
    </div>
  );
}

export default App;
