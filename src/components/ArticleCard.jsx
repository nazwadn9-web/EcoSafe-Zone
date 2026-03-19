import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaCalendar, FaClock, FaArrowRight, FaShare, FaStar 
} from 'react-icons/fa'
import { getCategoryIcon } from '../utils/articleUtils'

const ArticleCard = ({ article, index, openArticle, openShareModal }) => {
  const [hoveredShare, setHoveredShare] = useState(null)
  const CategoryIcon = getCategoryIcon(article.category)

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl 
               overflow-hidden cursor-pointer transition-all duration-300"
      onClick={() => openArticle(article)}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm 
                      px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
          <CategoryIcon className="text-green-600" />
          <span className="text-gray-700">{article.category}</span>
        </div>
        
        {/* Share Button */}
        <motion.div 
          className="absolute top-4 right-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setHoveredShare(article.id)}
          onHoverEnd={() => setHoveredShare(null)}
        >
          <div 
            className="relative"
            onClick={(e) => openShareModal(e, article)}
          >
            {/* Pulse Animation */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-400"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main Button */}
            <motion.div
              className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 
                       rounded-full flex items-center justify-center cursor-pointer
                       shadow-lg hover:shadow-xl transition-all z-10"
              animate={{
                rotate: hoveredShare === article.id ? [0, 15, -15, 0] : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <FaShare className="text-white text-lg" />
              
              {/* Sparkle Effect on Hover */}
              {hoveredShare === article.id && (
                <>
                  <motion.div
                    className="absolute -top-1 -right-1 text-yellow-300"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaStar className="text-xs" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-1 -left-1 text-yellow-300"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: -360 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <FaStar className="text-xs" />
                  </motion.div>
                </>
              )}
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredShare === article.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -bottom-8 right-0 bg-gray-800 text-white 
                           text-xs px-2 py-1 rounded whitespace-nowrap"
                >
                  Bagikan Artikel
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={article.authorImage}
            alt={article.author}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{article.author}</h4>
            <p className="text-xs text-gray-500">{article.authorRole}</p>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 
                     transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
        
        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <FaCalendar /> {article.date}
          </span>
          <span className="flex items-center gap-1">
            <FaClock /> {article.readTime}
          </span>
        </div>
        
        {/* Read More Button */}
        <button className="text-green-600 font-semibold flex items-center gap-2 
                         group/btn hover:gap-3 transition-all">
          Baca Selengkapnya
          <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
        </button>
      </div>
    </motion.article>
  )
}

export default ArticleCard