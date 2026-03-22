import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGlobeAsia, FaWater, FaWind, FaTree, FaExclamationTriangle } from 'react-icons/fa'

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { 
      icon: FaGlobeAsia, 
      value: '8,3 Jt', 
      label: 'Ton Sampah Plastik', 
      sub: 'masuk ke lautan setiap tahun',
      source: 'UNEP, 2023',
      color: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-50',
      bar: 85
    },
    { 
      icon: FaWater, 
      value: '80%', 
      label: 'Polusi Air Tawar', 
      sub: 'berasal dari limbah industri & rumah tangga',
      source: 'WHO, 2023',
      color: 'from-cyan-500 to-teal-500',
      bg: 'bg-cyan-50',
      bar: 80
    },
    { 
      icon: FaWind, 
      value: '2,4 Jt', 
      label: 'Ton CO₂ per Tahun', 
      sub: 'dihasilkan sektor sampah Indonesia',
      source: 'KLHK, 2022',
      color: 'from-teal-500 to-green-500',
      bg: 'bg-teal-50',
      bar: 65
    },
    { 
      icon: FaTree, 
      value: '1,47 Jt', 
      label: 'Ha Hutan Hilang', 
      sub: 'di Indonesia sepanjang 2022',
      source: 'GFW, 2023',
      color: 'from-green-500 to-emerald-500',
      bg: 'bg-green-50',
      bar: 72
    },
  ]

  return (
    <section ref={ref} className="py-10 sm:py-14 bg-gradient-to-b from-transparent to-green-50/50">
      <div className="container-custom px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-3 py-1.5 rounded-full mb-3">
            <FaExclamationTriangle className="text-red-500 text-xs" />
            <span className="text-xs font-semibold text-red-600">Data Lingkungan Terkini</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Kondisi Lingkungan <span className="text-green-600">Kita</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
            Fakta dan angka yang mendorong kami untuk terus bergerak
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all border border-gray-100 group"
              >
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.color} 
                                flex items-center justify-center text-white text-base sm:text-xl mb-3
                                group-hover:rotate-6 transition-transform duration-300 shadow-sm`}>
                  <Icon />
                </div>

                {/* Value */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-xl sm:text-2xl md:text-3xl font-black text-gray-800 leading-none mb-1"
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 leading-tight">
                  {stat.label}
                </div>

                {/* Sub */}
                <p className="text-[10px] sm:text-xs text-gray-400 leading-snug mb-3">
                  {stat.sub}
                </p>

                {/* Progress Bar */}
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden mb-1.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${stat.bar}%` } : {}}
                    transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                  />
                </div>

                {/* Source */}
                <div className="text-[9px] sm:text-[10px] text-gray-400 font-medium">
                  Sumber: {stat.source}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-[10px] sm:text-xs text-gray-400 mt-5"
        >
          * Data berdasarkan laporan resmi lembaga internasional dan nasional terpercaya
        </motion.p>
      </div>
    </section>
  )
}

export default Stats