import React, { FunctionComponent } from 'react';
import Header from './header';
import Stack from './stack';
import Footer from './footer';
import '../styles/app.css';


const App: FunctionComponent = () => {

  return (
    <div id="app-wrapper">
      <Header />
      <Stack />
      <Footer />
    </div>
  );
}

export default App;
