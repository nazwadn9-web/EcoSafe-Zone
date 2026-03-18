import React from 'react'
import { motion } from 'framer-motion'
import { FaSchool, FaTruck, FaUsers, FaHandsHelping, FaChalkboardTeacher, FaSeedling } from 'react-icons/fa'

const Layanan = () => {
  const services = [
    {
      icon: FaSchool,
      title: 'Edukasi Sekolah',
      description: 'Program kunjungan ke sekolah-sekolah untuk mengedukasi siswa tentang pentingnya peduli lingkungan.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaTruck,
      title: 'Bank Sampah',
      description: 'Fasilitas pengumpulan sampah anorganik yang bisa ditukar dengan poin atau uang.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaUsers,
      title: 'Komunitas Hijau',
      description: 'Bergabung dengan komunitas pecinta lingkungan untuk aksi bersama.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: FaHandsHelping,
      title: 'Pelatihan Daur Ulang',
      description: 'Workshop mengolah sampah menjadi produk bernilai ekonomi.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Konsultasi Lingkungan',
      description: 'Layanan konsultasi untuk perusahaan atau individu tentang pengelolaan limbah.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: FaSeedling,
      title: 'Penghijauan',
      description: 'Program penanaman pohon di area kritis dan lahan kosong.',
      color: 'from-teal-500 to-green-500',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Layanan <span className="text-green-600">Kami</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai program dan layanan untuk mendukung gaya hidup ramah lingkungan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 group cursor-pointer"
              >
                <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br ${service.color} 
                                flex items-center justify-center text-white text-2xl
                                group-hover:rotate-6 transition-transform`}>
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 text-green-600 font-semibold flex items-center gap-2"
                >
                  Selengkapnya →
                </motion.button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Layanan