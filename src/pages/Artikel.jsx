import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'

const Artikel = () => {
  const articles = [
    {
      title: 'Cara Mudah Memilah Sampah Rumah Tangga',
      excerpt: 'Panduan praktis memilah sampah organik, anorganik, dan B3 di rumah.',
      author: 'Tim EcoCare',
      date: '15 Mar 2024',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b',
      category: 'Edukasi',
    },
    {
      title: 'Manfaat Kompos untuk Tanaman',
      excerpt: 'Bagaimana kompos dari sisa dapur bisa menyuburkan tanaman Anda.',
      author: 'Dr. Green',
      date: '10 Mar 2024',
      image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e',
      category: 'Tips',
    },
    {
      title: 'Bahaya Sampah B3 dan Cara Menanganinya',
      excerpt: 'Kenali jenis sampah berbahaya dan cara pembuangan yang benar.',
      author: 'Eco Expert',
      date: '5 Mar 2024',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778bdf',
      category: 'Edukasi',
    },
    {
      title: 'Zero Waste Lifestyle untuk Pemula',
      excerpt: 'Langkah awal menjalani gaya hidup tanpa sampah.',
      author: 'Green Living',
      date: '28 Feb 2024',
      image: 'https://images.unsplash.com/photo-1545161296-3c0c1ebfccb8',
      category: 'Gaya Hidup',
    },
    {
      title: 'Daur Ulang Plastik jadi Barang Bernilai',
      excerpt: 'Kreativitas mengubah sampah plastik menjadi produk ekonomis.',
      author: 'Recycle Team',
      date: '20 Feb 2024',
      image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40',
      category: 'Kreatif',
    },
    {
      title: 'Hutan Kota dan Manfaatnya',
      excerpt: 'Pentingnya ruang terbuka hijau di tengah perkotaan.',
      author: 'Forest Keeper',
      date: '15 Feb 2024',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      category: 'Lingkungan',
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
            Artikel & <span className="text-green-600">Berita</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informasi terkini seputar lingkungan dan gaya hidup berkelanjutan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <FaUser /> {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendar /> {article.date}
                  </span>
                </div>
                
                <button className="text-green-600 font-semibold flex items-center gap-2 group/btn">
                  Baca Selengkapnya
                  <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Muat Artikel Lainnya
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default Artikel