import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaRecycle, FaHome, FaLeaf, FaHandsHelping, 
  FaNewspaper, FaGamepad, FaChevronDown,
} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

const FULL_HERO_PATHS = ['/tentang']
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  const isFullHeroPage = FULL_HERO_PATHS.includes(location.pathname)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setDropdownOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  // Klik di luar dropdown → tutup
  useEffect(() => {
    if (!dropdownOpen) return
    const fn = () => setDropdownOpen(false)
    document.addEventListener('click', fn)
    return () => document.removeEventListener('click', fn)
  }, [dropdownOpen])

  const navItems = [
    { path: '/', label: 'Beranda', icon: FaHome },
    { path: '/tentang', label: 'Tentang', icon: FaLeaf },
    {
      path: '/layanan',
      label: 'Layanan',
      icon: FaHandsHelping,
      hasDropdown: true,
      dropdownItems: [
        { path: '/layanan',                label: 'Semua Layanan',  icon: FaHandsHelping },
        { path: '/layanan/edukasi',        label: 'Edukasi' },
        { path: '/layanan/bank-sampah',    label: 'Bank Sampah' },
        { path: '/layanan/form-pengajuan', label: 'Form Pengajuan' },
        { path: '/layanan/daerah',         label: 'Daerah' },
        { path: '/games',                  label: 'Games', icon: FaGamepad },
      ],
    },
    { path: '/artikel', label: 'Artikel', icon: FaNewspaper },
  ]

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  // Shared button style
  const btnBase = `flex items-center gap-1 rounded-full border font-medium
                   whitespace-nowrap transition-all duration-200
                   px-2.5 py-1.5 text-[11px]
                   md:px-3 md:py-1.5 md:text-[11px]
                   lg:px-4 lg:py-2 lg:text-xs`

  const btnActive   = 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-400 shadow-sm'
  const btnInactive = 'text-gray-700 border-transparent hover:bg-white/70 hover:border-green-200'

  return (
    <>
      <motion.nav
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-8 pt-2 sm:pt-3"
      >
        <div className={`rounded-full backdrop-blur-md border transition-all duration-300
          ${scrolled ? 'bg-white/75 border-green-200 shadow-lg' : 'bg-white/55 border-green-100/50 shadow-md'}`}>

          <div className="px-3 sm:px-4 md:px-5 lg:px-6">
            <div className="flex justify-between items-center h-11 md:h-12 lg:h-14">

              {/* Logo */}
              <Link to="/" onClick={scrollTop} className="flex items-center gap-1.5 flex-shrink-0 group">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="text-green-600 text-lg md:text-xl lg:text-2xl"
                >
                  <FaRecycle />
                </motion.div>
                <span className="text-sm md:text-base lg:text-lg font-bold text-green-700 whitespace-nowrap">
                  PilahPintar
                </span>
              </Link>

              {/* ── DESKTOP NAV ── */}
              <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
                {navItems.map((item, idx) => {
                  const Icon = item.icon
                  const active = isActivePath(item.path)

                  if (!item.hasDropdown) {
                    return (
                      <Link key={idx} to={item.path} onClick={scrollTop}>
                        <button className={`${btnBase} ${active ? btnActive : btnInactive}`}>
                          <Icon className={`text-[10px] lg:text-xs flex-shrink-0 ${active ? 'text-white' : 'text-green-600'}`} />
                          {item.label}
                        </button>
                      </Link>
                    )
                  }

                  return (
                    <div key={idx} className="relative">
                      <button
                        onClick={e => { e.stopPropagation(); setDropdownOpen(v => !v) }}
                        className={`${btnBase} ${active ? btnActive : btnInactive}`}
                      >
                        <Icon className={`text-[10px] lg:text-xs flex-shrink-0 ${active ? 'text-white' : 'text-green-600'}`} />
                        {item.label}
                        <FaChevronDown className={`text-[9px] flex-shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            onClick={e => e.stopPropagation()}
                            className="absolute top-full left-0 mt-2 w-44 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-green-100 overflow-hidden"
                          >
                            {item.dropdownItems.map((di, i) => (
                              <Link key={i} to={di.path}
                                onClick={() => { setDropdownOpen(false); scrollTop() }}
                                className={`flex items-center gap-2 px-4 py-2.5 text-[11px] text-gray-700 hover:bg-green-50 transition-colors
                                  ${i === 0 ? 'font-semibold border-b border-green-100 bg-green-50/40' : ''}`}
                              >
                                {di.icon
                                  ? <di.icon className="text-green-600 text-[10px] flex-shrink-0" />
                                  : <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                                }
                                {di.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsOpen(v => !v)}
                className="md:hidden w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center shadow-md flex-shrink-0"
              >
                {isOpen ? <IoClose size={15} /> : <GiHamburgerMenu size={13} />}
              </button>
            </div>

            {/* ── MOBILE NAV ── */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="pt-2 pb-3 space-y-0.5">
                    {navItems.map((item, idx) => {
                      const Icon = item.icon
                      const active = isActivePath(item.path)

                      if (item.hasDropdown) {
                        return (
                          <div key={idx}>
                            <button
                              onClick={() => setDropdownOpen(v => !v)}
                              className={`w-full px-3 py-2 rounded-lg flex items-center justify-between text-xs font-medium transition-all
                                ${active ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-white/50'}`}
                            >
                              <span className="flex items-center gap-2">
                                <Icon className="text-green-600 text-xs" />
                                {item.label}
                              </span>
                              <FaChevronDown className={`text-[10px] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                              {dropdownOpen && (
                                <motion.div
                                  initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                                  className="pl-5 pr-2 space-y-0.5 mt-0.5 overflow-hidden"
                                >
                                  {item.dropdownItems.map((di, i) => (
                                    <Link key={i} to={di.path}
                                      onClick={() => { setIsOpen(false); scrollTop() }}
                                      className={`flex items-center gap-2 px-3 py-1.5 text-[11px] rounded-lg transition-colors
                                        ${i === 0
                                          ? 'font-semibold text-green-700 bg-green-50 hover:bg-green-100'
                                          : 'text-gray-600 hover:text-green-600 hover:bg-green-50/60'}`}
                                    >
                                      {di.icon
                                        ? <di.icon className="text-green-600 text-[10px]" />
                                        : <span className="w-1 h-1 rounded-full bg-green-400" />
                                      }
                                      {di.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      }

                      return (
                        <Link key={idx} to={item.path}
                          onClick={() => { setIsOpen(false); scrollTop() }}
                          className={`w-full px-3 py-2 rounded-lg flex items-center gap-2 text-xs font-medium transition-all
                            ${active ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-white/50'}`}
                        >
                          <Icon className="text-green-600 text-xs" />
                          {item.label}
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

      {!isFullHeroPage && (
        <div className="h-[52px] sm:h-[60px] md:h-[56px] lg:h-[68px]" />
      )}
    </>
  )
}

export default Navbar