import './App.css';
import { Route, Routes } from "react-router-dom";
import FChome from './pages/FChome';
import FCabout from './pages/FCabout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FChome />} />
      <Route path="/About" element={<FCabout />} />
    </Routes>

  );
}

export default App;
