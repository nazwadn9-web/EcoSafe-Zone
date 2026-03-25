import React from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { FaRecycle, FaTree, FaLeaf, FaRegSun, FaCloudSun, FaMapMarkerAlt } from 'react-icons/fa'
import { GiPlantSeed, GiEarthAfricaEurope } from 'react-icons/gi'

const Hero = () => {
  const navigate = useNavigate()

  const ecoDots = [
    { size: 6,  color: 'bg-green-300',   duration: 3,   delay: 0,   x: '10%', y: '15%' },
    { size: 8,  color: 'bg-green-400',   duration: 3.5, delay: 0.2, x: '25%', y: '40%' },
    { size: 10, color: 'bg-emerald-400', duration: 4,   delay: 0.4, x: '45%', y: '25%' },
    { size: 12, color: 'bg-emerald-500', duration: 4.5, delay: 0.6, x: '70%', y: '35%' },
    { size: 7,  color: 'bg-teal-400',    duration: 3.2, delay: 0.8, x: '85%', y: '60%' },
    { size: 9,  color: 'bg-teal-500',    duration: 3.8, delay: 1.0, x: '55%', y: '75%' },
    { size: 5,  color: 'bg-green-500',   duration: 3,   delay: 1.2, x: '30%', y: '85%' },
    { size: 8,  color: 'bg-lime-400',    duration: 4.2, delay: 1.4, x: '15%', y: '65%' },
    { size: 11, color: 'bg-green-600',   duration: 4.8, delay: 1.6, x: '75%', y: '15%' },
    { size: 6,  color: 'bg-emerald-600', duration: 3.3, delay: 1.8, x: '90%', y: '80%' },
    { size: 8,  color: 'bg-green-400',   duration: 3.7, delay: 2.0, x: '40%', y: '50%' },
    { size: 10, color: 'bg-teal-300',    duration: 4.1, delay: 2.2, x: '60%', y: '45%' },
    { size: 7,  color: 'bg-emerald-300', duration: 3.5, delay: 2.4, x: '20%', y: '70%' },
    { size: 9,  color: 'bg-green-300',   duration: 3.9, delay: 2.6, x: '80%', y: '50%' },
    { size: 5,  color: 'bg-green-700',   duration: 3.2, delay: 3.0, x: '95%', y: '25%' },
  ]

  const sparkles = [
    { size: 3, x: '30%', y: '40%', delay: 0   },
    { size: 4, x: '60%', y: '55%', delay: 0.5 },
    { size: 3, x: '45%', y: '70%', delay: 1   },
    { size: 5, x: '80%', y: '30%', delay: 1.5 },
    { size: 3, x: '20%', y: '60%', delay: 2   },
    { size: 4, x: '70%', y: '80%', delay: 2.5 },
  ]

  const stats = [
    { value: '450+', label: 'Tahun',   sub: 'degradasi plastik', icon: FaRecycle   },
    { value: '17',   label: 'Pohon',   sub: 'terselamatkan/ton', icon: FaTree      },
    { value: '60%',  label: 'Sampah',  sub: 'organik',           icon: GiPlantSeed },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16 pb-10">

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" />

        {/* Soft blobs */}
        <div className="absolute top-0 left-[5%] w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-green-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-[5%] w-56 sm:w-80 lg:w-[500px] h-56 sm:h-80 lg:h-[500px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-36 sm:w-56 lg:w-80 h-36 sm:h-56 lg:h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="green" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div key={`orb-${i}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              width:  `clamp(80px, ${120 + i * 30}px, 220px)`,
              height: `clamp(80px, ${120 + i * 30}px, 220px)`,
              left:   `${[5, 20, 55, 70, 85][i]}%`,
              top:    `${[10, 60, 20, 70, 40][i]}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(134,239,172,0.15)' :
                i % 3 === 1 ? 'rgba(74,222,128,0.12)'  :
                              'rgba(16,185,129,0.10)'
              } 0%, transparent 70%)`,
            }}
            animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Eco dots */}
        {ecoDots.map((dot, i) => (
          <motion.div key={`dot-${i}`}
            className={`absolute rounded-full pointer-events-none ${dot.color}`}
            style={{ width: dot.size, height: dot.size, left: dot.x, top: dot.y, opacity: 0.45 }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.6, 0.3], y: [0, -12, 0] }}
            transition={{ duration: dot.duration, delay: dot.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Sparkles */}
        {sparkles.map((s, i) => (
          <motion.div key={`sp-${i}`}
            className="absolute bg-white rounded-full pointer-events-none"
            style={{ width: s.size, height: s.size, left: s.x, top: s.y, boxShadow: '0 0 12px rgba(255,255,255,0.9)' }}
            animate={{ scale: [0, 2, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm mb-4 border border-green-200"
            >
              <FaLeaf className="text-green-600 text-xs" />
              <span className="text-xs font-semibold text-green-700">Platform Peduli Lingkungan</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4"
            >
              Peduli{' '}
              <span className="text-green-600">Lingkungan</span>
              <br />
              untuk Masa Depan
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-gray-600 mb-6 max-w-md"
            >
              Mulai perubahan dari hal kecil. Bersama kita bisa menciptakan bumi yang lebih hijau dan sehat untuk semua.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-7"
            >
              <motion.button
                onClick={() => navigate('/layanan/daerah')}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="px-5 py-2.5 bg-white border-2 border-green-600 text-green-600 rounded-xl font-semibold shadow-sm flex items-center gap-2 text-sm hover:bg-green-50 transition-colors"
              >
                <FaMapMarkerAlt className="text-green-500 text-xs flex-shrink-0" />
                Semua Wilayah
              </motion.button>

              <Link to="/tentang">
                <motion.button
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold shadow-sm text-sm hover:from-green-600 hover:to-emerald-600 transition-colors"
                >
                  Tentang Kami
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-3 w-full max-w-xs sm:max-w-sm"
            >
              {stats.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div key={i} whileHover={{ y: -3 }}
                    className="relative bg-white/60 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-green-100 shadow-sm"
                  >
                    <motion.div
                      className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    />
                    <div className="flex items-center gap-1 mb-0.5">
                      <Icon className="text-green-500 text-xs flex-shrink-0" />
                      <span className="text-base sm:text-xl font-bold text-green-600 leading-none">{item.value}</span>
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-gray-700">{item.label}</div>
                    <div className="text-[9px] sm:text-[10px] text-gray-500">{item.sub}</div>
                    <div className="h-0.5 bg-green-100 rounded-full mt-1.5 overflow-hidden">
                      <motion.div className="h-full bg-gradient-to-r from-green-400 to-emerald-400"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* ── RIGHT — orbiting globe ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative flex items-center justify-center"
              style={{ width: 'clamp(200px, 45vw, 340px)', height: 'clamp(200px, 45vw, 340px)' }}
            >
              {/* Ring 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[4px] border-2 border-green-200/50 rounded-full"
              >
                <motion.div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.3 }}
                >
                  <FaLeaf className="text-white text-[9px] sm:text-xs" />
                </motion.div>
              </motion.div>

              {/* Ring 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[32px] sm:inset-[36px] border-2 border-emerald-200/60 rounded-full"
              >
                <motion.div
                  className="absolute top-1/2 -right-2.5 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.3 }}
                >
                  <FaRecycle className="text-white text-[8px] sm:text-[10px]" />
                </motion.div>
                <motion.div
                  className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-teal-400 to-green-400 rounded-full shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.3 }}
                >
                  <GiPlantSeed className="text-white text-[8px] sm:text-[10px]" />
                </motion.div>
              </motion.div>

              {/* Ring 3 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[62px] sm:inset-[72px] border-2 border-teal-200/70 rounded-full"
              >
                <motion.div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.3 }}
                >
                  <FaTree className="text-white text-[7px] sm:text-[9px]" />
                </motion.div>
              </motion.div>

              {/* Ring 4 — micro dots */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[84px] sm:inset-[98px] border border-green-300/80 rounded-full"
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div key={i}
                    className="absolute w-1.5 h-1.5 bg-green-400 rounded-full"
                    style={{
                      left: `${50 + 40 * Math.cos(i * Math.PI / 2)}%`,
                      top:  `${50 + 40 * Math.sin(i * Math.PI / 2)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                  />
                ))}
              </motion.div>

              {/* Center globe */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    '0 0 15px rgba(74,222,128,0.3)',
                    '0 0 30px rgba(74,222,128,0.6)',
                    '0 0 15px rgba(74,222,128,0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative z-10 bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 rounded-full shadow-2xl flex items-center justify-center"
                style={{ width: 'clamp(52px, 20%, 96px)', height: 'clamp(52px, 20%, 96px)' }}
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
                  <GiEarthAfricaEurope className="text-white text-2xl sm:text-3xl md:text-4xl" />
                </motion.div>
              </motion.div>

              {/* Sun float */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 8, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl shadow-xl flex items-center justify-center"
              >
                <FaRegSun className="text-white text-sm sm:text-lg" />
              </motion.div>

              {/* Cloud float */}
              <motion.div
                animate={{ y: [8, -8, 8], rotate: [0, -8, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full shadow-xl flex items-center justify-center"
              >
                <FaCloudSun className="text-white text-sm sm:text-lg" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero