import * as React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Tryme, Nav, Home, BertModel} from './components'

function App() {
  return (
    <div className="App">
      <Nav Home="/" Tryme="/tryme" BertModel="/response"/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tryme" element={<Tryme />}/>
        <Route path="/responses" element={<BertModel />}/>
      </Routes>
    </div>
  );
}

export default App;
