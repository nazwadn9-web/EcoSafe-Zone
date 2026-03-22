import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaSchool, FaTruck, FaUsers, FaHandsHelping, 
  FaChalkboardTeacher, FaSeedling, FaArrowRight,
  FaMapMarkedAlt
} from 'react-icons/fa'

const Layanan = () => {
  const services = [
    {
      icon: FaSchool,
      title: 'Edukasi Sekolah',
      description: 'Program kunjungan ke sekolah untuk mengedukasi siswa tentang pentingnya peduli lingkungan.',
      color: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      path: '/layanan/edukasi',
    },
    {
      icon: FaTruck,
      title: 'Bank Sampah',
      description: 'Fasilitas pengumpulan sampah anorganik yang bisa ditukar dengan poin atau uang tunai.',
      color: 'from-green-500 to-emerald-500',
      bg: 'bg-green-50',
      border: 'border-green-100',
      path: '/layanan/bank-sampah',
    },
    {
      icon: FaUsers,
      title: 'Komunitas Hijau',
      description: 'Bergabung dengan komunitas pecinta lingkungan untuk aksi nyata bersama.',
      color: 'from-yellow-500 to-orange-500',
      bg: 'bg-yellow-50',
      border: 'border-yellow-100',
      path: '/layanan/komunitas',
    },
    {
      icon: FaHandsHelping,
      title: 'Pelatihan Daur Ulang',
      description: 'Workshop mengolah sampah menjadi produk bernilai ekonomi tinggi.',
      color: 'from-purple-500 to-pink-500',
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      path: '/layanan/pelatihan',
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Konsultasi Lingkungan',
      description: 'Layanan konsultasi pengelolaan limbah untuk perusahaan maupun individu.',
      color: 'from-red-500 to-pink-500',
      bg: 'bg-red-50',
      border: 'border-red-100',
      path: '/layanan/konsultasi',
    },
    {
      icon: FaSeedling,
      title: 'Penghijauan',
      description: 'Program penanaman pohon di area kritis dan lahan kosong bersama komunitas.',
      color: 'from-teal-500 to-green-500',
      bg: 'bg-teal-50',
      border: 'border-teal-100',
      path: '/layanan/penghijauan',
    },
    {
      icon: FaMapMarkedAlt,
      title: 'Layanan Daerah',
      description: 'Temukan cabang dan layanan EcoCare di kota Anda di seluruh Indonesia.',
      color: 'from-indigo-500 to-blue-500',
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
      path: '/layanan/daerah',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-4 sm:pt-6 pb-12"
    >
      <div className="container-custom max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-7 sm:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full mb-3 tracking-wider uppercase"
          >
            Apa yang Kami Tawarkan
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2"
          >
            Layanan <span className="text-green-600">Kami</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl mx-auto"
          >
            Berbagai program dan layanan untuk mendukung gaya hidup ramah lingkungan
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className={`group relative bg-white rounded-2xl p-4 sm:p-5 border ${service.border}
                           shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden`}
              >
                {/* Hover bg accent */}
                <div className={`absolute inset-0 ${service.bg} opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 mb-3 rounded-xl bg-gradient-to-br ${service.color} 
                                  flex items-center justify-center text-white text-lg sm:text-xl shadow-sm
                                  group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon />
                  </div>

                  {/* Text */}
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3">{service.description}</p>

                  {/* Link */}
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-green-600 hover:text-green-700 transition-colors group/link"
                  >
                    Selengkapnya
                    <FaArrowRight className="text-[10px] sm:text-xs group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-5 sm:p-7 text-white text-center"
        >
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
            Butuh Layanan Khusus?
          </h2>
          <p className="text-xs sm:text-sm text-white/80 mb-4 max-w-md mx-auto">
            Kami siap membantu Anda merancang program lingkungan yang sesuai kebutuhan
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link to="/layanan/form-pengajuan">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-green-700 px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow hover:shadow-md transition-all"
              >
                Ajukan Program
              </motion.button>
            </Link>
            <Link to="/tentang">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-white text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold hover:bg-white/10 transition-all"
              >
                Hubungi Kami
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Layanan