import './App.css';
import Header from './components/Header';

import Usefull from '../src/components/usefull/usefull';
import Bubble from '../src/components/bubble/bubble';
import Requests from '../src/components/requests/requests';
import Projects from '../src/components/projects/projects';
import Footer from '../src/components/footer/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Usefull></Usefull>
      <Requests></Requests>
      <Bubble></Bubble>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
