import React from 'react'
import { FaLeaf } from 'react-icons/fa'

const ArticleSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="max-w-xl mx-auto mb-6 sm:mb-8 px-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Cari artikel..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 pr-10 sm:pr-12 rounded-full 
                   border border-gray-200 focus:border-green-500 focus:outline-none 
                   transition-colors bg-white/80 backdrop-blur-sm shadow-sm text-sm sm:text-base"
        />
        <FaLeaf className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 
                          text-green-500 text-sm sm:text-base" />
      </div>
    </div>
  )
}

export default ArticleSearch