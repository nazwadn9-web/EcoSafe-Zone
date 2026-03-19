import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaApple, 
  FaWineBottle,
  FaBatteryFull, 
  FaLightbulb, 
  FaLeaf 
} from 'react-icons/fa'
import { 
  GiPlantSeed, 
  GiRecycle, 
  GiPoisonBottle 
} from "react-icons/gi"

const EducationCards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cards = [
    {
      icon: FaApple,
      bgIcon: GiPlantSeed,
      title: 'Sampah Organik',
      description: 'Sisa makanan, daun, kulit buah. Mudah terurai dan bisa dijadikan kompos.',
      badge: '♻️ Dapat Dikompos',
      color: 'from-orange-400 to-amber-500',
      lightColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-500',
      stats: '70% sampah rumah tangga'
    },
    {
      icon: FaWineBottle,  // ← FaBottleWater diganti FaWineBottle
      bgIcon: GiRecycle,
      title: 'Sampah Anorganik',
      description: 'Plastik, kaca, logam, kertas. Dapat didaur ulang menjadi barang baru.',
      badge: '🔄 Dapat Didaur Ulang',
      color: 'from-blue-400 to-cyan-500',
      lightColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-500',
      stats: 'Butuh 50-500 tahun terurai'
    },
    {
      icon: FaBatteryFull,
      bgIcon: GiPoisonBottle,
      title: 'Sampah B3',
      description: 'Baterai, lampu, obat kadaluarsa. Butuh penanganan khusus karena berbahaya.',
      badge: '⚠️ Limbah Berbahaya',
      color: 'from-red-400 to-rose-500',
      lightColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconColor: 'text-red-500',
      stats: 'Tidak boleh dicampur'
    },
    {
      icon: FaLightbulb,
      bgIcon: FaLeaf,
      title: 'Tips Reduce',
      description: 'Kurangi plastik, bawa tas belanja, gunakan tumbler, hindari sedotan sekali pakai.',
      badge: '✨ Gaya Hidup Zero Waste',
      color: 'from-yellow-400 to-amber-500',
      lightColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-500',
      stats: 'Mulai dari hal kecil'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section ref={ref} className="py-12 bg-gradient-to-b from-white to-green-50/30">
      <div className="container-custom max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            Kenali Jenis <span className="text-green-600">Sampah</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Pahami perbedaan jenis sampah untuk memilah dengan tepat dan berkontribusi pada lingkungan
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {cards.map((card, index) => {
            const Icon = card.icon
            const BgIcon = card.bgIcon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className={`relative ${card.lightColor} rounded-xl border ${card.borderColor} 
                           overflow-hidden group cursor-pointer`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <BgIcon className="w-full h-full text-8xl" />
                </div>
                
                {/* Content */}
                <div className="relative p-4">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} 
                                flex items-center justify-center shadow-sm`}
                    >
                      <Icon className="text-white text-lg" />
                    </motion.div>
                    
                    <span className="text-[10px] font-medium bg-white/80 backdrop-blur-sm 
                                   px-2 py-1 rounded-full shadow-sm">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-sm font-bold text-gray-800 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-white/50 rounded-full px-2 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {card.stats}
                  </div>

                  {/* Progress Bar (dekorasi) */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                      className={`h-full bg-gradient-to-r ${card.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-gray-400">
            Dengan memilah sampah, Anda telah berkontribusi pada pengurangan 30% limbah ke TPA
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EducationCards