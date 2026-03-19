import React from 'react'
import { motion } from 'framer-motion'
import { FaBookOpen } from 'react-icons/fa'

const ArticleHeader = () => {
  return (
<div className="text-center pt-2 sm:pt-4 mb-4 sm:mb-6">       <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                   bg-gradient-to-br from-green-500 to-emerald-600 
                   rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center 
                   mx-auto mb-2 shadow-lg"
      >
        <FaBookOpen className="text-base sm:text-lg md:text-xl lg:text-2xl text-white" />
      </motion.div>
      
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
        Artikel & <span className="text-green-600">Berita</span>
      </h1>
      <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
        Informasi terkini seputar lingkungan dan gaya hidup berkelanjutan
      </p>
    </div>
  )
}

export default ArticleHeader