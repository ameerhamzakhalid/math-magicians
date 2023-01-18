import React, { PureComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Nav from './components/NavBar';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
