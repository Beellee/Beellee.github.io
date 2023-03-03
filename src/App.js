import './App.css';

import Navbar from "./components/Navbar";

import AboutContact from './pages/AboutContact';
import UniProjects from './pages/UniProjects';
import Skills from './pages/Skills';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/AboutContact" element={<AboutContact />} />
          <Route path='/UniProjects' element={<UniProjects/>} />
          <Route path='/Skills' element={<Skills/>} />
        </Routes>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;
