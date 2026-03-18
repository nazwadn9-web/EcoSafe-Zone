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
  FaTrash, 
  FaPuzzlePiece, 
  FaBrain,
  FaUser,
  FaUserPlus,
  FaSignInAlt,
  FaUserCircle
} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check login status from localStorage
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated')
    setIsLoggedIn(authStatus === 'true')
  }, [location])

  // Close dropdown when route changes
  useEffect(() => {
    setDropdownOpen(false)
    setAuthDropdownOpen(false)
  }, [location])

  const navItems = [
    { path: '/', label: 'Beranda', icon: FaHome },
    { path: '/tentang', label: 'Tentang', icon: FaLeaf },
    { 
      path: '/layanan', 
      label: 'Layanan', 
      icon: FaHandsHelping,
      hasDropdown: true,
      dropdownItems: [
        { path: '/layanan/edukasi', label: 'Edukasi', icon: FaBrain },
        { path: '/layanan/bank-sampah', label: 'Bank Sampah', icon: FaRecycle },
        { path: '/layanan/komunitas', label: 'Komunitas', icon: FaLeaf },
        { path: '/layanan/pelatihan', label: 'Pelatihan', icon: FaPuzzlePiece },
        { 
          path: '/games', 
          label: 'Games', 
          icon: FaGamepad,
          subItems: [
            { path: '/games/pilah-sampah', label: 'Pilah Sampah', icon: FaTrash },
            { path: '/games/tebak-sampah', label: 'Tebak Sampah', icon: FaBrain },
            { path: '/games/daur-ulang', label: 'Daur Ulang', icon: FaRecycle },
          ]
        }
      ]
    },
    { path: '/artikel', label: 'Artikel', icon: FaNewspaper },
  ]

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
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
      {/* Fixed Navbar Container */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 pt-3"
      >
        {/* Navbar Content */}
        <div className="mx-4 md:mx-8 lg:mx-16 transition-all duration-500">
          <div
            className={`
              rounded-[80px] 
              backdrop-blur-[15px] 
              border-3 border-white/90 
              shadow-[0_20px_30px_-8px_rgba(40,100,60,0.3)]
              transition-all duration-500
              w-full
              ${scrolled ? 'bg-white/70 py-1' : 'bg-white/60 py-3'}
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
                    const isActive = isActivePath(item.path)
                    
                    // If item has dropdown
                    if (item.hasDropdown) {
                      return (
                        <div key={item.path} className="relative">
                          <motion.div
                            whileHover={{ y: -3 }}
                            className={`
                              px-5 py-2.5 rounded-[60px] 
                              flex items-center gap-2 
                              font-bold text-base cursor-pointer
                              transition-all duration-300
                              border-2 
                              ${isActive 
                                ? 'bg-white/95 text-[#166b3b] border-[#6fcf97] shadow-[0_4px_0_#9fccaf]' 
                                : 'text-[#1e4f33] border-transparent hover:bg-white/90 hover:border-[#a1dbb4]'
                              }
                            `}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                          >
                            <Icon className="text-lg" />
                            <span>{item.label}</span>
                            <FaChevronDown className={`text-sm transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                          </motion.div>

                          {/* Dropdown Menu */}
                          <AnimatePresence>
                            {dropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border-2 border-green-100 overflow-hidden z-50"
                              >
                                {item.dropdownItems.map((dropdownItem, index) => {
                                  const DropdownIcon = dropdownItem.icon
                                  
                                  // If dropdown item has subItems (like Games)
                                  if (dropdownItem.subItems) {
                                    return (
                                      <div key={dropdownItem.path} className="relative group">
                                        <Link
                                          to={dropdownItem.path}
                                          className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-green-50 transition-colors"
                                        >
                                          <span className="flex items-center gap-3">
                                            <DropdownIcon className="text-green-600" />
                                            <span className="font-medium">{dropdownItem.label}</span>
                                          </span>
                                          <FaChevronDown className="text-sm text-gray-400 -rotate-90 group-hover:rotate-0 transition-transform" />
                                        </Link>
                                        
                                        {/* Sub Dropdown for Games */}
                                        <div className="absolute left-full top-0 ml-2 w-56 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border-2 border-green-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                          {dropdownItem.subItems.map((subItem, subIndex) => {
                                            const SubIcon = subItem.icon
                                            return (
                                              <Link
                                                key={subItem.path}
                                                to={subItem.path}
                                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 transition-colors"
                                              >
                                                <SubIcon className="text-green-600" />
                                                <span className="font-medium">{subItem.label}</span>
                                              </Link>
                                            )
                                          })}
                                        </div>
                                      </div>
                                    )
                                  }
                                  
                                  // Regular dropdown item
                                  return (
                                    <Link
                                      key={dropdownItem.path}
                                      to={dropdownItem.path}
                                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 transition-colors"
                                    >
                                      <DropdownIcon className="text-green-600" />
                                      <span className="font-medium">{dropdownItem.label}</span>
                                    </Link>
                                  )
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    }
                    
                    // Regular menu item without dropdown
                    return (
                      <Link key={item.path} to={item.path}>
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

                  {/* Auth Buttons - Desktop */}
                  <div className="ml-4 flex items-center gap-2">
                    {isLoggedIn ? (
                      // User Profile Dropdown when logged in
                      <div className="relative">
                        <motion.div
                          whileHover={{ y: -3 }}
                          className="px-4 py-2.5 rounded-[60px] bg-gradient-to-r from-green-600 to-emerald-600 
                                   text-white font-bold flex items-center gap-2 cursor-pointer
                                   shadow-lg hover:shadow-xl transition-all"
                          onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
                        >
                          <FaUserCircle className="text-xl" />
                          <span>Akun</span>
                          <FaChevronDown className={`text-sm transition-transform duration-300 ${authDropdownOpen ? 'rotate-180' : ''}`} />
                        </motion.div>

                        <AnimatePresence>
                          {authDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border-2 border-green-100 overflow-hidden"
                            >
                              <Link
                                to="/profile"
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 transition-colors"
                                onClick={() => setAuthDropdownOpen(false)}
                              >
                                <FaUser className="text-green-600" />
                                <span>Profil Saya</span>
                              </Link>
                              <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors text-left"
                              >
                                <FaSignInAlt className="rotate-180" />
                                <span>Logout</span>
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Login & Signup Buttons
                      <>
                        <Link to="/login">
                          <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 rounded-[60px] bg-white text-green-700 
                                     font-bold border-2 border-green-600 shadow-lg
                                     hover:bg-green-50 transition-all flex items-center gap-2"
                          >
                            <FaSignInAlt />
                            <span>Masuk</span>
                          </motion.div>
                        </Link>
                        <Link to="/signup">
                          <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 rounded-[60px] bg-gradient-to-r from-green-600 to-emerald-600 
                                     text-white font-bold shadow-lg
                                     hover:from-green-700 hover:to-emerald-700 transition-all
                                     flex items-center gap-2"
                          >
                            <FaUserPlus />
                            <span>Daftar</span>
                          </motion.div>
                        </Link>
                      </>
                    )}
                  </div>
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
                  {/* Mobile Auth Buttons */}
                  <div className="px-4 py-3 space-y-2">
                    {isLoggedIn ? (
                      <>
                        <div className="bg-green-50 rounded-xl p-3">
                          <p className="text-sm text-gray-600 mb-2">Selamat datang,</p>
                          <p className="font-bold text-green-700">{localStorage.getItem('userName') || 'Pengguna'}</p>
                        </div>
                        <Link
                          to="/profile"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 bg-white/50 rounded-xl text-gray-700 hover:bg-white/80"
                        >
                          <FaUser className="text-green-600" />
                          <span>Profil Saya</span>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 bg-red-50 rounded-xl text-red-600 hover:bg-red-100"
                        >
                          <FaSignInAlt className="rotate-180" />
                          <span>Logout</span>
                        </button>
                      </>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          to="/login"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-white/50 rounded-xl text-green-700 font-semibold border-2 border-green-600"
                        >
                          <FaSignInAlt />
                          <span>Masuk</span>
                        </Link>
                        <Link
                          to="/signup"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold"
                        >
                          <FaUserPlus />
                          <span>Daftar</span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile Navigation Items */}
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = isActivePath(item.path)
                    
                    // Mobile menu with nested items
                    if (item.hasDropdown) {
                      return (
                        <div key={item.path} className="space-y-1">
                          <div
                            className={`
                              px-4 py-3 rounded-xl flex items-center justify-between
                              font-semibold transition-all
                              ${isActive 
                                ? 'bg-white/95 text-[#166b3b] border-2 border-[#6fcf97]' 
                                : 'bg-white/50 text-[#1e4f33]'
                              }
                            `}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                          >
                            <span className="flex items-center gap-3">
                              <Icon className="text-xl" />
                              <span>{item.label}</span>
                            </span>
                            <FaChevronDown className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                          </div>
                          
                          <AnimatePresence>
                            {dropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-8 space-y-1"
                              >
                                {item.dropdownItems.map((dropdownItem) => {
                                  const DropdownIcon = dropdownItem.icon
                                  
                                  if (dropdownItem.subItems) {
                                    return (
                                      <div key={dropdownItem.path} className="space-y-1">
                                        <Link
                                          to={dropdownItem.path}
                                          className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-green-600"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <DropdownIcon />
                                          <span>{dropdownItem.label}</span>
                                        </Link>
                                        <div className="pl-6 space-y-1 border-l-2 border-green-200 ml-2">
                                          {dropdownItem.subItems.map((subItem) => {
                                            const SubIcon = subItem.icon
                                            return (
                                              <Link
                                                key={subItem.path}
                                                to={subItem.path}
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-500 hover:text-green-600"
                                                onClick={() => setIsOpen(false)}
                                              >
                                                <SubIcon />
                                                <span>{subItem.label}</span>
                                              </Link>
                                            )
                                          })}
                                        </div>
                                      </div>
                                    )
                                  }
                                  
                                  return (
                                    <Link
                                      key={dropdownItem.path}
                                      to={dropdownItem.path}
                                      className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-green-600"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <DropdownIcon />
                                      <span>{dropdownItem.label}</span>
                                    </Link>
                                  )
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    }
                    
                    // Regular mobile menu item
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

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  )
}

export default Navbar