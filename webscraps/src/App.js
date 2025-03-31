
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginandSignup from './Components/LoginandSignup/LoginandSignup';
import WelcomePage from './Components/LoginandSignup/WelcomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginandSignup />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
