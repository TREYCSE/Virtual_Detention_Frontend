import * as React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Tryme, Nav, Home, BertModel, Learn, Api1, Api2} from './components/index.js'

function App() {
  return (
    <div className="App">
      <Nav Home="/" Tryme="/tryme" BertModel="/bert" Learn="/learn" Api1="/learn_1" Api2="/learn_2"/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tryme" element={<Tryme />}/>
        <Route path="/bert" element={<BertModel />}/> 
        <Route path="/learn" element={<Learn />}/>
        <Route path="/learn_1" element={<Api1 />}/> 
        <Route path="/learn_2" element={<Api2 />}/> 
      </Routes>
    </div>
  );
}
export default App;
