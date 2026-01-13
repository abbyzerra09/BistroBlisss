import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/scrollToTop';
import Header from './components/header';
import Hero from './components/heroSection';
import ComponentsMenu from './components/ComponentsMenu';
import AboutCard from './components/aboutCard';
import Services from './components/services';
import ChefContents from './components/chefContents';
import Customers from './components/customer';
import Footer from './components/footer';

//pages
import About from './pages/about';
import PageMenu from './pages/Pagemenu'

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ComponentsMenu />
            <AboutCard/>
            <Services />
            <ChefContents/>
            <Customers />
          </>
        } />

        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<PageMenu />} />
        <Route path="/delivery" element={<ChefContents/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;