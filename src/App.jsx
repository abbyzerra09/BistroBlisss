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
// import Contacts from './components/contacts';

import About from './pages/about'; // Import the About page
import PageMenu from './pages/Pagemenu'

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Header and Footer stay OUTSIDE Routes so they show on every page */}
      <Header />

      <Routes>
        {/* HOMEPAGE: Only show these when the URL is "/" */}
        <Route path="/" element={
          <>
            <Hero />
            <ComponentsMenu />
            <AboutCard/>
            <Services />
            <ChefContents/>
            <Customers />
            {/* <Contacts /> */}
          </>
        } />

        {/* ABOUT PAGE: Only show this when the URL is "/about" */}
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<PageMenu />} />
        <Route path="/delivery" element={<ChefContents/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;