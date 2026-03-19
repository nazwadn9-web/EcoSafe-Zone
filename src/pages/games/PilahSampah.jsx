import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaApple, 
  FaBatteryFull, 
  FaRecycle, 
  FaLeaf, 
  FaNewspaper, 
  FaLightbulb, 
  FaClock,
  FaTrophy, 
  FaRedo, 
  FaArrowLeft
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
  const [message, setMessage] = useState('🤚 Seret sampah ke tong yang benar!')
  const [draggedItem, setDraggedItem] = useState(null)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)

  const bins = [
    { 
      category: 'organik', 
      name: 'Organik', 
      icon: GiPlantSeed, 
      color: 'from-orange-400 to-orange-600',
      examples: 'Apel, Daun'
    },
    { 
      category: 'anorganik', 
      name: 'Anorganik', 
      icon: FaRecycle, 
      color: 'from-blue-400 to-blue-600',
      examples: 'Botol, Koran'
    },
    { 
      category: 'b3', 
      name: 'B3 / Beracun', 
      icon: GiSkullCrossedBones, 
      color: 'from-red-400 to-red-600',
      examples: 'Baterai, Lampu'
    },
  ]

  const handleDragStart = (e, item) => {
    setDraggedItem(item)
    e.dataTransfer.setData('text/plain', item.category)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e, binCategory) => {
    e.preventDefault()
    const itemCategory = e.dataTransfer.getData('text/plain')

    if (!draggedItem) {
      setMessage('❓ Tidak ada sampah yang dipilih')
      return
    }

    if (itemCategory === binCategory) {
      setItems(prev => prev.filter(item => item.id !== draggedItem.id))
      setScore(prev => prev + (draggedItem.difficulty === 'sulit' ? 20 : 10))
      setMessage(`✅ Benar! +${draggedItem.difficulty === 'sulit' ? '20' : '10'}`)
      
      if (items.length === 1) {
        setGameCompleted(true)
        setMessage('🎉 SELAMAT! Game Selesai!')
      }
    } else {
      setMessage(`❌ Salah! Bukan ${binCategory}`)
      setScore(prev => Math.max(0, prev - 5))
      
      const element = document.getElementById(`item-${draggedItem.id}`)
      if (element) {
        element.classList.add('animate-wiggle')
        setTimeout(() => {
          element.classList.remove('animate-wiggle')
        }, 500)
      }
    }
    
    setDraggedItem(null)
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
    setMessage('✨ Game direset! Ayo main lagi!')
    setGameCompleted(false)
    setTimeLeft(60)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 sm:pt-20 pb-6 sm:pb-10 px-3 sm:px-4"
    >
      <div className="container-custom max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Link to="/games" className="flex items-center gap-1 text-green-600 hover:text-green-700 text-xs sm:text-sm">
            <FaArrowLeft className="text-xs" /> 
            <span>Kembali</span>
          </Link>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="bg-yellow-100 px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1 flex-1 sm:flex-none justify-center">
              <FaTrophy className="text-yellow-600 text-xs" />
              <span className="font-bold text-yellow-700 text-xs">{score}</span>
            </div>
            <div className="bg-blue-100 px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1 flex-1 sm:flex-none justify-center">
              <FaClock className="text-blue-600 text-xs" />
              <span className="font-bold text-blue-700 text-xs">{timeLeft}s</span>
            </div>
          </div>
        </div>

        {/* Game Title */}
        <div className="text-center mb-3 sm:mb-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            Game <span className="text-green-600">Pilah Sampah</span>
          </h1>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto">
            Seret sampah ke tong yang sesuai!
          </p>
        </div>

        {/* Game Area */}
        <div className="max-w-4xl mx-auto">
          {/* Items to sort */}
          <div className="bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 mb-3 sm:mb-4 border border-green-200">
            <h3 className="text-xs sm:text-sm font-bold text-gray-700 mb-1 sm:mb-2">Sampah:</h3>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 min-h-[60px] sm:min-h-[70px]">
              <AnimatePresence>
                {items.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.id}
                      id={`item-${item.id}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      whileHover={{ scale: 1.02 }}
                      draggable={!gameCompleted}
                      onDragStart={(e) => handleDragStart(e, item)}
                      className={`cursor-grab active:cursor-grabbing ${gameCompleted ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div className="bg-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm border border-white flex items-center gap-1">
                        <Icon className={`text-xs sm:text-sm ${item.color}`} />
                        <span className="font-medium text-gray-700 text-[10px] sm:text-xs">{item.name}</span>
                        {item.difficulty === 'sulit' && (
                          <span className="text-[8px] sm:text-[10px] bg-yellow-100 text-yellow-700 px-1 py-0.5 rounded-full">20</span>
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
                  className="text-center py-2 sm:py-3"
                >
                  <GiGlassCelebration className="text-xl sm:text-2xl text-green-500 mx-auto" />
                  <p className="text-xs text-green-600 font-bold">Selesai!</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Bins - Lebih kecil */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {bins.map((bin) => {
              const Icon = bin.icon
              return (
                <motion.div
                  key={bin.category}
                  whileHover={{ scale: 1.02 }}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, bin.category)}
                  className={`bg-gradient-to-br ${bin.color} rounded-lg p-2 text-white text-center
                            shadow-sm border border-white/30 min-h-[70px] sm:min-h-[80px] 
                            flex flex-col items-center justify-between`}
                >
                  <Icon className="text-base sm:text-lg" />
                  <h3 className="text-[10px] sm:text-xs font-bold leading-tight">{bin.name}</h3>
                  <span className="text-[7px] sm:text-[8px] bg-white/20 rounded-full px-1.5 py-0.5">
                    {bin.examples}
                  </span>
                </motion.div>
              )
            })}
          </div>

          {/* Message & Reset */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-1.5 min-w-0 flex-1">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                message.includes('✅') ? 'bg-green-500' : 
                message.includes('❌') ? 'bg-red-500' : 
                'bg-blue-500'
              }`} />
              <span className="text-[10px] sm:text-xs text-gray-700 truncate">{message}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={resetGame}
              className="bg-green-600 text-white px-2.5 py-1 rounded-full text-[10px] sm:text-xs
                       hover:bg-green-700 transition-colors shadow-sm flex items-center gap-1 flex-shrink-0"
            >
              <FaRedo className="text-[8px] sm:text-[10px]" /> 
              <span>Reset</span>
            </motion.button>
          </motion.div>

          {/* Game Rules - Minimalis */}
          <div className="mt-2 sm:mt-3 bg-blue-50 rounded-lg p-2 border border-blue-200">
            <h4 className="font-bold text-blue-800 text-[10px] sm:text-xs mb-0.5">📋 Aturan:</h4>
            <div className="text-blue-700 text-[8px] sm:text-[10px] leading-tight">
              <span>+10/+20 poin | Salah -5 poin</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }
        .animate-wiggle {
          animation: wiggle 0.2s ease-in-out;
        }
      `}</style>
    </motion.div>
  )
}

export default PilahSampah