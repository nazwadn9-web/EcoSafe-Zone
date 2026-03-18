import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaGamepad, 
  FaTrash, 
  FaBrain, 
  FaRecycle, 
  FaStar, 
  FaClock, 
  FaTrophy, 
  FaArrowLeft,
  FaLeaf
} from 'react-icons/fa'

import { 
  GiRecycle, 
  GiSkullCrossedBones,
  GiPlantRoots
} from 'react-icons/gi'

const Games = () => {
  const games = [
    {
      id: 1,
      title: 'Pilah Sampah',
      description: 'Seru dan edukatif! Seret sampah ke tong yang sesuai. Pelajari cara memilah sampah organik, anorganik, dan B3 dengan benar.',
      icon: FaTrash,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      path: '/games/pilah-sampah',
      difficulty: 'Mudah',
      time: '5-10 menit',
      players: '1 pemain',
      features: [
        '6 jenis sampah berbeda',
        'Sistem poin +10 / +20',
        'Animasi drag & drop',
        'Timer 60 detik'
      ],
      categories: ['Organik', 'Anorganik', 'B3'],
      stats: {
        playCount: '1.2k',
        rating: 4.8,
        level: 'Pemula'
      }
    },
    {
      id: 2,
      title: 'Tebak Sampah',
      description: 'Uji pengetahuanmu! Tebak jenis sampah dari gambar yang ditampilkan. Cocok untuk belajar sambil bermain.',
      icon: FaBrain,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      path: '/games/tebak-sampah',
      difficulty: 'Sedang',
      time: '3-5 menit',
      players: '1 pemain',
      features: [
        '7 pertanyaan menarik',
        'Penjelasan setiap jawaban',
        'Tingkat kesulitan berbeda',
        'Skor akhir & statistik'
      ],
      categories: ['Kuis', 'Edukasi', 'Interaktif'],
      stats: {
        playCount: '856',
        rating: 4.9,
        level: 'Semua Umur'
      }
    },
    {
      id: 3,
      title: 'Daur Ulang',
      description: 'Kreasikan sampah menjadi barang bernilai! Game kreatif tentang daur ulang (Coming Soon)',
      icon: FaRecycle,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      path: '/games/daur-ulang',
      difficulty: 'Sulit',
      time: 'Segera',
      players: 'Coming Soon',
      features: [
        'Segera hadir',
        'Game kreatif',
        'Belajar mendaur ulang',
        'Buat kerajinan'
      ],
      categories: ['Kreatif', 'Daur Ulang', 'DIY'],
      stats: {
        playCount: '0',
        rating: 0,
        level: 'Coming Soon'
      },
      comingSoon: true
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl 
                     flex items-center justify-center mx-auto mb-6 shadow-xl"
          >
            <FaGamepad className="text-4xl text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Game <span className="text-green-600">Edukasi</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Belajar sambil bermain dengan game-game interaktif tentang lingkungan dan daur ulang
          </p>
        </div>

        {/* Game Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => {
            const Icon = game.icon
            const isComingSoon = game.comingSoon

            return (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {/* Coming Soon Badge */}
                {isComingSoon && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white 
                                  px-4 py-1 rounded-full text-sm font-bold shadow-lg
                                  animate-pulse">
                      🚧 Coming Soon
                    </div>
                  </div>
                )}

                {/* Card */}
                <Link to={game.path}>
                  <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden 
                                  hover:shadow-3xl transition-all duration-300
                                  ${isComingSoon ? 'opacity-75' : ''}`}>
                    
                    {/* Card Header with Gradient */}
                    <div className={`h-48 bg-gradient-to-br ${game.color} p-6 relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white rounded-full"></div>
                        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Icon */}
                      <div className="relative z-10">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl 
                                      flex items-center justify-center mb-4 border-2 border-white/50">
                          <Icon className="text-4xl text-white" />
                        </div>
                        
                        {/* Title */}
                        <h2 className="text-3xl font-bold text-white mb-2">{game.title}</h2>
                        
                        {/* Quick Stats */}
                        <div className="flex items-center gap-3 text-white/90 text-sm">
                          <span className="flex items-center gap-1">
                            <FaStar className="text-yellow-300" /> 
                            {game.stats.rating > 0 ? game.stats.rating : '-'}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <FaTrophy /> {game.stats.playCount}
                          </span>
                          <span>•</span>
                          <span>{game.difficulty}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      {/* Description */}
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {game.description}
                      </p>

                      {/* Categories */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {game.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 ${game.bgColor} ${game.textColor} 
                                       rounded-full text-xs font-semibold`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {game.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className={`w-1.5 h-1.5 rounded-full ${game.textColor}`}></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Game Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FaClock />
                          <span>{game.time}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {game.players}
                        </div>
                      </div>

                      {/* Play Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full mt-4 py-3 rounded-xl font-bold text-white
                                  bg-gradient-to-r ${game.color} shadow-lg
                                  hover:shadow-xl transition-all
                                  ${isComingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isComingSoon}
                      >
                        {isComingSoon ? 'Segera Hadir' : 'Mainkan Sekarang'}
                      </motion.button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            🎮 Kenapa Harus Main Game Ini?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaBrain className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Melatih Otak</h4>
              <p className="text-sm text-gray-600">Asah pengetahuan tentang jenis sampah</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <GiRecycle className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Edukatif</h4>
              <p className="text-sm text-gray-600">Belajar sambil bermain</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaTrophy className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Menantang</h4>
              <p className="text-sm text-gray-600">Kumpulkan poin tertinggi</p>
            </div>
          </div>
        </motion.div>

        {/* Category Filter (Optional) */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {['Semua Game', 'Pilah Sampah', 'Tebak Sampah', 'Daur Ulang'].map((filter, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
                        ${idx === 0 
                          ? 'bg-green-600 text-white shadow-lg' 
                          : 'bg-white text-gray-600 hover:bg-green-50'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Games