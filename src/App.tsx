import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import MainPage from './pages/main/MainPage';
import PricePage from './pages/prices/PricesPage';
import AboutPage from './pages/about/AboutPage';
import EvaPage from './pages/eva/EvaPage';
import ContactPage from './pages/contact/ContactPage';
import PartnerPage from './pages/partner/PartnerPage';
import FaqPage from './pages/faq/FaqPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Menu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/eva" element={<EvaPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
