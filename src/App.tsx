import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Footer from './components/footer';
import MainPage from './pages/main/MainPage';
import PricePage from './pages/prices/PricesPage';
import AboutPage from './pages/about/AboutPage';
import EvaPage from './pages/eva/EvaPage';
import ContactPage from './pages/contact/ContactPage';
import PartnerPage from './pages/partner/PartnerPage';
import FaqPage from './pages/faq/FaqPage';
import OfferPage from './pages/documents/OfferPage';
import TermsPage from './pages/documents/TermsPage';
import PolicyPage from './pages/documents/PolicyPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Menu />
        <main className="flex-grow pt-[72px]">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/price" element={<PricePage />} />
            <Route path="/eva" element={<EvaPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/policy" element={<PolicyPage/>} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/offer" element={<OfferPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
