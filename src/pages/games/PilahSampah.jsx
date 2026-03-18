import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaApple, 
  FaBatteryFull, 
  FaTrash, 
  FaRecycle, 
  FaLeaf, 
  FaNewspaper, 
  FaWineBottle, 
  FaLightbulb, 
  FaClock,
  FaTrophy, 
  FaRedo, 
  FaArrowLeft
} from 'react-icons/fa'

import { 
  GiSkullCrossedBones, 
  GiGlassCelebration, 
  GiPlantSeed 
} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const PilahSampah = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Apel Busuk', category: 'organik', icon: FaApple, color: 'text-orange-500', difficulty: 'mudah' },
    { id: 2, name: 'Botol Plastik', category: 'anorganik', icon: FaWineBottle, color: 'text-blue-500', difficulty: 'mudah' },
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
  const [gameActive, setGameActive] = useState(true)

  const bins = [
    { 
      category: 'organik', 
      name: 'Organik', 
      icon: 'GiPlantSeed', 
      color: 'from-orange-400 to-orange-600', 
      bgColor: 'bg-orange-500',
      text: '🍂 Sisa Makanan, Daun',
      examples: 'Apel, Daun, Kulit Pisang'
    },
    { 
      category: 'anorganik', 
      name: 'Anorganik', 
      icon: FaRecycle, 
      color: 'from-blue-400 to-blue-600', 
      bgColor: 'bg-blue-500',
      text: '📦 Plastik, Kaca, Kertas',
      examples: 'Botol, Koran, Kaleng'
    },
    { 
      category: 'b3', 
      name: 'B3 / Beracun', 
      icon: GiSkullCrossedBones, 
      color: 'from-red-400 to-red-600', 
      bgColor: 'bg-red-500',
      text: '⚠️ Baterai, Lampu, Obat',
      examples: 'Baterai, Lampu Neon'
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
      // Success - remove item and add score
      setItems(prev => prev.filter(item => item.id !== draggedItem.id))
      setScore(prev => prev + (draggedItem.difficulty === 'sulit' ? 20 : 10))
      setMessage(`✅ Benar! +${draggedItem.difficulty === 'sulit' ? 20 : 10} poin`)
      
      if (items.length === 1) {
        setGameCompleted(true)
        setMessage('🎉 SELAMAT! Game Selesai!')
      }
    } else {
      // Wrong bin
      setMessage(`❌ Salah! ${draggedItem.name} bukan sampah ${binCategory}`)
      setScore(prev => Math.max(0, prev - 5)) // Kurangi 5 poin, minimal 0
      
      // Shake animation
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
      { id: 2, name: 'Botol Plastik', category: 'anorganik', icon: FaBottleWater, color: 'text-blue-500', difficulty: 'mudah' },
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
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/games" className="flex items-center gap-2 text-green-600 hover:text-green-700">
            <FaArrowLeft /> Kembali
          </Link>
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 px-4 py-2 rounded-full flex items-center gap-2">
              <FaTrophy className="text-yellow-600" />
              <span className="font-bold text-yellow-700">{score} Poin</span>
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-full flex items-center gap-2">
              <FaClock className="text-blue-600" />
              <span className="font-bold text-blue-700">{timeLeft}s</span>
            </div>
          </div>
        </div>

        {/* Game Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Game <span className="text-green-600">Pilah Sampah</span>
          </h1>
          <p className="text-gray-600">Seret sampah ke tong yang sesuai! Dapatkan poin sebanyak-banyaknya!</p>
        </div>

        {/* Game Area */}
        <div className="max-w-6xl mx-auto">
          {/* Items to sort */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 mb-8 border-2 border-green-200">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Sampah yang harus dipilah:</h3>
            <div className="flex flex-wrap justify-center gap-4 min-h-[120px]">
              <AnimatePresence>
                {items.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.id}
                      id={`item-${item.id}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      draggable={!gameCompleted}
                      onDragStart={(e) => handleDragStart(e, item)}
                      className={`cursor-grab active:cursor-grabbing ${gameCompleted ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div className="bg-white px-6 py-4 rounded-full shadow-xl border-2 border-white flex items-center gap-3">
                        <Icon className={`text-2xl ${item.color}`} />
                        <span className="font-semibold text-gray-700">{item.name}</span>
                        {item.difficulty === 'sulit' && (
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">+20</span>
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
                  className="text-center py-8"
                >
                  <GiGlassCelebration className="text-6xl text-green-500 mx-auto mb-4" />
                  <p className="text-xl text-green-600 font-bold">Semua sampah sudah terpilah!</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Bins */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {bins.map((bin) => {
              const Icon = bin.icon
              return (
                <motion.div
                  key={bin.category}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, bin.category)}
                  className={`bg-gradient-to-br ${bin.color} rounded-3xl p-6 text-white text-center
                            shadow-xl hover:shadow-2xl transition-all duration-300
                            border-4 border-white/50 min-h-[200px] flex flex-col justify-between`}
                >
                  <div>
                    <Icon className="text-5xl mx-auto mb-3" />
                    <h3 className="text-2xl font-bold mb-2">{bin.name}</h3>
                    <p className="text-white/90 text-sm mb-2">{bin.text}</p>
                  </div>
                  <div className="text-xs bg-white/20 rounded-full px-3 py-1">
                    {bin.examples}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Message & Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-xl flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${message.includes('✅') ? 'bg-green-500' : message.includes('❌') ? 'bg-red-500' : 'bg-blue-500'}`}></div>
              <span className="text-lg font-semibold text-gray-700">{message}</span>
            </div>
            
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetGame}
                className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold
                         hover:bg-green-700 transition-colors shadow-lg flex items-center gap-2"
              >
                <FaRedo /> Reset Game
              </motion.button>
            </div>
          </motion.div>

          {/* Game Rules */}
          <div className="mt-8 bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">📋 Aturan Main:</h4>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>• Seret sampah ke tong yang sesuai</li>
              <li>• Sampah mudah: +10 poin | Sampah sulit: +20 poin</li>
              <li>• Salah tempat: -5 poin</li>
              <li>• Kumpulkan poin sebanyak mungkin!</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PilahSampah