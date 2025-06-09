
import './App.css';
import AOS from 'aos';
import Sidenav from './components/Sidenav';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
   <>
   <Sidenav/>
   <main className='main'>
   <Hero/>
   <div className='main-content'>
   <About/>
   <Resume/>
   <Skill/>
   <Project/>
   <Contact/>
   </div>
  
   <Footer/>
    </main>
   </>
  );
}

export default App;
