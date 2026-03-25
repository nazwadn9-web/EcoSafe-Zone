import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaGamepad,  FaTrash,  FaBrain,  FaRecycle, 
  FaStar,  FaClock,  FaTrophy,  FaArrowLeft,
  FaLeaf, FaUsers
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
      className="min-h-screen pt-20 sm:pt-24 pb-8 sm:pb-16 px-4"
    >
      <div className="container-custom max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 
                     rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl"
          >
            <FaGamepad className="text-2xl sm:text-4xl text-white" />
          </motion.div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">
            Game <span className="text-green-600">Edukasi</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Belajar sambil bermain dengan game-game interaktif tentang lingkungan dan daur ulang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {games.map((game, index) => {
            const Icon = game.icon
            const isComingSoon = game.comingSoon

            return (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative h-full"
              >

                {isComingSoon && (
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white 
                                  px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-lg
                                  animate-pulse">
                      🚧 Coming Soon
                    </div>
                  </div>
                )}

                <Link to={game.path} className="block h-full">
                  <div className={`bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl 
                                  overflow-hidden transition-all duration-300 h-full
                                  ${isComingSoon ? 'opacity-75' : ''}`}>

                    <div className={`h-32 sm:h-36 md:h-40 lg:h-48 bg-gradient-to-br ${game.color} p-3 sm:p-4 md:p-5 lg:p-6 relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute -right-10 -top-10 w-20 sm:w-40 h-20 sm:h-40 bg-white rounded-full"></div>
                        <div className="absolute -left-10 -bottom-10 w-20 sm:w-40 h-20 sm:h-40 bg-white rounded-full"></div>
                      </div>

                      <div className="relative z-10">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 
                                      bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl 
                                      flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 border border-white/50">
                          <Icon className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white" />
                        </div>

                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-white mb-1">
                          {game.title}
                        </h2>

                        <div className="flex items-center gap-2 text-white/90 text-[10px] sm:text-xs">
                          <span className="flex items-center gap-0.5">
                            <FaStar className="text-yellow-300 text-[10px] sm:text-xs" /> 
                            {game.stats.rating > 0 ? game.stats.rating : '-'}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-0.5">
                            <FaTrophy className="text-[10px] sm:text-xs" /> {game.stats.playCount}
                          </span>
                          <span>•</span>
                          <span>{game.difficulty}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 md:p-5">
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
                        {game.description}
                      </p>

                      {/* Categories */}
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                        {game.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-0.5 sm:px-3 sm:py-1 ${game.bgColor} ${game.textColor} 
                                       rounded-full text-[10px] sm:text-xs font-medium`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="space-y-1 sm:space-y-1.5 mb-3">
                        {game.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-600">
                            <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${game.textColor}`}></div>
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Game Info */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
                          <FaClock className="text-[10px] sm:text-xs" />
                          <span>{game.time}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-500">
                          <FaUsers className="text-[10px] sm:text-xs" />
                          <span>{game.players}</span>
                        </div>
                      </div>

                      {/* Play Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full mt-3 sm:mt-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl 
                                  font-semibold text-xs sm:text-sm text-white
                                  bg-gradient-to-r ${game.color} shadow-md
                                  hover:shadow-lg transition-all
                                  ${isComingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isComingSoon}
                      >
                        {isComingSoon ? 'Segera Hadir' : 'Mainkan'}
                      </motion.button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 sm:mt-12 md:mt-16 bg-gradient-to-r from-green-100 to-emerald-100 
                     rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
            🎮 Kenapa Harus Main Game Ini?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <FaBrain className="text-white text-sm sm:text-base" />
              </div>
              <h4 className="font-bold text-sm sm:text-base text-gray-800 mb-1">Melatih Otak</h4>
              <p className="text-xs sm:text-sm text-gray-600">Asah pengetahuan tentang jenis sampah</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <GiRecycle className="text-white text-sm sm:text-base" />
              </div>
              <h4 className="font-bold text-sm sm:text-base text-gray-800 mb-1">Edukatif</h4>
              <p className="text-xs sm:text-sm text-gray-600">Belajar sambil bermain</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <FaTrophy className="text-white text-sm sm:text-base" />
              </div>
              <h4 className="font-bold text-sm sm:text-base text-gray-800 mb-1">Menantang</h4>
              <p className="text-xs sm:text-sm text-gray-600">Kumpulkan poin tertinggi</p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default Games