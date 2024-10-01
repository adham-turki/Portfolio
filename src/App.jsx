import './App.css';
import Header from './components/Header';
import adham from './assets/adham.jpg';
import Portfolio from './components/Portfolio.jsx';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const bubbleContainer = document.querySelector('.animated-bg');

    for (let i = 0; i < 50; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');

      // Randomize bubble size
      const sizeClass = Math.random() > 0.5 ? 'bubble-large' : 'bubble-small';
      bubble.classList.add(sizeClass);

      // Randomize bubble horizontal and vertical starting positions
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.setProperty('--random-start-y', Math.random());

      // Randomize animation delay
      bubble.style.animationDelay = `${Math.random() * 5}s`;

      bubbleContainer.appendChild(bubble);
    }
  }, []);

  const handleViewCV = () => {
    // Open the CV PDF in a new tab
    window.open('https://drive.google.com/file/d/15249VthvSXgO65xtALJDHUL7uTE_zVzT/view?usp=sharing', '_blank');
  };

  
  return (
    <>
      <div className="animated-bg"></div>
      <div className="relative flex size-full min-h-screen flex-col layout-container overflow-x-hidden">
        <Header />
        <section id="about"></section>
        <div className="px-6 md:px-12 lg:px-0 flex flex-1 justify-center mt-16 mb-20">
          <div className="layout-content-container flex flex-col flex-1">
            <div
              className="relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${adham})`,
                height: '93vh',
              }}
            >
              <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-center text-white p-6 md:p-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                  Hi, I'm Adham
                </h1>
                <h2 className="text-sm md:text-base font-normal mb-6">
                  I help companies build seamless, user-friendly interfaces that enhance digital
                  experiences. I'm passionate about crafting intuitive, responsive web applications
                  that solve real-world problems and delight users.
                </h2>
                <div className="flex-wrap gap-3 flex justify-center">
                  <button className="button-primary" onClick={handleViewCV}>
                    View CV
                  </button>
                  <button className="button-secondary" onClick={() => document.getElementById('contactme').scrollIntoView({ behavior: 'smooth' })}>
  Hire Me
</button>
                </div>
              </div>
            </div>

            <Portfolio />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
