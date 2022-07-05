import logo from './logo.svg';
import './App.css';
import LandingPage from './Scenes/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayPage from './Scenes/PlayPage';
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
