import * as React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Tryme, Nav, Home, Response} from './components'

function App() {
  return (
    <div className="App">
      <Nav Home="/" Tryme="/tryme" Response="/responses"/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tryme" element={<Tryme />}/>
        <Route path="/responses" element={<Response />}/>
      </Routes>
    </div>
  );
}

export default App;
