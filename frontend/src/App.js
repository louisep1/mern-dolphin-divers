import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DolphinPage from './pages/DolphinPage';
import ScubaPage from './pages/ScubaPage'
import PricePage from './pages/PricePage';
import ContactPage from './pages/ContactPage'
import Success from './pages/Success'
import Admin from './pages/Admin'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className='mx-4 my-4 md:my-8 py-4 px-8 border-4 border-indigo-500/50 rounded-lg'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dolphin' element={<DolphinPage />} />
        <Route path='/scuba' element={<ScubaPage />} />
        <Route path='/price' element={<PricePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/:id' element={<Success />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      </div>
      <Footer />
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
