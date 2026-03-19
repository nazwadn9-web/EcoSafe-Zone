import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' // ✅ TAMBAHKAN INI
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaExclamationTriangle, 
  FaLeaf, 
  FaPen, 
  FaUser, 
  FaMapMarkerAlt, 
  FaPhone,
  FaCheckCircle,
  FaHeart,
  FaSmile,
  FaStar,
  FaHandsHelping,
  FaRecycle,
  FaTree,
  FaGlobeAsia,
  FaClock,
  FaShieldAlt,
  FaRegSmile,
  FaRegHeart,
  FaRegStar
} from 'react-icons/fa'
import { MdEmail, MdDescription } from 'react-icons/md'
import { GiEarthAmerica } from 'react-icons/gi'

const ReportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    description: '',
    type: 'pencemaran',
  })

  const [submitted, setSubmitted] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [confetti, setConfetti] = useState([])

  useEffect(() => {
    if (submitted) {
      generateConfetti()
      setShowCelebration(true)
      
      // Auto hide celebration after 5 seconds
      const timer = setTimeout(() => {
        setShowCelebration(false)
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [submitted])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const generateConfetti = () => {
    const colors = ['#22c55e', '#16a34a', '#eab308', '#ef4444', '#3b82f6', '#a855f7', '#ec4899']
    const newConfetti = []
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        left: `${Math.random() * 100}%`,
        animationDuration: Math.random() * 3 + 2,
        delay: Math.random() * 0.5,
        size: Math.random() * 10 + 5,
      })
    }
    setConfetti(newConfetti)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setShowCelebration(false)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Celebration Overlay */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none"
          >
            {/* Confetti */}
            {confetti.map((c) => (
              <motion.div
                key={c.id}
                className="absolute rounded-full"
                style={{
                  backgroundColor: c.color,
                  left: c.left,
                  width: c.size,
                  height: c.size,
                  top: -20,
                }}
                animate={{
                  y: ['0vh', '100vh'],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: c.animationDuration,
                  repeat: Infinity,
                  delay: c.delay,
                  ease: "linear"
                }}
              />
            ))}

            {/* Floating Icons */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-10 left-10 text-green-500 text-4xl"
            >
              <FaLeaf />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
              className="absolute top-20 right-20 text-emerald-500 text-5xl"
            >
              <FaTree />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-20 left-20 text-blue-500 text-4xl"
            >
              <FaRecycle />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 15, -15, 0],
              }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-32 right-32 text-purple-500 text-5xl"
            >
              <GiEarthAmerica />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container-custom max-w-4xl">
        {/* Conditional Rendering: Form or Thank You Card */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            /* Main Form */
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="card p-8 md:p-12 relative overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-100 rounded-full opacity-50"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="inline-block p-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-full mb-4 shadow-lg"
                  >
                    <FaExclamationTriangle className="text-4xl text-red-600" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    FORMULIR <span className="text-green-600">PENGADUAN</span>
                  </h2>
                  <p className="text-lg text-gray-600">
                    Pencemaran dan/atau Perusakan Lingkungan Hidup
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-4 rounded-r-lg mb-8">
                  <p className="text-green-800 font-medium flex items-center gap-2">
                    <FaLeaf className="text-green-600 animate-pulse" />
                    <span className="text-sm md:text-base">
                      "Mari Bersama Kita Jaga Lingkungan, karena Alam yang Sehat adalah 
                      Warisan Berharga bagi Anak Cucu Kita."
                    </span>
                    <FaLeaf className="text-green-600 animate-pulse" />
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                        <FaUser className="text-green-600" /> Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 
                                 focus:border-green-500 focus:ring-2 focus:ring-green-200 
                                 focus:outline-none transition-all"
                        placeholder="Masukkan nama Anda"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                        <MdEmail className="text-green-600" /> Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 
                                 focus:border-green-500 focus:ring-2 focus:ring-green-200 
                                 focus:outline-none transition-all"
                        placeholder="email@contoh.com"
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                        <FaPhone className="text-green-600" /> Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 
                                 focus:border-green-500 focus:ring-2 focus:ring-green-200 
                                 focus:outline-none transition-all"
                        placeholder="08xxxxxxxxxx"
                      />
                    </motion.div>

                    {/* Location */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-green-600" /> Lokasi Kejadian
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 
                                 focus:border-green-500 focus:ring-2 focus:ring-green-200 
                                 focus:outline-none transition-all"
                        placeholder="Alamat lengkap lokasi"
                      />
                    </motion.div>
                  </div>

                  {/* Type of Report */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Jenis Pengaduan</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 
                               focus:border-green-500 focus:ring-2 focus:ring-green-200 
                               focus:outline-none transition-all bg-white"
                    >
                      <option value="pencemaran">🌊 Pencemaran Lingkungan</option>
                      <option value="perusakan">🌲 Perusakan Lingkungan</option>
                      <option value="hutan">🌳 Perusakan Hutan</option>
                      <option value="lainnya">📝 Lainnya</option>
                    </select>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <MdDescription className="text-green-600" /> Deskripsi Kejadian
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 
                               focus:border-green-500 focus:ring-2 focus:ring-green-200 
                               focus:outline-none transition-all resize-none"
                      placeholder="Jelaskan secara detail kejadian yang Anda laporkan..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 
                             text-white py-4 rounded-xl font-bold text-lg shadow-xl
                             hover:shadow-2xl transition-all flex items-center justify-center gap-3
                             relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    <FaPen className="group-hover:rotate-12 transition-transform" />
                    LAPORKAN SEKARANG
                    <FaHandsHelping className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          ) : (
            /* Simple Thank You Card */
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500">
                {/* Floating Particles */}
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/10"
                    style={{
                      width: Math.random() * 60 + 20,
                      height: Math.random() * 60 + 20,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: Math.random() * 4 + 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Main Content */}
              <div className="relative z-10 p-12 text-white text-center">
                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-6"
                >
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full 
                                flex items-center justify-center border-4 border-white/50
                                shadow-2xl">
                    <FaCheckCircle className="text-white text-5xl" />
                  </div>
                </motion.div>

                {/* Thank You Text */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-black mb-4"
                >
                  TERIMA KASIH!
                </motion.h2>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl mb-3"
                >
                  <FaSmile className="inline-block text-yellow-300 mr-2" />
                  Terima kasih{' '}
                  <span className="font-bold text-yellow-300">
                    {formData.name || 'Sahabat Lingkungan'}
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/90 text-lg mb-8 max-w-md mx-auto"
                >
                  Laporan Anda telah berhasil dikirim dan akan segera diproses oleh tim kami.
                </motion.p>

                {/* Divider */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="h-1 bg-white/30 rounded-full mx-auto mb-8"
                />

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetForm}
                    className="px-6 py-3 bg-white text-green-600 rounded-full font-semibold
                             shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <FaPen />
                    Buat Laporan Baru
                  </motion.button>
                  
                  {/* ✅ LINK KE BERANDA */}
                  <Link to="/">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-transparent border-2 border-white text-white 
                               rounded-full font-semibold hover:bg-white/10 transition-all
                               flex items-center justify-center gap-2"
                    >
                      <FaRecycle />
                      Kembali ke Beranda
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Cards (shown only when form is visible) */}
        {!submitted && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg"
            >
              <FaClock className="text-2xl text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800">Respon Cepat</h4>
              <p className="text-xs text-gray-600">Maksimal 24 jam</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg"
            >
              <FaShieldAlt className="text-2xl text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800">Data Terlindungi</h4>
              <p className="text-xs text-gray-600">Privasi aman</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg"
            >
              <FaStar className="text-2xl text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800">Ditindaklanjuti</h4>
              <p className="text-xs text-gray-600">Oleh tim ahli</p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ReportForm