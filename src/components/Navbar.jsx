import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaRecycle, 
  FaHome, 
  FaLeaf, 
  FaHandsHelping, 
  FaNewspaper,
  FaGamepad, 
  FaChevronDown,
  FaMapMarkedAlt
} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

const FULL_HERO_PATHS = ['/tentang']

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const location = useLocation()

  const isFullHeroPage = FULL_HERO_PATHS.includes(location.pathname)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated')
    setIsLoggedIn(authStatus === 'true')
  }, [location])

  // Setiap ganti route: tutup menu & scroll ke atas
  useEffect(() => {
    setIsOpen(false)
    setDropdownOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

 const navItems = [
  { path: '/', label: 'Beranda', icon: FaHome },
  { path: '/tentang', label: 'Tentang', icon: FaLeaf },
  { 
    path: '/layanan', 
    label: 'Layanan', 
    icon: FaHandsHelping,
    hasDropdown: true,
    dropdownItems: [
      { path: '/layanan', label: 'Layanan', icon: FaHandsHelping },  // ← tambah ini paling atas
      { path: '/layanan/edukasi', label: 'Edukasi' },
      { path: '/layanan/bank-sampah', label: 'Bank Sampah' },
      { path: '/layanan/form-pengajuan', label: 'Form Pengajuan' },
      { path: '/layanan/daerah', label: 'Daerah' },
      { path: '/games', label: 'Games', icon: FaGamepad },
    ]
  },
  { path: '/artikel', label: 'Artikel', icon: FaNewspaper },
]

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    setIsLoggedIn(false)
    window.location.href = '/'
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-8 pt-2 sm:pt-3"
      >
        <div className={`
          rounded-full backdrop-blur-md border transition-all duration-300
          ${scrolled 
            ? 'bg-white/70 border-green-200 shadow-lg'
            : 'bg-white/50 border-green-100/50 shadow-md'
          }
        `}>
          <div className="px-3 sm:px-4 md:px-6">
            <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">

              {/* Logo */}
              <Link to="/" onClick={scrollTop} className="flex items-center gap-1 sm:gap-2 group">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-green-600 text-xl sm:text-2xl md:text-3xl"
                >
                  <FaRecycle />
                </motion.div>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-green-700 drop-shadow-sm">
                  PilahPintar
                </span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1 lg:gap-2">
                {navItems.map((item, idx) => {
                  const Icon = item.icon
                  const isActive = isActivePath(item.path)
                  const isStandaloneActive = item.standalone && location.pathname === item.path

                  // Tombol standalone (tidak ada dropdown)
                  if (!item.hasDropdown) {
                    return (
                      <Link
                        key={`nav-${idx}`}
                        to={item.path}
                        onClick={scrollTop}
                      >
                        <button
                          className={`
                            px-3 lg:px-4 py-1.5 lg:py-2 rounded-full 
                            flex items-center gap-1 lg:gap-2 
                            text-xs lg:text-sm font-medium
                            transition-all duration-300 border
                            ${isStandaloneActive || (!item.standalone && isActive)
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-400 shadow-md' 
                              : 'text-gray-700 border-transparent hover:bg-white/60 hover:border-green-300 hover:shadow-sm'
                            }
                          `}
                        >
                          <Icon className={`text-xs lg:text-sm ${
                            isStandaloneActive || (!item.standalone && isActive) ? 'text-white' : 'text-green-600'
                          }`} />
                          <span>{item.label}</span>
                        </button>
                      </Link>
                    )
                  }

                  // Tombol dengan dropdown
                  return (
                    <div key={`nav-${idx}`} className="relative">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`
                          px-3 lg:px-4 py-1.5 lg:py-2 rounded-full 
                          flex items-center gap-1 lg:gap-2 
                          text-xs lg:text-sm font-medium
                          transition-all duration-300 border
                          ${isActive 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-400 shadow-md' 
                            : 'text-gray-700 border-transparent hover:bg-white/60 hover:border-green-300 hover:shadow-sm'
                          }
                        `}
                      >
                        <Icon className={`text-xs lg:text-sm ${isActive ? 'text-white' : 'text-green-600'}`} />
                        <span>{item.label}</span>
                        <FaChevronDown className={`text-[10px] lg:text-xs transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-green-100 overflow-hidden"
                          >
                            {item.dropdownItems.map((dropdownItem, index) => (
                              <Link
                                key={index}
                                to={dropdownItem.path}
                                onClick={() => { setDropdownOpen(false); scrollTop() }}
                                className="flex items-center gap-2 px-4 py-2.5 text-xs text-gray-700 hover:bg-green-50/80 transition-colors"
                              >
                                {dropdownItem.icon && <dropdownItem.icon className="text-green-600 text-xs" />}
                                <span>{dropdownItem.label}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              >
                {isOpen ? <IoClose size={16} /> : <GiHamburgerMenu size={14} />}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="pt-2 pb-3 space-y-1">
                    {navItems.map((item, idx) => {
                      const Icon = item.icon
                      const isActive = isActivePath(item.path)

                      if (item.hasDropdown) {
                        return (
                          <div key={`mob-${idx}`}>
                            <button
                              onClick={() => setDropdownOpen(!dropdownOpen)}
                              className={`
                                w-full px-3 py-2 rounded-lg flex items-center justify-between
                                text-xs font-medium transition-all
                                ${isActive ? 'bg-green-50/80 text-green-700' : 'text-gray-700 hover:bg-white/40'}
                              `}
                            >
                              <span className="flex items-center gap-2">
                                <Icon className="text-green-600 text-xs" />
                                <span>{item.label}</span>
                              </span>
                              <FaChevronDown className={`text-[10px] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            <AnimatePresence>
                              {dropdownOpen && (
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: 'auto' }}
                                  exit={{ height: 0 }}
                                  className="pl-6 pr-2 space-y-1 mt-1 overflow-hidden"
                                >
                                  {item.dropdownItems.map((dropdownItem, index) => (
                                    <Link
                                      key={index}
                                      to={dropdownItem.path}
                                      onClick={() => { setIsOpen(false); scrollTop() }}
                                      className="block px-3 py-1.5 text-[11px] text-gray-600 hover:text-green-600 hover:bg-green-50/60 rounded-lg"
                                    >
                                      {dropdownItem.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      }

                      return (
                        <Link
                          key={`mob-${idx}`}
                          to={item.path}
                          onClick={() => { setIsOpen(false); scrollTop() }}
                          className={`
                            w-full px-3 py-2 rounded-lg flex items-center gap-2
                            text-xs font-medium transition-all
                            ${isActive 
                              ? 'bg-green-50/80 text-green-700' 
                              : 'text-gray-700 hover:bg-white/40'
                            }
                          `}
                        >
                          <Icon className="text-green-600 text-xs" />
                          <span>{item.label}</span>
                        </Link>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Spacer — tidak dirender di halaman full-hero */}
      {!isFullHeroPage && (
        <div className="h-14 sm:h-16 md:h-20"></div>
      )}
    </>
  )
}

export default Navbar