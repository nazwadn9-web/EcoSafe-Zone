import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaRecycle, FaHome, FaLeaf, FaHandsHelping, FaNewspaper } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Beranda', icon: FaHome },
    { path: '/tentang', label: 'Tentang', icon: FaLeaf },
    { path: '/layanan', label: 'Layanan', icon: FaHandsHelping },
    { path: '/artikel', label: 'Artikel', icon: FaNewspaper },
  ]

  return (
    <>
      {/* Fixed Navbar Container - dengan jarak sedikit di atas */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 pt-3"
      >
        {/* Navbar Content dengan margin horizontal */}
        <div
          className={`
            mx-4 md:mx-8 lg:mx-16
            transition-all duration-500
          `}
        >
          <div
            className={`
              rounded-[80px] 
              backdrop-blur-[15px] 
              border-3 border-white/90 
              shadow-[0_20px_30px_-8px_rgba(40,100,60,0.3)]
              transition-all duration-500
              w-full
              ${scrolled 
                ? 'bg-white/70 py-1' 
                : 'bg-white/60 py-3'
              }
            `}
          >
            <div className="px-6 md:px-8">
              <div className="flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="text-[#3f9e64] text-3xl md:text-4xl"
                  >
                    <FaRecycle />
                  </motion.div>
                  <span className="text-2xl md:text-3xl font-extrabold text-[#1f6e43]">
                    PilahPintar
                  </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.path
                    
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                      >
                        <motion.div
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className={`
                            px-5 py-2.5 rounded-[60px] 
                            flex items-center gap-2 
                            font-bold text-base
                            transition-all duration-300
                            border-2 
                            ${isActive 
                              ? 'bg-white/95 text-[#166b3b] border-[#6fcf97] shadow-[0_4px_0_#9fccaf]' 
                              : 'text-[#1e4f33] border-transparent hover:bg-white/90 hover:border-[#a1dbb4]'
                            }
                          `}
                        >
                          <Icon className="text-lg" />
                          <span>{item.label}</span>
                        </motion.div>
                      </Link>
                    )
                  })}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden w-12 h-12 rounded-full bg-[#2d874a] text-white flex items-center justify-center shadow-lg hover:bg-[#236b3a] transition-colors"
                >
                  {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={20} />}
                </button>
              </div>

              {/* Mobile Menu */}
              <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2 space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.path
                    
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          whileTap={{ scale: 0.98 }}
                          className={`
                            px-4 py-3 rounded-xl flex items-center gap-3 
                            font-semibold transition-all
                            ${isActive 
                              ? 'bg-white/95 text-[#166b3b] border-2 border-[#6fcf97]' 
                              : 'bg-white/50 text-[#1e4f33] hover:bg-white/80'
                            }
                          `}
                        >
                          <Icon className="text-xl" />
                          <span>{item.label}</span>
                        </motion.div>
                      </Link>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Spacer kecil untuk konten - 1rem (16px) */}
      <div className="h-16"></div>
    </>
  )
}

export default Navbar