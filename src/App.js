import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Footer from './components/Footer';
import Smart from './components/Smart';
import OurApp from './components/OurApp';
import Ultimate from './components/Ultimate';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import Download from './components/Download';
import Deals from './components/Deals';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Home />
        <Features />
        <Smart />
        <OurApp />
        <Ultimate />
        <Deals />
        <Clients />
        <FAQ />
        <Download />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
