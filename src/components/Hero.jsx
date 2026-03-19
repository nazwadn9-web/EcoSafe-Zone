import React from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { FaRecycle, FaTree, FaLeaf, FaRegSun, FaCloudSun, FaMapMarkerAlt } from 'react-icons/fa'
import { GiPlantSeed, GiEarthAfricaEurope, GiFlowerPot, GiWaterDrop } from 'react-icons/gi'

const Hero = () => {
  const navigate = useNavigate()

  // Eco Dots (tetap sama)
  const ecoDots = [
    { size: 6, color: 'bg-green-300', duration: 3, delay: 0, x: '10%', y: '15%' },
    { size: 8, color: 'bg-green-400', duration: 3.5, delay: 0.2, x: '25%', y: '40%' },
    { size: 10, color: 'bg-emerald-400', duration: 4, delay: 0.4, x: '45%', y: '25%' },
    { size: 12, color: 'bg-emerald-500', duration: 4.5, delay: 0.6, x: '70%', y: '35%' },
    { size: 7, color: 'bg-teal-400', duration: 3.2, delay: 0.8, x: '85%', y: '60%' },
    { size: 9, color: 'bg-teal-500', duration: 3.8, delay: 1.0, x: '55%', y: '75%' },
    { size: 5, color: 'bg-green-500', duration: 3, delay: 1.2, x: '30%', y: '85%' },
    { size: 8, color: 'bg-lime-400', duration: 4.2, delay: 1.4, x: '15%', y: '65%' },
    { size: 11, color: 'bg-green-600', duration: 4.8, delay: 1.6, x: '75%', y: '15%' },
    { size: 6, color: 'bg-emerald-600', duration: 3.3, delay: 1.8, x: '90%', y: '80%' },
    { size: 8, color: 'bg-green-400', duration: 3.7, delay: 2.0, x: '40%', y: '50%' },
    { size: 10, color: 'bg-teal-300', duration: 4.1, delay: 2.2, x: '60%', y: '45%' },
    { size: 7, color: 'bg-emerald-300', duration: 3.5, delay: 2.4, x: '20%', y: '70%' },
    { size: 9, color: 'bg-green-300', duration: 3.9, delay: 2.6, x: '80%', y: '50%' },
    { size: 12, color: 'bg-lime-500', duration: 4.5, delay: 2.8, x: '35%', y: '20%' },
    { size: 5, color: 'bg-green-700', duration: 3.2, delay: 3.0, x: '95%', y: '25%' },
    { size: 8, color: 'bg-emerald-700', duration: 3.6, delay: 3.2, x: '5%', y: '85%' },
    { size: 10, color: 'bg-teal-600', duration: 4.0, delay: 3.4, x: '65%', y: '90%' },
    { size: 6, color: 'bg-green-200', duration: 3.4, delay: 3.6, x: '50%', y: '10%' },
    { size: 9, color: 'bg-emerald-200', duration: 3.8, delay: 3.8, x: '75%', y: '70%' },
  ]

  // Sparkles (tetap sama)
  const sparkles = [
    { size: 3, x: '30%', y: '40%', delay: 0 },
    { size: 4, x: '60%', y: '55%', delay: 0.5 },
    { size: 3, x: '45%', y: '70%', delay: 1 },
    { size: 5, x: '80%', y: '30%', delay: 1.5 },
    { size: 3, x: '20%', y: '60%', delay: 2 },
    { size: 4, x: '70%', y: '80%', delay: 2.5 },
  ]

  const handleSemuaWilayah = () => {
    navigate('/cari')
  }

  return (
    <section className="relative min-h-screen sm:min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      {/* Background - Hijau Lembut (BUKAN PUTIH) */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient hijau lembut - SESUAI DENGAN ARTIKEL */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" />
        
        {/* Organic shapes dengan opacity rendah */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-[5%] w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-green-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-[5%] lg:right-[10%] w-64 sm:w-80 lg:w-[500px] h-64 sm:h-80 lg:h-[500px] bg-emerald-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-teal-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-36 sm:w-56 lg:w-72 h-36 sm:h-56 lg:h-72 bg-lime-200/20 rounded-full blur-3xl" />
        </div>

        {/* Pattern daun yang sangat halus */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30L30 5Z' fill='%2322c55e' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />

        {/* Garis-garis organik */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="green" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating gradient orbs dengan warna lebih soft */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: `clamp(100px, ${Math.random() * 180 + 100}px, 280px)`,
              height: `clamp(100px, ${Math.random() * 180 + 100}px, 280px)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(134, 239, 172, 0.15)' : 
                i % 3 === 1 ? 'rgba(74, 222, 128, 0.12)' : 
                'rgba(16, 185, 129, 0.1)'
              } 0%, transparent 70%)`,
            }}
            animate={{ 
              y: [0, -40, 0], 
              x: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Eco Dots - Responsif ukuran */}
        {ecoDots.map((dot, i) => (
          <motion.div
            key={`dot-${i}`}
            className={`absolute rounded-full ${dot.color} shadow-lg`}
            style={{
              width: `clamp(${dot.size * 0.5}px, ${dot.size}px, ${dot.size * 1.2}px)`,
              height: `clamp(${dot.size * 0.5}px, ${dot.size}px, ${dot.size * 1.2}px)`,
              left: dot.x,
              top: dot.y,
              filter: `blur(${Math.random() * 2}px)`,
              opacity: 0.5,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              y: [0, -15, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Sparkles - Responsif ukuran */}
        {sparkles.map((sparkle, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              width: `clamp(${sparkle.size * 0.7}px, ${sparkle.size}px, ${sparkle.size * 1.3}px)`,
              height: `clamp(${sparkle.size * 0.7}px, ${sparkle.size}px, ${sparkle.size * 1.3}px)`,
              left: sparkle.x,
              top: sparkle.y,
              boxShadow: '0 0 15px rgba(255,255,255,0.9)',
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Badge - Responsif */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md mb-2 sm:mb-3 border border-green-200">
              <FaLeaf className="text-green-600 text-[10px] sm:text-xs" />
              <span className="text-[10px] sm:text-xs font-semibold text-green-700">
                Platform Peduli Lingkungan
              </span>
            </div>

            {/* Heading - Responsif */}
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug mb-2 sm:mb-3"
            >
              Peduli{' '}
              <span className="text-green-600">
                Lingkungan
              </span>
              <br className="hidden sm:block" />
              untuk Masa Depan
            </motion.h1>

            {/* Deskripsi - Responsif */}
            <motion.p 
              className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-5 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ayo mulai perubahan dari hal kecil. Bersama kita bisa menciptakan bumi yang lebih hijau dan sehat.
            </motion.p>

            {/* Buttons - Responsif */}
            <motion.div 
              className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={handleSemuaWilayah}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-white border-2 border-green-600 text-green-600 rounded-lg font-semibold shadow-md flex items-center gap-1 sm:gap-2 text-xs sm:text-sm hover:bg-green-50 transition-colors"
              >
                <FaMapMarkerAlt className="text-green-500 text-[10px] sm:text-sm" />
                <span>Semua Wilayah</span>
              </motion.button>

              <Link to="/tentang">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold shadow-md text-xs sm:text-sm hover:from-green-600 hover:to-emerald-600 transition-colors"
                >
                  Tentang Kami
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats - Responsif */}
            <motion.div 
              className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6 max-w-sm mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { value: '450+', label: 'Tahun', sub: 'degradasi plastik', icon: FaRecycle },
                { value: '17', label: 'Pohon', sub: 'terselamatkan/ton', icon: FaTree },
                { value: '60%', label: 'Sampah', sub: 'organik', icon: GiPlantSeed },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3 }}
                    className="relative group bg-white/30 backdrop-blur-sm rounded-lg p-1.5 sm:p-2"
                  >
                    {/* Eco dot kecil */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-green-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    />
                    
                    <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-1.5 mb-0.5">
                      <Icon className="text-green-500 text-[10px] sm:text-xs" />
                      <motion.div 
                        className="text-sm sm:text-xl md:text-2xl font-bold text-green-600"
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.value}
                      </motion.div>
                    </div>
                    <div className="text-[8px] sm:text-xs font-semibold text-gray-700">{item.label}</div>
                    <div className="text-[6px] sm:text-[10px] text-gray-500 hidden sm:block">{item.sub}</div>
                    
                    {/* Progress bar mini */}
                    <motion.div
                      className="h-0.5 bg-green-100 rounded-full mt-1 overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-400"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT - ORBITING RINGS (Tetap dengan animasi, responsif ukuran) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-[250px] xl:w-[350px] h-[250px] xl:h-[350px] flex items-center justify-center scale-90 lg:scale-100">

              {/* Orbit Ring 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[230px] xl:w-[330px] h-[230px] xl:h-[330px] border-2 border-green-200/50 rounded-full"
              >
                <motion.div
                  className="absolute -top-2 left-1/2 w-5 xl:w-7 h-5 xl:h-7 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full shadow-lg flex items-center justify-center"
                  style={{ x: '-50%' }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaLeaf className="text-white text-[8px] xl:text-xs" />
                </motion.div>
              </motion.div>

              {/* Orbit Ring 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[180px] xl:w-[260px] h-[180px] xl:h-[260px] border-2 border-emerald-200/60 rounded-full"
              >
                <motion.div
                  className="absolute top-1/2 -right-2 xl:-right-3 w-5 xl:w-6 h-5 xl:h-6 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full shadow-lg flex items-center justify-center"
                  style={{ y: '-50%' }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaRecycle className="text-white text-[6px] xl:text-[10px]" />
                </motion.div>
                <motion.div
                  className="absolute -left-2 xl:-left-3 top-1/2 w-5 xl:w-6 h-5 xl:h-6 bg-gradient-to-br from-teal-400 to-green-400 rounded-full shadow-lg flex items-center justify-center"
                  style={{ y: '-50%' }}
                  whileHover={{ scale: 1.2 }}
                >
                  <GiPlantSeed className="text-white text-[6px] xl:text-[10px]" />
                </motion.div>
              </motion.div>

              {/* Orbit Ring 3 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-[130px] xl:w-[190px] h-[130px] xl:h-[190px] border-2 border-teal-200/70 rounded-full"
              >
                <motion.div
                  className="absolute top-0 left-1/2 w-4 xl:w-5 h-4 xl:h-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-lg flex items-center justify-center"
                  style={{ x: '-50%' }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaTree className="text-white text-[6px] xl:text-[8px]" />
                </motion.div>
              </motion.div>

              {/* Orbit Ring 4 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-[90px] xl:w-[130px] h-[90px] xl:h-[130px] border border-green-300/80 rounded-full"
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-0.5 xl:w-1 h-0.5 xl:h-1 bg-green-400 rounded-full"
                    style={{
                      left: `${50 + 40 * Math.cos(i * Math.PI / 2)}%`,
                      top: `${50 + 40 * Math.sin(i * Math.PI / 2)}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </motion.div>

              {/* Main Circle */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 15px rgba(74, 222, 128, 0.3)',
                    '0 0 30px rgba(74, 222, 128, 0.6)',
                    '0 0 15px rgba(74, 222, 128, 0.3)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 xl:w-24 h-16 xl:h-24 bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 rounded-full shadow-2xl flex items-center justify-center relative z-10"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <GiEarthAfricaEurope className="text-white text-2xl xl:text-4xl" />
                </motion.div>
              </motion.div>

              {/* Floating Icons - Responsif */}
              <motion.div
                animate={{ y: [-12, 12, -12], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 xl:-top-8 -right-6 xl:-right-8 w-8 xl:w-12 h-8 xl:h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl xl:rounded-2xl shadow-xl flex items-center justify-center"
              >
                <FaRegSun className="text-white text-sm xl:text-xl" />
              </motion.div>

              <motion.div
                animate={{ y: [12, -12, 12], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 xl:-bottom-6 -left-4 xl:-left-6 w-8 xl:w-12 h-8 xl:h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full shadow-xl flex items-center justify-center"
              >
                <FaCloudSun className="text-white text-sm xl:text-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Responsif */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <div className="relative">
            <div className="w-3 sm:w-4 h-5 sm:h-7 border-2 border-green-400 rounded-full flex justify-center">
              <motion.div 
                className="w-0.5 h-1 sm:h-1.5 bg-green-400 rounded-full mt-1"
                animate={{ height: [4, 8, 4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero