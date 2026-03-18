import React from 'react'
import { motion } from 'framer-motion'
import { FaRecycle, FaTree, FaLeaf } from 'react-icons/fa'
import { GiPlantSeed } from 'react-icons/gi'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-200/20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 font-semibold mb-6"
            >
              <span className="flex items-center gap-2">
                <FaLeaf className="text-green-600" />
                #SaveTheEarth
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight mb-6"
            >
              Peduli 
              <span className="block text-green-600">Lingkungan</span>
              untuk Masa Depan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Mari bersama-sama menjaga bumi kita dengan aksi nyata. 
              Setiap langkah kecil berarti untuk masa depan yang lebih hijau.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="btn-primary group">
                <span className="flex items-center gap-2">
                  Mulai Aksi
                  <FaRecycle className="group-hover:rotate-180 transition-transform duration-500" />
                </span>
              </button>
              <button className="btn-secondary group">
                <span className="flex items-center gap-2">
                  Pelajari Lebih
                  <FaTree className="group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {[
                { value: '450+', label: 'Tahun', sub: 'degradasi plastik' },
                { value: '17', label: 'Pohon', sub: 'terselamatkan/ton' },
                { value: '60%', label: 'Sampah', sub: 'organik' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                  <div className="font-semibold text-gray-700">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-3xl rotate-12 shadow-2xl flex items-center justify-center"
              >
                <FaRecycle className="text-white text-6xl" />
              </motion.div>

              <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-40 right-10 w-40 h-40 bg-emerald-500 rounded-full shadow-2xl flex items-center justify-center"
              >
                <FaTree className="text-white text-7xl" />
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 left-20 w-36 h-36 bg-teal-400 rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <GiPlantSeed className="text-white text-6xl" />
              </motion.div>

              {/* Main Circle */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full shadow-2xl flex items-center justify-center"
              >
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">Go Green!</div>
                  <div className="text-sm">Save Earth</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero