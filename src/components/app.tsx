import React, { FunctionComponent, useEffect, useRef } from 'react';
import Header from './header';
import Stack from './stack';
import Footer from './footer';
import '../styles/app.css';


const App: FunctionComponent = () => {
  const appWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({top: 0});
  });

  return (
    <div ref={appWrapperRef} id="app-wrapper">
      <Header />
      <Stack />
      <Footer />
    </div>
  );
}

export default App;
