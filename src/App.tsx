import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import MainPage from './pages/main/MainPage';
import PricePage from './pages/prices/PricesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Menu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<MainPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/eva" element={<MainPage />} />
          <Route path="/partner" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
