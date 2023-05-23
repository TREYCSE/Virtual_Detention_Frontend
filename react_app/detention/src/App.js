import * as React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Tryme, Nav, Home, BertModel} from './components/index.js'

function App() {
  return (
    <div className="App">
      <Nav Home="/" Tryme="/tryme" BertModel="/bert"/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tryme" element={<Tryme />}/>
        <Route path="/bert" element={<BertModel />}/> 
      </Routes>
    </div>
  );
}
export default App;
