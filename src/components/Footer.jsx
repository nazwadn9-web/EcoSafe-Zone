import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaLeaf,  FaGlobeAsia, FaFacebookF, 
  FaTwitter,  FaInstagram,  FaYoutube, FaHome,
  FaInfoCircle, FaServicestack, FaNewspaper,
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt
} from 'react-icons/fa'

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Beranda', icon: FaHome, path: '' },
    { name: 'Tentang', icon: FaInfoCircle, path: 'tentang' },
    { name: 'Layanan', icon: FaServicestack, path: 'layanan' },
    { name: 'Artikel', icon: FaNewspaper, path: 'artikel' }
  ]

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=61578554922812', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://x.com/mucitra61802', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/nasukacheese/', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@Mecha-y6', label: 'YouTube' },
  ]

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'JL. DARUN NAIM, KARANGDUREN TENGARAN KAB. SEMARANG, Karangduren, Kec. Tengaran, Kab. Semarang, Jawa Tengah' },
    { icon: FaEnvelope, text: 'nazwadn9@gmail.com' },
    { icon: FaPhoneAlt, text: '085811463202' },
  ]

  return (
    <footer className="relative bg-white border-t border-green-100 pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-300 to-transparent" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100/30 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">

          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <Link to="/" onClick={scrollTop} className="inline-flex items-center gap-2 sm:gap-3 group mx-auto sm:mx-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all"
              >
                <FaLeaf className="text-white text-lg sm:text-2xl" />
              </motion.div>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700">
                EcoCare
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Solusi cerdas untuk ekosistem yang lebih sehat. Kami membantu Anda berkontribusi bagi bumi dengan langkah nyata dan berkelanjutan.
            </p>
 
            <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-green-50 rounded-lg sm:rounded-xl flex items-center justify-center text-green-600 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white transition-all duration-300 border border-green-200"
                  aria-label={social.label}
                >
                  <social.icon className="text-xs sm:text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2 justify-center sm:justify-start">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full" />
              Tautan Cepat
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index}>
                    <Link
                      to={`/${item.path}`}
                      onClick={scrollTop}
                      className="text-xs sm:text-sm text-gray-600 hover:text-green-600 transition-all flex items-center gap-2 sm:gap-3 justify-center sm:justify-start group"
                    >
                      <div className="w-6 sm:w-7 h-6 sm:h-7 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <Icon className="text-[10px] sm:text-xs text-green-600" />
                      </div>
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-500 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2 justify-center sm:justify-start">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full" />
              Hubungi Kami
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map((contact, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-gray-600 justify-center sm:justify-start">
                  <contact.icon className="text-green-600 text-xs sm:text-sm mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm hover:text-gray-900 transition-colors cursor-default text-left break-words">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2 justify-center sm:justify-start">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full" />
              Newsletter
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
              Dapatkan update artikel lingkungan terbaru.
            </p>
            <form className="relative max-w-xs mx-auto sm:mx-0" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email aktif..." 
                className="w-full bg-green-50 border border-green-200 rounded-lg sm:rounded-xl py-2 sm:py-3 px-3 sm:px-4 pr-16 sm:pr-20 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all text-xs sm:text-sm text-gray-700 placeholder-gray-400"
              />
              <button className="absolute right-1 sm:right-1.5 top-1 sm:top-1.5 bottom-1 sm:bottom-1.5 px-2 sm:px-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all shadow-sm">
                Kirim
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-green-100 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-xs sm:text-sm text-gray-500 order-2 sm:order-1">
            © {currentYear} <span className="text-green-700 font-semibold">EcoCare</span>. All rights reserved.
          </div>
          <motion.div 
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-50 rounded-full border border-green-200 order-1 sm:order-2"
            whileHover={{ scale: 1.05 }}
          >
            Made with <FaGlobeAsia className="text-green-600 text-xs sm:text-sm animate-pulse" /> for better earth
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer