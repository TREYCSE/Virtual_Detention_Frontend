import * as React from 'react';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Home, Layout } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to Virtual Detention </h1>
        <h4> TAKE A SEAT </h4>
      </header>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route path="/home" element={<Home />}/>
    </Route>
  </Routes>
  <Outlet />
    </div>
  );
}

export default App;
