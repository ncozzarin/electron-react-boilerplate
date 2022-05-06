import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import ExchangeRates from './components/Character/Characters';
import MiniDrawer from './components/TestComp';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MiniDrawer />} />
        <Route path="/about" element={<ExchangeRates />} />
      </Routes>
    </Router>
  );
}
