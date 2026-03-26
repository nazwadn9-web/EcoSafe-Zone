import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaApple, 
  FaWineBottle,
  FaBatteryFull, 
  FaLightbulb, 
  FaLeaf,
  FaRecycle,
  FaTrash
} from 'react-icons/fa'
import { 
  GiPlantSeed, 
  GiRecycle, 
  GiPoisonBottle,
  GiEarthAmerica
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
      color: 'from-emerald-500 to-green-600',
      lightColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      iconColor: 'text-emerald-600',
      stats: '70% sampah rumah tangga',
      gradient: 'from-emerald-50 to-green-50'
    },
    {
      icon: FaWineBottle,
      bgIcon: GiRecycle,
      title: 'Sampah Anorganik',
      description: 'Plastik, kaca, logam, kertas. Dapat didaur ulang menjadi barang baru.',
      badge: '🔄 Dapat Didaur Ulang',
      color: 'from-blue-500 to-cyan-500',
      lightColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      stats: 'Butuh 50-500 tahun terurai',
      gradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: FaBatteryFull,
      bgIcon: GiPoisonBottle,
      title: 'Sampah B3',
      description: 'Baterai, lampu, obat kadaluarsa. Butuh penanganan khusus karena berbahaya.',
      badge: '⚠️ Limbah Berbahaya',
      color: 'from-red-500 to-rose-500',
      lightColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconColor: 'text-red-600',
      stats: 'Tidak boleh dicampur',
      gradient: 'from-red-50 to-rose-50'
    },
    {
      icon: FaLightbulb,
      bgIcon: FaLeaf,
      title: 'Tips Reduce',
      description: 'Kurangi plastik, bawa tas belanja, gunakan tumbler, hindari sedotan sekali pakai.',
      badge: '✨ Gaya Hidup Zero Waste',
      color: 'from-amber-500 to-yellow-500',
      lightColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      iconColor: 'text-amber-600',
      stats: 'Mulai dari hal kecil',
      gradient: 'from-amber-50 to-yellow-50'
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section ref={ref} className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background Hero Style */}
<div className="absolute inset-0 -z-10">
  <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" />

  {/* Soft blobs */}
  <div className="absolute top-0 left-[5%] w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
  <div className="absolute bottom-10 right-[5%] w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl" />
  <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl" />

  {/* Subtle grid */}
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.03]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="grid-education" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="green"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-education)" />
  </svg>
</div>
      <div className="container-custom max-w-7xl mx-auto px-4">
        {/* Header dengan dekorasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4"
          >
            <GiEarthAmerica className="text-green-600 text-sm" />
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">Edukasi Lingkungan</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Kenali Jenis <span className="text-green-600">Sampah</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Pahami perbedaan jenis sampah untuk memilah dengan tepat dan berkontribusi pada lingkungan
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {cards.map((card, index) => {
            const Icon = card.icon
            const BgIcon = card.bgIcon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className={`relative ${card.lightColor} rounded-2xl border ${card.borderColor} 
                           overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <BgIcon className="w-full h-full text-8xl" />
                </div>
                
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative p-5 z-10">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} 
                                flex items-center justify-center shadow-md group-hover:shadow-lg transition-all`}
                    >
                      <Icon className="text-white text-xl" />
                    </motion.div>
                    
                    <span className={`text-[10px] font-medium bg-white/90 backdrop-blur-sm 
                                   px-2.5 py-1 rounded-full shadow-sm border ${card.borderColor} ${card.iconColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Stats dengan icon */}
                  <div className={`flex items-center gap-1.5 text-[10px] font-medium ${card.iconColor} bg-white/60 rounded-full px-2.5 py-1.5 w-fit`}>
                    <FaRecycle className="text-[10px]" />
                    <span>{card.stats}</span>
                  </div>

                  {/* Progress Bar (dekorasi) */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.4 }}
                      className={`h-full bg-gradient-to-r ${card.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer Info dengan animasi */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 lg:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-5 py-2.5 shadow-sm">
            <FaTrash className="text-green-600 text-xs" />
            <p className="text-xs text-gray-600">
              Dengan memilah sampah, Anda telah berkontribusi pada pengurangan <span className="font-bold text-green-600">30%</span> limbah ke TPA
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EducationCards