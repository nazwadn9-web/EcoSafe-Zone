import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaHands, FaHeart, FaTree } from 'react-icons/fa'

const Tentang = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="text-5xl font-bold text-gray-800 mb-4"
          >
            Tentang <span className="text-green-600">EcoCare</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bergerak bersama untuk menyelamatkan bumi melalui edukasi dan aksi nyata
          </p>
        </div>

        {/* Vision Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="card p-8"
          >
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
              <FaTree className="text-3xl text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Visi Kami</h2>
            <p className="text-gray-600">
              Menciptakan Indonesia yang bersih, hijau, dan berkelanjutan melalui 
              kesadaran kolektif dalam pengelolaan sampah dan pelestarian lingkungan.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="card p-8"
          >
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
              <FaHands className="text-3xl text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Misi Kami</h2>
            <p className="text-gray-600">
              Mengedukasi masyarakat tentang pentingnya memilah sampah, 
              memfasilitasi program daur ulang, dan mengadvokasi kebijakan lingkungan.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FaLeaf, title: 'Edukasi', desc: 'Memberikan pemahaman yang benar tentang lingkungan' },
              { icon: FaHeart, title: 'Kepedulian', desc: 'Membangun rasa cinta terhadap alam' },
              { icon: FaHands, title: 'Kolaborasi', desc: 'Bekerja sama dengan berbagai pihak' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <item.icon className="text-4xl text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Tentang