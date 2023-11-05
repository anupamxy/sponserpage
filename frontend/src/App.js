import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sponser from './components/Sponser.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Sponser />} exact />
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;