import React from 'react'
import { FaLeaf } from 'react-icons/fa'

const ArticleSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Cari artikel..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-4 pr-12 rounded-full border-2 border-gray-200 
                   focus:border-green-500 focus:outline-none transition-colors
                   bg-white/80 backdrop-blur-sm shadow-lg"
        />
        <FaLeaf className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500 text-xl" />
      </div>
    </div>
  )
}

export default ArticleSearch