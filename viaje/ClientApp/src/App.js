import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Solicitudes from './pages/Solicitudes'
import NSolicitudes from './pages/NSolicitudes'
import Aprobar from './pages/Aprobar';
import NGastos from './pages/NGastos';
import Gastos from './pages/Gastos';


function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>

          <Route path='/solicitudes' element={<Solicitudes />} />
          <Route path='/nsolicitudes' element={<NSolicitudes />} />
          <Route path='/aprobar' element={<Aprobar />} />
          <Route path='/ngastos' element={<NGastos />} />
          <Route path='/gastos' element={<Gastos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
