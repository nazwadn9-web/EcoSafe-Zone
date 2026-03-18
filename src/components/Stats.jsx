import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGlobeAsia, FaWater, FaWind, FaTree } from 'react-icons/fa'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: FaGlobeAsia, value: '8.3M', label: 'Ton Sampah Plastik', color: 'from-blue-500 to-cyan-500' },
    { icon: FaWater, value: '80%', label: 'Polusi Air', color: 'from-cyan-500 to-teal-500' },
    { icon: FaWind, value: '2.4M', label: 'Ton CO2 per Tahun', color: 'from-teal-500 to-green-500' },
    { icon: FaTree, value: '15M', label: 'Hektar Hutan Hilang', color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-transparent to-green-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Dampak Nyata</h2>
          <p className="section-subtitle">Data terkini tentang kondisi lingkungan kita</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 text-center group cursor-pointer"
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} 
                                flex items-center justify-center text-white text-3xl
                                group-hover:rotate-6 transition-transform duration-300`}>
                  <Icon />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-4xl font-bold text-gray-800 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                
                {/* Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  className="h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-4"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats