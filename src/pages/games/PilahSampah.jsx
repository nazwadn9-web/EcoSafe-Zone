import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaApple, FaBatteryFull, FaRecycle, FaLeaf, 
  FaNewspaper, FaLightbulb, FaClock, FaTrophy, 
  FaRedo, FaArrowLeft, FaStar
} from 'react-icons/fa'
import { 
  GiSkullCrossedBones, 
  GiGlassCelebration, 
  GiPlantSeed,
  GiWineBottle
} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const PilahSampah = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Apel Busuk', category: 'organik', icon: FaApple, color: 'text-orange-500', difficulty: 'mudah' },
    { id: 2, name: 'Botol Plastik', category: 'anorganik', icon: GiWineBottle, color: 'text-blue-500', difficulty: 'mudah' },
    { id: 3, name: 'Baterai', category: 'b3', icon: FaBatteryFull, color: 'text-red-500', difficulty: 'sulit' },
    { id: 4, name: 'Koran Bekas', category: 'anorganik', icon: FaNewspaper, color: 'text-yellow-600', difficulty: 'mudah' },
    { id: 5, name: 'Daun Kering', category: 'organik', icon: FaLeaf, color: 'text-green-500', difficulty: 'mudah' },
    { id: 6, name: 'Lampu Neon', category: 'b3', icon: FaLightbulb, color: 'text-yellow-500', difficulty: 'sulit' },
  ])

  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('👆 Tap sampah, lalu tap tong yang sesuai!')
  const [selectedItem, setSelectedItem] = useState(null)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [showCelebration, setShowCelebration] = useState(false)

  const bins = [
    { 
      category: 'organik', 
      name: 'Organik', 
      icon: GiPlantSeed, 
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-500'
    },
    { 
      category: 'anorganik', 
      name: 'Anorganik', 
      icon: FaRecycle, 
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-500'
    },
    { 
      category: 'b3', 
      name: 'B3', 
      icon: GiSkullCrossedBones, 
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-500'
    },
  ]

  // Timer effect
  useEffect(() => {
    if (gameCompleted || items.length === 0) return
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          setGameCompleted(true)
          setMessage('⏰ Waktu habis!')
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [gameCompleted, items.length])

  // Effect untuk menampilkan celebration saat game selesai
  useEffect(() => {
    if (items.length === 0 && !gameCompleted) {
      setGameCompleted(true)
      setShowCelebration(true)
      setMessage('🎉 Selamat! Kamu berhasil memilah semua sampah!')
      
      // Sembunyikan celebration setelah 3 detik
      setTimeout(() => setShowCelebration(false), 3000)
    }
  }, [items.length, gameCompleted])

  const handleItemClick = (item) => {
    if (gameCompleted) return
    setSelectedItem(item)
    setMessage(`📍 ${item.name} dipilih. Tap tong yang sesuai!`)
    
    const element = document.getElementById(`item-${item.id}`)
    if (element) {
      element.classList.add('animate-pulse')
      setTimeout(() => element.classList.remove('animate-pulse'), 500)
    }
  }

  const handleBinClick = (binCategory) => {
    if (gameCompleted) {
      if (items.length === 0) {
        setMessage('🎉 Game selesai! Tekan Reset untuk main lagi')
      } else {
        setMessage('⏰ Game selesai! Tekan Reset untuk main lagi')
      }
      return
    }
    
    if (!selectedItem) {
      setMessage('👆 Tap sampah dulu ya!')
      return
    }

    if (selectedItem.category === binCategory) {
      setItems(prev => prev.filter(item => item.id !== selectedItem.id))
      setScore(prev => prev + (selectedItem.difficulty === 'sulit' ? 20 : 10))
      setMessage(`✅ Benar! +${selectedItem.difficulty === 'sulit' ? '20' : '10'}`)
      setSelectedItem(null)
    } else {
      setMessage(`❌ Salah! ${selectedItem.name} bukan ${binCategory}`)
      setScore(prev => Math.max(0, prev - 5))
      
      const element = document.getElementById(`item-${selectedItem.id}`)
      if (element) {
        element.classList.add('animate-wiggle')
        setTimeout(() => element.classList.remove('animate-wiggle'), 500)
      }
      
      const binElement = document.getElementById(`bin-${binCategory}`)
      if (binElement) {
        binElement.classList.add('animate-shake')
        setTimeout(() => binElement.classList.remove('animate-shake'), 500)
      }
    }
    
    setSelectedItem(null)
  }

  const resetGame = () => {
    setItems([
      { id: 1, name: 'Apel Busuk', category: 'organik', icon: FaApple, color: 'text-orange-500', difficulty: 'mudah' },
      { id: 2, name: 'Botol Plastik', category: 'anorganik', icon: GiWineBottle, color: 'text-blue-500', difficulty: 'mudah' },
      { id: 3, name: 'Baterai', category: 'b3', icon: FaBatteryFull, color: 'text-red-500', difficulty: 'sulit' },
      { id: 4, name: 'Koran Bekas', category: 'anorganik', icon: FaNewspaper, color: 'text-yellow-600', difficulty: 'mudah' },
      { id: 5, name: 'Daun Kering', category: 'organik', icon: FaLeaf, color: 'text-green-500', difficulty: 'mudah' },
      { id: 6, name: 'Lampu Neon', category: 'b3', icon: FaLightbulb, color: 'text-yellow-500', difficulty: 'sulit' },
    ])
    setScore(0)
    setMessage('✨ Game direset! Tap sampah, lalu tap tong yang sesuai!')
    setGameCompleted(false)
    setTimeLeft(60)
    setSelectedItem(null)
    setShowCelebration(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 sm:pt-20 pb-6 sm:pb-10 px-3 sm:px-4 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="container-custom max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-5">
          <Link to="/games" className="flex items-center gap-1 text-green-600 hover:text-green-700 text-xs sm:text-sm">
            <FaArrowLeft className="text-xs" /> 
            <span>Kembali</span>
          </Link>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="bg-yellow-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 flex-1 sm:flex-none justify-center">
              <FaTrophy className="text-yellow-600 text-sm sm:text-base" />
              <span className="font-bold text-yellow-700 text-sm sm:text-base">{score}</span>
            </div>
            <div className="bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 flex-1 sm:flex-none justify-center">
              <FaClock className="text-blue-600 text-sm sm:text-base" />
              <span className="font-bold text-blue-700 text-sm sm:text-base">{timeLeft}s</span>
            </div>
          </div>
        </div>

        {/* Game Title */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Game <span className="text-green-600">Pilah Sampah</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto mt-1">
            Tap sampah, lalu tap tong yang sesuai!
          </p>
        </div>

        {/* Celebration Modal */}
        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center shadow-2xl border border-green-200 max-w-[280px] sm:max-w-sm mx-4">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl sm:text-6xl mb-3"
                >
                  🎉
                </motion.div>
                <h2 className="text-lg sm:text-xl font-bold text-green-600 mb-2">Selamat!</h2>
                <p className="text-sm sm:text-base text-gray-700">Kamu berhasil memilah semua sampah!</p>
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(3)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Game Area */}
        <div className="max-w-4xl mx-auto">
          {/* Items to sort */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-5 border border-green-200 shadow-sm">
            <h3 className="text-xs sm:text-sm font-bold text-gray-700 mb-2 sm:mb-3">
              Sampah yang harus dipilah:
              {items.length === 0 && (
                <span className="ml-2 text-green-600"> ✓ Selesai!</span>
              )}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 min-h-[80px] sm:min-h-[100px]">
              <AnimatePresence>
                {items.map((item) => {
                  const Icon = item.icon
                  const isSelected = selectedItem?.id === item.id
                  return (
                    <motion.div
                      key={item.id}
                      id={`item-${item.id}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleItemClick(item)}
                      className={`cursor-pointer transition-all ${gameCompleted ? 'opacity-50 cursor-not-allowed' : ''} ${isSelected ? 'ring-2 ring-green-500 ring-offset-2 rounded-full' : ''}`}
                    >
                      <div className={`bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-sm border ${isSelected ? 'border-green-500 bg-green-50' : 'border-gray-200'} flex items-center gap-1.5 sm:gap-2`}>
                        <Icon className={`text-sm sm:text-base ${item.color}`} />
                        <span className="font-medium text-gray-700 text-xs sm:text-sm">{item.name}</span>
                        {item.difficulty === 'sulit' && (
                          <span className="text-[8px] sm:text-[10px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full">+20</span>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
              {items.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-4 sm:py-6"
                >
                  <GiGlassCelebration className="text-3xl sm:text-4xl text-green-500 mx-auto mb-2" />
                  <p className="text-sm sm:text-base text-green-600 font-bold">Semua sampah sudah terpilah!</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Bins */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
            {bins.map((bin) => {
              const Icon = bin.icon
              return (
                <motion.div
                  key={bin.category}
                  id={`bin-${bin.category}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleBinClick(bin.category)}
                  className={`bg-gradient-to-br ${bin.color} rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white text-center
                            shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer
                            border-2 border-white/30 min-h-[90px] sm:min-h-[110px] flex flex-col items-center justify-between
                            ${selectedItem ? 'hover:scale-105' : ''}`}
                >
                  <Icon className="text-2xl sm:text-3xl" />
                  <h3 className="text-xs sm:text-sm font-bold mt-1">{bin.name}</h3>
                </motion.div>
              )
            })}
          </div>

          {/* Message & Reset */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`bg-white rounded-xl p-3 sm:p-4 shadow-md flex flex-col sm:flex-row items-center justify-between gap-2
                       ${message.includes('✅') ? 'border-l-4 border-l-green-500' : ''}
                       ${message.includes('❌') ? 'border-l-4 border-l-red-500' : ''}
                       ${message.includes('🎉') ? 'border-l-4 border-l-yellow-500' : ''}`}
          >
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                message.includes('✅') ? 'bg-green-500' : 
                message.includes('❌') ? 'bg-red-500' : 
                message.includes('📍') ? 'bg-blue-500' :
                message.includes('🎉') ? 'bg-yellow-500' :
                'bg-gray-400'
              }`} />
              <span className="text-xs sm:text-sm text-gray-700 break-words flex-1">{message}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={resetGame}
              className="bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm
                       hover:bg-green-700 transition-colors shadow-sm flex items-center gap-1.5 flex-shrink-0 w-full sm:w-auto justify-center"
            >
              <FaRedo className="text-xs sm:text-sm" /> 
              <span>Reset Game</span>
            </motion.button>
          </motion.div>

          {/* Game Rules */}
          <div className="mt-3 sm:mt-4 bg-blue-50 rounded-xl p-3 sm:p-4 border border-blue-200">
            <h4 className="font-bold text-blue-800 text-xs sm:text-sm mb-1">📋 Cara Bermain:</h4>
            <div className="text-blue-700 text-[10px] sm:text-xs space-y-0.5">
              <p>1. Tap sampah yang ingin dipilah</p>
              <p>2. Tap tong yang sesuai</p>
              <p>3. Sampah mudah: +10 poin | Sampah sulit: +20 poin</p>
              <p>4. Salah tempat: -5 poin</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-wiggle {
          animation: wiggle 0.3s ease-in-out;
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
        .animate-pulse {
          animation: pulse 0.5s ease-in-out;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); background-color: #f0fdf4; }
        }
      `}</style>
    </motion.div>
  )
}

export default PilahSampah