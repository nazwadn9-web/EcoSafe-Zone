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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md 
               overflow-hidden cursor-pointer transition-all duration-300"
      onClick={() => openArticle(article)}
    >
      {/* Image Container */}
      <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-1.5 left-1.5 bg-white/90 backdrop-blur-sm 
                      px-1.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-medium 
                      flex items-center gap-0.5 shadow">
          <CategoryIcon className="text-green-600 text-[8px] sm:text-[10px]" />
          <span className="text-gray-700">{article.category}</span>
        </div>
        
        {/* Share Button - Hijau */}
        <motion.div 
          className="absolute top-1.5 right-1.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setHoveredShare(article.id)}
          onHoverEnd={() => setHoveredShare(null)}
        >
          <div 
            className="relative"
            onClick={(e) => {
              e.stopPropagation()
              openShareModal(e, article)
            }}
          >
            {/* Pulse Animation - Hijau */}
            <motion.div
              className="absolute inset-0 rounded-full bg-green-400"
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
            
            {/* Main Button - Hijau */}
            <motion.div
              className="relative w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-green-500 to-emerald-600 
                       rounded-full flex items-center justify-center cursor-pointer
                       shadow hover:shadow-md transition-all z-10"
              animate={{
                rotate: hoveredShare === article.id ? [0, 10, -10, 0] : 0
              }}
              transition={{ duration: 0.4 }}
            >
              <FaShare className="text-white text-[10px] sm:text-xs" />
              
              {/* Sparkle Effect */}
              {hoveredShare === article.id && (
                <>
                  <motion.div
                    className="absolute -top-1 -right-1 text-yellow-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <FaStar className="text-[4px] sm:text-[6px]" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-1 -left-1 text-yellow-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.05 }}
                  >
                    <FaStar className="text-[4px] sm:text-[6px]" />
                  </motion.div>
                </>
              )}
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredShare === article.id && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute -bottom-5 right-0 bg-gray-800 text-white 
                           text-[6px] sm:text-[8px] px-1 py-0.5 rounded whitespace-nowrap"
                >
                  Bagikan
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-2 sm:p-3">
        {/* Author Info */}
        <div className="flex items-center gap-1.5 mb-1">
          <img
            src={article.authorImage}
            alt={article.author}
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
          />
          <div className="flex items-center gap-1 flex-wrap">
            <h4 className="font-semibold text-gray-800 text-[10px] sm:text-xs">{article.author}</h4>
            <span className="text-[6px] sm:text-[8px] text-gray-400">•</span>
            <p className="text-[6px] sm:text-[8px] text-gray-500">{article.authorRole}</p>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xs sm:text-sm font-bold text-gray-800 mb-1 
                     group-hover:text-green-600 transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        {/* Meta Info */}
        <div className="flex items-center gap-2 text-[6px] sm:text-[8px] text-gray-500 mb-1">
          <span className="flex items-center gap-0.5">
            <FaCalendar className="text-[5px] sm:text-[6px]" /> 
            <span>{article.date}</span>
          </span>
          <span className="flex items-center gap-0.5">
            <FaClock className="text-[5px] sm:text-[6px]" /> 
            <span>{article.readTime}</span>
          </span>
        </div>
        
        {/* Read More */}
        <button className="text-green-600 font-medium flex items-center gap-1 
                         group/btn hover:gap-1.5 transition-all text-[8px] sm:text-[10px]">
          Baca
          <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform text-[6px] sm:text-[8px]" />
        </button>
      </div>
    </motion.article>
  )
}

export default ArticleCard