import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Developer from './components/developer/Developer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Menu />
      <Developer />
    </>
  );
};

export default App;
