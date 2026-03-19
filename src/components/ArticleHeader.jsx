import React from 'react'
import { motion } from 'framer-motion'
import { FaBookOpen } from 'react-icons/fa'

const ArticleHeader = () => {
  return (
    <div className="text-center mb-12">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 
                 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
      >
        <FaBookOpen className="text-4xl text-white" />
      </motion.div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Artikel & <span className="text-green-600">Berita</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Informasi terkini seputar lingkungan dan gaya hidup berkelanjutan
      </p>
    </div>
  )
}

export default ArticleHeader