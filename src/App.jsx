import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Beranda from './pages/Beranda'
import Tentang from './pages/Tentang'
import Layanan from './pages/Layanan'
import Artikel from './pages/Artikel'
import Games from './pages/Games'
import Footer from './components/Footer'

// Game Pages
import PilahSampah from './pages/games/PilahSampah'
import TebakSampah from './pages/games/TebakSampah'
// import DaurUlang from './pages/games/DaurUlang'

// Layanan Sub-pages
import Edukasi from './pages/layanan/Edukasi'
import BankSampah from './pages/layanan/BankSampah'
import ReportForm from './pages/layanan/ReportForm'
import Daerah from './pages/layanan/Daerah'

const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Pages */}
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/artikel" element={<Artikel />} />
        
        
        {/* Games Hub Page */}
        <Route path="/games" element={<Games />} />
        
        {/* Layanan Sub-pages */}
        <Route path="/layanan/edukasi" element={<Edukasi />} />
        <Route path="/layanan/bank-sampah" element={<BankSampah />} />
        <Route path="/layanan/form-pengajuan" element={<ReportForm />} />
        <Route path="/layanan/daerah" element={<Daerah />} />
        
        {/* Individual Game Pages */}
        <Route path="/games/pilah-sampah" element={<PilahSampah />} />
        <Route path="/games/tebak-sampah" element={<TebakSampah />} />
        {/* <Route path="/games/daur-ulang" element={<DaurUlang />} /> */}
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        </div>

        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App