import * as React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Tryme, Nav, Home} from './components'

function App() {
  return (
    <div className="App">
      <Nav Home="/" Tryme="/tryme" />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tryme" element={<Tryme />}/>
      </Routes>
    </div>
  );
}

export default App;
