import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const SuccessNotification = ({ shareSuccess }) => {
  return (
    <AnimatePresence>
      {shareSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60]
                     bg-gradient-to-r from-green-600 to-emerald-600
                     text-white px-5 py-3 rounded-2xl shadow-xl shadow-green-300/40
                     flex items-center gap-2.5 text-sm font-medium
                     whitespace-nowrap"
        >
          <FaCheckCircle className="text-base text-green-200 flex-shrink-0" />
          <span>Artikel berhasil dibagikan! 🎉</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SuccessNotification