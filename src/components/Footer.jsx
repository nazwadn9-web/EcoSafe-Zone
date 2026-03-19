import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaLeaf, 
  FaHeart, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaNewspaper,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Beranda', icon: FaHome, path: '' },
    { name: 'Tentang', icon: FaInfoCircle, path: 'tentang' },
    { name: 'Layanan', icon: FaServicestack, path: 'layanan' },
    { name: 'Artikel', icon: FaNewspaper, path: 'artikel' }
  ]

  const socialLinks = [
    { icon: FaFacebookF, color: 'hover:bg-blue-600', href: '#' },
    { icon: FaTwitter, color: 'hover:bg-sky-400', href: '#' },
    { icon: FaInstagram, color: 'hover:bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600', href: '#' },
    { icon: FaYoutube, color: 'hover:bg-red-600', href: '#' },
  ]

  return (
    <footer className="relative bg-slate-950 text-white pt-20 pb-10 overflow-hidden">
      {/* Dekorasi Background - Meniru style Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-900/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:rotate-12 transition-transform duration-300">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <span className="text-3xl font-black tracking-tight uppercase italic">
                Eco<span className="text-green-500">Care</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Solusi cerdas untuk ekosistem yang lebih sehat. Kami membantu Anda berkontribusi bagi bumi dengan langkah nyata dan berkelanjutan.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className={`w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links Section */}
          <div className="lg:pl-10">
            <h3 className="text-lg font-bold mb-7 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Tautan Cepat
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index}>
                    <Link
                      to={`/${item.path}`}
                      className="text-slate-400 hover:text-green-400 transition-all flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-green-500/10 transition-colors">
                        <Icon className="text-xs" />
                      </div>
                      <span className="relative overflow-hidden">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* 3. Kontak Section */}
          <div>
            <h3 className="text-lg font-bold mb-7 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Hubungi Kami
            </h3>
            <ul className="space-y-5">
              {[
                { icon: FaMapMarkerAlt, text: 'Jl. Hijau Lestari No. 123, Jakarta' },
                { icon: FaEnvelope, text: 'support@ecocare.id' },
                { icon: FaPhoneAlt, text: '+62 812 3456 7890' },
              ].map((contact, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-400 group">
                  <contact.icon className="text-green-500 mt-1" />
                  <span className="group-hover:text-slate-200 transition-colors cursor-default">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-7 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Newsletter
            </h3>
            <p className="text-slate-400 text-sm mb-5">Dapatkan update artikel lingkungan terbaru langsung di email Anda.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email aktif..." 
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-green-500 hover:bg-green-400 text-white rounded-xl transition-colors shadow-lg shadow-green-500/20">
                Kirim
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {currentYear} <span className="text-white font-bold">EcoCare Team</span>. Seluruh Hak Cipta Dilindungi.
          </div>
          <motion.div 
            className="flex items-center gap-2 text-sm text-slate-400 px-4 py-2 bg-slate-900 rounded-full border border-slate-800"
            whileHover={{ scale: 1.05 }}
          >
            Made with <FaHeart className="text-red-500 animate-pulse" /> for a better earth
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer