import React, { FunctionComponent, useEffect, useRef } from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/app.css';
import Skills from './skills';


const App: FunctionComponent = () => {
  const appWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({top: 0});
  });

  return (
    <div ref={appWrapperRef} id="app-wrapper">
      <Header />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
