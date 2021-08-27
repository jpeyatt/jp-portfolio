import React, { FunctionComponent, useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/app.css';
import Skills from './skills';
import Nav from './nav';
import Resume from './resume';
import Projects from './projects';
import PreLoader from './preloader';


const App: FunctionComponent = () => {
  const [showPreloader, setShowPreloader] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 3500);
  }, []);

  return (
      showPreloader ? <PreLoader /> :
      <div id="app-wrapper">
        <Nav />
        <Header />
        <Skills />
        <Resume />
        <Projects />
        <Footer />
      </div>
  );
}

export default App;
