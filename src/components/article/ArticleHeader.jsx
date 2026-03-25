import React from 'react'
import { motion } from 'framer-motion'
import { FaBookOpen } from 'react-icons/fa'

const ArticleHeader = () => {
  return (
    <div className="text-center pt-2 sm:pt-4 mb-6 sm:mb-8">
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                   bg-gradient-to-br from-green-500 to-emerald-600
                   rounded-xl sm:rounded-2xl flex items-center justify-center
                   mx-auto mb-3 shadow-lg"
      >
        <FaBookOpen className="text-lg sm:text-xl md:text-2xl text-white" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1.5"
      >
        Artikel &amp; <span className="text-green-600">Berita</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto px-4"
      >
        Informasi terkini seputar lingkungan dan gaya hidup berkelanjutan
      </motion.p>
    </div>
  )
}

export default ArticleHeader