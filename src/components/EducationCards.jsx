import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaApple, FaBottleWater, FaBatteryFull, FaLightbulb } from 'react-icons/fa6'
import { GiPlantSeed, GiRecycle, GiPoisonBottle, GiSkullCrossedBones } from "react-icons/gi";

const EducationCards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cards = [
    {
      icon: FaApple,
      bgIcon:  GiPlantSeed,
      title: 'Sampah Organik',
      description: 'Sisa makanan, daun, kulit buah. Cepat terurai dan bisa dijadikan kompos.',
      badge: '♻️ Kompos',
      color: 'from-orange-400 to-red-400',
      bgColor: 'bg-orange-50',
    },
    {
      icon: FaBottleWater,
      bgIcon: GiRecycle,
      title: 'Sampah Anorganik',
      description: 'Plastik, kaca, logam, kertas. Dapat didaur ulang menjadi barang baru.',
      badge: '🔄 Recycle',
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-blue-50',
    },
    {
      icon: FaBatteryFull,
      bgIcon: GiPoisonBottle,
      title: 'Sampah B3',
      description: 'Baterai, lampu, obat kadaluarsa. Butuh penanganan khusus!',
      badge: '⚠️ Berbahaya',
      color: 'from-red-400 to-pink-400',
      bgColor: 'bg-red-50',
    },
    {
      icon: FaLightbulb,
      bgIcon: FaLightbulb,
      title: 'Tips Reduce',
      description: 'Kurangi plastik, bawa tas belanja, gunakan tumbler, hindari sedotan.',
      badge: '✨ Zero Waste',
      color: 'from-yellow-400 to-amber-400',
      bgColor: 'bg-yellow-50',
    },
  ]

  return (
    <section ref={ref} className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="section-title">Pengetahuan Sampah</h2>
          <p className="section-subtitle">Kenali jenis sampah untuk pilah yang tepat</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon
            const BgIcon = card.bgIcon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`card relative overflow-hidden group ${card.bgColor}`}
              >
                {/* Background Icon */}
                <BgIcon className="absolute -right-5 -bottom-5 text-8xl text-gray-200/50 group-hover:scale-110 transition-transform duration-500" />
                
                {/* Content */}
                <div className="relative z-10 p-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${card.color} 
                                flex items-center justify-center text-white text-2xl
                                group-hover:shadow-xl transition-all duration-300`}
                  >
                    <Icon />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="inline-block px-3 py-1 bg-white rounded-full text-sm font-semibold shadow-sm"
                  >
                    {card.badge}
                  </motion.div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-2xl"
                  whileHover={{ borderColor: card.color.split(' ')[1] }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EducationCards