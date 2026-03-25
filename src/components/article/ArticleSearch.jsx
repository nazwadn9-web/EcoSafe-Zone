import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaTimes } from 'react-icons/fa'

const ArticleSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="max-w-xl mx-auto mb-5 sm:mb-6 px-4"
    >
      <div className="relative">
        <FaLeaf className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 text-sm pointer-events-none" />
        <input
          type="text"
          placeholder="Cari artikel lingkungan..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-full
                     border border-gray-200 focus:border-green-400 focus:ring-2
                     focus:ring-green-100 focus:outline-none
                     bg-white/80 backdrop-blur-sm shadow-sm
                     text-sm sm:text-base text-gray-700 placeholder:text-gray-400
                     transition-all duration-200"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400
                       hover:text-gray-600 transition-colors"
          >
            <FaTimes className="text-sm" />
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default ArticleSearch