import './App.css';

import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Useful from './components/Useful';
import About from './components/About';
import Requests from './components/Requests';
import Projects from './components/projects/projects';
import WhyChoose from './components/WhyChoose';
import Footer from './components/footer/footer';
import Timeline from './components/Timeline';

import WebDevPage from './components/webDevPage/webDevPage';
import DataAnalysisPage from './components/dataAnalysisPage/dataAnalysisPage';
import DataSciencePage from './components/dataSciencePage/dataSciencePage';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Header />
          <Useful />
          <Requests />
          <About />
          <Timeline />
          <WhyChoose />
          <Projects />
        </Route>

        <Route path="/webdev" component={WebDevPage} exact />
        <Route path="/dataanalysis" component={DataAnalysisPage} exact />
        <Route path="/datascience" component={DataSciencePage} exact />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
