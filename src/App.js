import './App.css';
import MacTop from "./components/MacTop"
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//<MacTop/>

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
