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
  FaMapMarkedAlt,
  FaBookOpen,
  FaInfoCircle,
  FaHandHoldingHeart
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null)
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

  useEffect(() => {
    setIsOpen(false)
    setDropdownOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  const navItems = [
    { path: '/', label: 'Beranda', icon: FaHome },
    { path: '/tentang', label: 'Tentang', icon: FaInfoCircle },
    { 
      path: '/layanan', 
      label: 'Layanan', 
      icon: FaHandsHelping,
      hasDropdown: true,
      dropdownItems: [
        { path: '/layanan/edukasi', label: 'Edukasi', icon: FaBookOpen },
        { path: '/layanan/bank-sampah', label: 'Bank Sampah', icon: FaRecycle },
        { path: '/layanan/pengaduan', label: 'Form Pengaduan', icon: FaHandHoldingHeart },
        { path: '/layanan/wilayah', label: 'Wilayah', icon: FaMapMarkedAlt },
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
        className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-3 md:px-4 pt-2 sm:pt-3"
      >
        <div className={`
          rounded-2xl sm:rounded-full backdrop-blur-md border transition-all duration-300
          ${scrolled 
            ? 'bg-white/80 border-green-200 shadow-lg' 
            : 'bg-white/60 border-green-100/50 shadow-md'
          }
        `}>
          <div className="px-2 sm:px-3 md:px-4 lg:px-5">
            <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">

              {/* Logo */}
              <Link to="/" onClick={scrollTop} className="flex items-center gap-1 sm:gap-2 group flex-shrink-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-green-600 text-lg sm:text-xl md:text-2xl"
                >
                  <FaRecycle />
                </motion.div>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-green-700 drop-shadow-sm">
                  PilahPintar
                </span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3">
                {navItems.map((item, idx) => {
                  const Icon = item.icon
                  const isActive = isActivePath(item.path)

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
                            ${isActive
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-400 shadow-md' 
                              : 'text-gray-700 border-transparent hover:bg-white/70 hover:border-green-300 hover:shadow-sm'
                            }
                          `}
                        >
                          <Icon className={`text-xs lg:text-sm ${isActive ? 'text-white' : 'text-green-600'}`} />
                          <span className="hidden xl:inline">{item.label}</span>
                          <span className="xl:hidden">{item.label.charAt(0)}</span>
                        </button>
                      </Link>
                    )
                  }

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
                            : 'text-gray-700 border-transparent hover:bg-white/70 hover:border-green-300 hover:shadow-sm'
                          }
                        `}
                      >
                        <Icon className={`text-xs lg:text-sm ${isActive ? 'text-white' : 'text-green-600'}`} />
                        <span className="hidden xl:inline">{item.label}</span>
                        <span className="xl:hidden">{item.label.charAt(0)}</span>
                        <FaChevronDown className={`text-[8px] lg:text-[10px] transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-44 lg:w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-green-100 overflow-hidden z-50"
                          >
                            {item.dropdownItems.map((dropdownItem, index) => (
                              <Link
                                key={index}
                                to={dropdownItem.path}
                                onClick={() => { setDropdownOpen(false); scrollTop() }}
                                className="flex items-center gap-2 px-3 lg:px-4 py-2.5 text-xs lg:text-sm text-gray-700 hover:bg-green-50 transition-colors"
                              >
                                {dropdownItem.icon && <dropdownItem.icon className="text-green-600 text-xs lg:text-sm" />}
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
                className="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all active:scale-95"
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
                  <div className="pt-2 pb-3 space-y-1 max-h-[70vh] overflow-y-auto">
                    {navItems.map((item, idx) => {
                      const Icon = item.icon
                      const isActive = isActivePath(item.path)

                     if (item.hasDropdown) {
  const isLocalOpen = mobileDropdownOpen === idx
                        return (
                          <div key={`mob-${idx}`}>
                            <button
                             onClick={() =>
  setMobileDropdownOpen(isLocalOpen ? null : idx)
}
                              className={`
                                w-full px-3 py-2.5 rounded-xl flex items-center justify-between
                                text-sm font-medium transition-all
                                ${isActive ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-white/50'}
                              `}
                            >
                              <span className="flex items-center gap-2">
                                <Icon className="text-green-600 text-sm" />
                                <span>{item.label}</span>
                              </span>
                              <FaChevronDown className={`text-xs transition-transform ${isLocalOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            <AnimatePresence>
                              {isLocalOpen && (
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
                                      className="block px-3 py-2 text-xs text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                    >
                                      <span className="flex items-center gap-2">
                                        {dropdownItem.icon && <dropdownItem.icon className="text-green-500 text-xs" />}
                                        {dropdownItem.label}
                                      </span>
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
                            w-full px-3 py-2.5 rounded-xl flex items-center gap-2
                            text-sm font-medium transition-all
                            ${isActive 
                              ? 'bg-green-50 text-green-700' 
                              : 'text-gray-700 hover:bg-white/50'
                            }
                          `}
                        >
                          <Icon className={`text-sm ${isActive ? 'text-green-600' : 'text-green-600'}`} />
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

      {/* Spacer */}
      {!isFullHeroPage && (
        <div className="h-14 sm:h-16 md:h-20"></div>
      )}
    </>
  )
}

export default Navbar