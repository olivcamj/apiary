import './App.css';
import Header from './components/Header';

import Useful from './components/Useful/Useful';
import Bubble from './components/bubble/bubble';
import Requests from './components/requests/requests';
import Projects from './components/projects/projects';
import About from './components/About';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Useful />
      <Requests />
      <Bubble />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
