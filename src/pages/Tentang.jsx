import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaLeaf, 
  FaHands, 
  FaHeart, 
  FaTree, 
  FaRecycle, 
  FaGlobeAsia,
  FaUsers // ✅ tambahkan ini
} from 'react-icons/fa'

const Tentang = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container-custom">
        {/* Header - Seperti di screenshot dengan FORMULIR */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-[40px] border-4 border-green-700 shadow-[0_15px_0_#1b5438,0_20px_25px_-5px_#0a3b24] overflow-hidden">
            {/* Header dengan background hijau */}
            <div className="bg-gradient-to-r from-green-700 to-green-600 py-8 px-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center tracking-wider">
                TENTANG KAMI
              </h1>
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-10">
              {/* Subtitle dengan ikon */}
              <div className="bg-green-50 border-2 border-green-200 rounded-[30px] p-6 mb-8">
                <p className="text-xl md:text-2xl font-bold text-green-800 text-center leading-relaxed">
                  <FaLeaf className="inline-block text-green-600 mr-2" />
                  Bergerak bersama untuk menyelamatkan bumi melalui edukasi dan aksi nyata
                  <FaLeaf className="inline-block text-green-600 ml-2" />
                </p>
              </div>

              {/* Quote Inspiratif */}
              <div className="text-center mb-10">
                <p className="text-lg md:text-xl text-gray-700 italic font-medium border-l-4 border-green-600 pl-4 py-2">
                  "Mari Bersama Kita Jaga Lingkungan, karena Alam yang Sehat 
                  adalah Warisan Berharga bagi Anak Cucu Kita."
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaLeaf key={i} className="text-green-500 text-xl" />
                  ))}
                </div>
              </div>

              {/* Tombol Klik */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.scrollTo({ top: document.getElementById('visi-misi').offsetTop - 100, behavior: 'smooth' })}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white 
                           px-12 py-4 rounded-full font-extrabold text-xl md:text-2xl
                           shadow-[0_10px_0_#14532d] hover:shadow-[0_6px_0_#14532d]
                           transform hover:translate-y-1 transition-all
                           border-2 border-green-400 flex items-center gap-3 mx-auto"
                >
                  <FaHands className="text-yellow-300" />
                  [PELAJARI LEBIH LANJUT]
                  <FaHands className="text-yellow-300" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Mission - dengan id untuk scroll */}
        <div id="visi-misi" className="grid md:grid-cols-2 gap-8 mb-16 scroll-mt-24">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="card p-8 hover:shadow-2xl transition-shadow"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
              <FaTree className="text-4xl text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">Visi Kami</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Menciptakan Indonesia yang bersih, hijau, dan berkelanjutan melalui 
              kesadaran kolektif dalam pengelolaan sampah dan pelestarian lingkungan 
              untuk generasi masa depan.
            </p>
            <div className="mt-6 h-1 w-20 bg-green-500 rounded-full mx-auto md:mx-0"></div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="card p-8 hover:shadow-2xl transition-shadow"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
              <FaHands className="text-4xl text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">Misi Kami</h2>
            <ul className="space-y-3 text-gray-600 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold text-xl">•</span>
                <span>Mengedukasi masyarakat tentang pentingnya memilah sampah</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold text-xl">•</span>
                <span>Memfasilitasi program daur ulang di berbagai komunitas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold text-xl">•</span>
                <span>Mengadvokasi kebijakan lingkungan yang berkelanjutan</span>
              </li>
            </ul>
            <div className="mt-6 h-1 w-20 bg-green-500 rounded-full mx-auto md:mx-0"></div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: FaRecycle, number: '10.000+', label: 'Ton Sampah Terolah' },
            { icon: FaUsers, number: '5.000+', label: 'Relawan Aktif' },
            { icon: FaTree, number: '50.000+', label: 'Pohon Ditanam' },
            { icon: FaGlobeAsia, number: '25+', label: 'Kota Terjangkau' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <stat.icon className="text-4xl text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Nilai-Nilai <span className="text-green-600">Kami</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Prinsip yang menjadi fondasi setiap langkah kami
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: FaLeaf, 
                title: 'Edukasi', 
                desc: 'Memberikan pemahaman yang benar tentang lingkungan melalui program edukasi berkelanjutan',
                color: 'from-green-400 to-green-600'
              },
              { 
                icon: FaHeart, 
                title: 'Kepedulian', 
                desc: 'Membangun rasa cinta dan kepedulian terhadap alam sekitar',
                color: 'from-red-400 to-pink-500'
              },
              { 
                icon: FaHands, 
                title: 'Kolaborasi', 
                desc: 'Bekerja sama dengan berbagai pihak untuk dampak yang lebih besar',
                color: 'from-blue-400 to-blue-600'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="card p-8 hover:shadow-2xl transition-all group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} 
                                flex items-center justify-center text-white text-4xl
                                group-hover:rotate-6 transition-transform`}>
                  <item.icon />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <div className="mt-6 w-12 h-1 bg-green-500 rounded-full mx-auto group-hover:w-20 transition-all"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Bergabunglah Bersama Kami
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Mari jadi bagian dari perubahan untuk lingkungan yang lebih baik
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg
                     shadow-lg hover:bg-green-700 transition-colors"
          >
            Mulai Berkontribusi
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Tentang