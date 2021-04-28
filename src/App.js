import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import MobileMenu from './components/MobileMenu';

function App() {
  return (
    <Router>
      <MobileMenu/>
      <Navbar />
    </Router>
  );
}

export default App;
