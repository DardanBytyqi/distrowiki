import './App.css';
import Home from './Components/Home'
import Cards from './Components/Cards'
import DistroPage from './Components/DistroPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Distro" element={<Cards />} />
        <Route path="/Distro/:distroId" element={<DistroPage />} />
      </Routes>
    </Router>
  );
}












export default App;
