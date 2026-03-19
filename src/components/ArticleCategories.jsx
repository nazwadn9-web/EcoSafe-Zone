import React from 'react'
import { motion } from 'framer-motion'

const ArticleCategories = ({ categories, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => {
        const Icon = category.icon
        const isActive = activeTab === category.value
        return (
          <motion.button
            key={category.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(category.value)}
            className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2
                     transition-all duration-300 ${
              isActive 
                ? 'bg-green-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-green-50'
            }`}
          >
            <Icon />
            {category.name}
          </motion.button>
        )
      })}
    </div>
  )
}

export default ArticleCategories