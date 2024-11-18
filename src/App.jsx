import './App.css';
import Portfolio from './components/Portfolio.jsx';

function App() {
  // useEffect(() => {
  //   const bubbleContainer = document.querySelector('.animated-bg');

  //   for (let i = 0; i < 50; i++) {
  //     const bubble = document.createElement('div');
  //     bubble.classList.add('bubble');

  //     // Randomize bubble size
  //     const sizeClass = Math.random() > 0.5 ? 'bubble-large' : 'bubble-small';
  //     bubble.classList.add(sizeClass);

  //     // Randomize bubble horizontal and vertical starting positions
  //     bubble.style.left = `${Math.random() * 100}%`;
  //     bubble.style.setProperty('--random-start-y', Math.random());

  //     // Randomize animation delay
  //     bubble.style.animationDelay = `${Math.random() * 5}s`;

  //     bubbleContainer.appendChild(bubble);
  //   }
  // }, []);

  // const handleViewCV = () => {
  //   // Open the CV PDF in a new tab
  //   window.open('https://drive.google.com/file/d/15249VthvSXgO65xtALJDHUL7uTE_zVzT/view?usp=sharing', '_blank');
  // };

  
  return (
    <>
    <Portfolio />
    </>
  );
}

export default App;
