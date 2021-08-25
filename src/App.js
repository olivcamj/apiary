import './App.css';
import Header from './components/Header';

import Useful from './components/Useful/Useful';
import Bubble from '../src/components/bubble/bubble';
import Requests from '../src/components/requests/requests';
import Projects from '../src/components/projects/projects';
import About from './components/About';

function App() {
  return (
    <div className="app">
      <Header />
      <Useful />
      <Requests />
      <Bubble />
      <About />
      <Projects />
    </div>
  );
}

export default App;
