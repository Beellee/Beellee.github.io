import './App.css';

import Navbar from "./components/Navbar";

import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/Skills' element={<Skills/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;
