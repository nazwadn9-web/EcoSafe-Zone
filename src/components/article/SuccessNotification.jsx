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
          className="fixed bottom-4 sm:bottom-5 left-4 right-4 sm:left-auto sm:right-auto 
                     sm:left-1/2 sm:-translate-x-1/2 z-[60]
                     bg-gradient-to-r from-green-600 to-emerald-600
                     text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl 
                     shadow-xl shadow-green-300/40
                     flex items-center justify-center gap-2 sm:gap-2.5 
                     text-xs sm:text-sm font-medium
                     max-w-[calc(100%-2rem)] sm:max-w-none sm:whitespace-nowrap"
        >
          <FaCheckCircle className="text-sm sm:text-base text-green-200 flex-shrink-0" />
          <span className="truncate text-center">
            Artikel berhasil dibagikan! 🎉
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SuccessNotification