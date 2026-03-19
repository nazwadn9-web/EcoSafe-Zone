import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaLeaf, 
  FaHeart, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaNewspaper 
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Array untuk quick links dengan icon yang sesuai
  const quickLinks = [
    { name: 'Beranda', icon: FaHome, path: '' },
    { name: 'Tentang', icon: FaInfoCircle, path: 'tentang' },
    { name: 'Layanan', icon: FaServicestack, path: 'layanan' },
    { name: 'Artikel', icon: FaNewspaper, path: 'artikel' }
  ]

  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <FaLeaf className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold">EcoCare</span>
            </Link>
            <p className="text-green-200 mb-4">
              Bersama menjaga lingkungan untuk masa depan yang lebih hijau 
              dan berkelanjutan bagi generasi mendatang.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <FaYoutube />
              </motion.a>
            </div>
          </div>

          {/* Quick Links dengan Ikon */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index}>
                    <Link
                      to={`/${item.path}`}
                      className="text-green-200 hover:text-white transition-colors flex items-center gap-3 group"
                    >
                      <span className="w-6 h-6 bg-green-800/50 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                        <Icon className="text-sm" />
                      </span>
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <ul className="space-y-2 text-green-200">
              <li>Jl Hijau No 123</li>
              <li>Jakarta, Indonesia</li>
              <li>info@ecocare.id</li>
              <li>+62 812 3456 7890</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-green-800 text-center">
          <p className="text-green-300 flex items-center justify-center gap-1">
            © {currentYear} EcoCare Made with <FaHeart className="text-red-400 animate-pulse" /> for better environment
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer