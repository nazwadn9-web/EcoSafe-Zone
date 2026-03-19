import React from 'react'
import { motion } from 'framer-motion'

const ArticleCategories = ({ categories, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap justify-center gap-1.5 mb-4 sm:mb-5 px-4">
      {categories.map((category) => {
        const Icon = category.icon
        const isActive = activeTab === category.value
        return (
          <motion.button
            key={category.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab(category.value)}
            className={`px-2.5 sm:px-3 py-1 rounded-full font-medium text-[10px] sm:text-xs
                     transition-all duration-300 flex items-center gap-1 ${
              isActive 
                ? 'bg-green-600 text-white shadow-sm' 
                : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
            }`}
          >
            {Icon && <Icon className="text-[8px] sm:text-[10px]" />}
            {category.name}
          </motion.button>
        )
      })}
    </div>
  )
}

export default ArticleCategories