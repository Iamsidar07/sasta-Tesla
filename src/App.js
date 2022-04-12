import React from 'react';

import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
     <Header  logosrc="images/logo.png"/>
     <Home />
     <Footer />
    </div>
  );
}

export default App;
