import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/services/Services';
import AIImplementation from './pages/services/AIImplementation';
import SoftwareTesting from './pages/services/SoftwareTesting';
import Careers from './pages/Careers';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ai-implementation" element={<AIImplementation />} />
            <Route path="/services/software-testing" element={<SoftwareTesting />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
