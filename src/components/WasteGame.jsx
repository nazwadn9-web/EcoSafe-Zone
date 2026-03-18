import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaApple, FaBottleWater, FaBatteryFull, FaTrash, FaRecycle } from 'react-icons/fa6'
import { GiSkullCrossedBones } from 'react-icons/gi'

const WasteGame = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Apel Busuk', category: 'organik', icon: FaApple, color: 'text-orange-500' },
    { id: 2, name: 'Botol Plastik', category: 'anorganik', icon: FaBottleWater, color: 'text-blue-500' },
    { id: 3, name: 'Baterai', category: 'b3', icon: FaBatteryFull, color: 'text-red-500' },
  ])

  const [message, setMessage] = useState('🤚 Seret sampah ke tong yang benar!')
  const [draggedItem, setDraggedItem] = useState(null)

  const bins = [
    { category: 'organik', name: 'Organik', icon: FaTrash, color: 'bg-orange-500', text: '🍂 Hijau' },
    { category: 'anorganik', name: 'Anorganik', icon: FaRecycle, color: 'bg-blue-500', text: '📦 Biru' },
    { category: 'b3', name: 'B3', icon: GiSkullCrossedBones, color: 'bg-red-500', text: '⚠️ Merah' },
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
      // Success - remove item
      setItems(prev => prev.filter(item => item.id !== draggedItem.id))
      setMessage(`✅ Berhasil! ${draggedItem.name} masuk tong ${binCategory}`)
      
      if (items.length === 1) {
        setMessage('🎉 Selamat! Semua sampah terpilah dengan benar!')
      }
    } else {
      // Wrong bin
      setMessage(`❌ Waduh! ${draggedItem.name} bukan untuk tong ${binCategory}`)
      
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
      { id: 1, name: 'Apel Busuk', category: 'organik', icon: FaApple, color: 'text-orange-500' },
      { id: 2, name: 'Botol Plastik', category: 'anorganik', icon: FaBottleWater, color: 'text-blue-500' },
      { id: 3, name: 'Baterai', category: 'b3', icon: FaBatteryFull, color: 'text-red-500' },
    ])
    setMessage('✨ Sampah baru! Ayo pilah lagi!')
  }

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Game Pilah Sampah</h2>
          <p className="section-subtitle">Seret sampah ke tong yang sesuai</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Trash Items */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                    className="cursor-grab active:cursor-grabbing"
                  >
                    <div className="bg-white px-6 py-4 rounded-full shadow-xl border-2 border-white flex items-center gap-3">
                      <Icon className={`text-2xl ${item.color}`} />
                      <span className="font-semibold text-gray-700">{item.name}</span>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Bins */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {bins.map((bin) => {
              const Icon = bin.icon
              return (
                <motion.div
                  key={bin.category}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, bin.category)}
                  className={`${bin.color} rounded-3xl p-6 text-white text-center cursor-pointer
                            shadow-xl hover:shadow-2xl transition-all duration-300
                            border-4 border-white/50`}
                >
                  <Icon className="text-5xl mx-auto mb-3" />
                  <h3 className="text-2xl font-bold mb-2">{bin.name}</h3>
                  <p className="text-white/90">{bin.text}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Message & Reset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-full p-4 flex items-center justify-between"
          >
            <span className="text-lg font-semibold text-gray-700">{message}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetGame}
              className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold
                       hover:bg-green-700 transition-colors shadow-lg"
            >
              <span className="flex items-center gap-2">
                <FaRecycle />
                Reset
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WasteGame