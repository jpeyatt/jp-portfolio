import React, { FunctionComponent } from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/app.css';
import Skills from './skills';
import Nav from './nav';
import Resume from './resume';
import Projects from './projects';
import PreLoader from './preloader';


const App: FunctionComponent = () => {


  return (
    <div id="app-wrapper">
      <Nav />
      <Header />
      <Skills />
      <Resume />
      <Projects  />
      <Footer />
    </div>
  );
}

export default App;
