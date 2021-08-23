import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

import Usefull from '../src/components/usefull/usefull';
import Bubble from '../src/components/bubble/bubble';
import Requests from '../src/components/requests/requests';
import Projects from '../src/components/projects/projects';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Usefull></Usefull>
      <Requests></Requests>
      <Bubble></Bubble>
      <Projects></Projects>
    </div>
  );
}

export default App;
