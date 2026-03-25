import React from 'react'
import { motion } from 'framer-motion'

const ArticleCategories = ({ categories, activeTab, setActiveTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-4"
    >
      {categories.map((category, i) => {
        const Icon = category.icon
        const isActive = activeTab === category.value
        return (
          <motion.button
            key={category.value}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * i }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveTab(category.value)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium
                       text-xs sm:text-sm flex items-center gap-1.5
                       transition-all duration-200 border
                       ${isActive
                         ? 'bg-green-600 text-white border-green-600 shadow-md shadow-green-200'
                         : 'bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700 hover:bg-green-50'
                       }`}
          >
            {Icon && <Icon className={`text-[10px] sm:text-xs flex-shrink-0 ${isActive ? 'text-white' : 'text-green-500'}`} />}
            {category.name}
          </motion.button>
        )
      })}
    </motion.div>
  )
}

export default ArticleCategories