import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const SuccessNotification = ({ shareSuccess }) => {
  return (
    <AnimatePresence>
      {shareSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-gradient-to-r from-green-600 to-emerald-600 
                   text-white px-6 py-3 rounded-full shadow-xl z-50 flex items-center gap-2"
        >
          <FaCheckCircle />
          <span>Artikel berhasil dibagikan! 🎉</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SuccessNotification