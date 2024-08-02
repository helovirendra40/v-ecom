
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Cart from './components/cart';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  

  return (
    <>
      <Navbar />
        <Routes>        
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />          
        </Routes>

      
    </>
  )
}

export default App
