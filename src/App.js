import React from 'react';
import { useLocation } from "react-router-dom";

import "./App.css";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Useful from "./components/Useful";
import About from "./components/About";
import Requests from "./components/Requests";
import Projects from "./components/Projects/projects";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";

import WebDevPage from "./components/webDevPage/webDevPage";
import DataAnalysisPage from "./components/dataAnalysisPage/dataAnalysisPage";
import DataSciencePage from "./components/dataSciencePage/dataSciencePage";

function App() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact>
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
