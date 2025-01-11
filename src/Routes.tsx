import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Equipment from './pages/Equipment';
import Contact from './pages/Contact';

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/about" element={<About />} />
    <Route path="/equipment" element={<Equipment />} />
    <Route path="/contact" element={<Contact />} />
  </RouterRoutes>
);

export default Routes;
