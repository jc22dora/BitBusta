import './App.css';
import LandingPage from '../Scenes/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayPage from '../Scenes/PlayPage/PlayPage';
import React from 'react';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
          </Route>
          <Route path="/Play" element={<PlayPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;