import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCalendar, FaClock, FaArrowRight, FaShare, FaStar } from 'react-icons/fa'
import { getCategoryIcon, getCategoryColor } from '../../utils/articleUtils'

const ArticleCard = ({ article, index, openArticle, openShareModal }) => {
  const [hoveredShare, setHoveredShare] = useState(false)
  const CategoryIcon = getCategoryIcon(article.category)
  const categoryColor = getCategoryColor(article.category)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg
                 overflow-hidden cursor-pointer border border-gray-100
                 transition-shadow duration-300 flex flex-col h-full"
      onClick={() => openArticle(article)}
    >
      {/* Image */}
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden flex-shrink-0">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Category badge */}
        <div className={`absolute top-2 left-2 ${categoryColor}
                        px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold
                        flex items-center gap-1 backdrop-blur-sm shadow-sm`}>
          <CategoryIcon className="text-[8px] sm:text-[10px] flex-shrink-0" />
          <span>{article.category}</span>
        </div>

        {/* Share button */}
        <div className="absolute top-2 right-2"
          onClick={(e) => { e.stopPropagation(); openShareModal(e, article) }}>
          <motion.div
            className="relative"
            onHoverStart={() => setHoveredShare(true)}
            onHoverEnd={() => setHoveredShare(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-green-400/50"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-600
                           rounded-full flex items-center justify-center shadow-md z-10">
              <FaShare className="text-white text-[9px] sm:text-[11px]" />
              {hoveredShare && (
                <>
                  <motion.div
                    className="absolute -top-1 -right-1 text-yellow-300"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                  >
                    <FaStar className="text-[5px]" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-1 -left-1 text-yellow-300"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ delay: 0.05 }}
                  >
                    <FaStar className="text-[5px]" />
                  </motion.div>
                </>
              )}
            </div>

            <AnimatePresence>
              {hoveredShare && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="absolute -bottom-6 right-0 bg-gray-900/90 text-white
                             text-[9px] px-1.5 py-0.5 rounded-md whitespace-nowrap z-20"
                >
                  Bagikan
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Read time badge bottom */}
        <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white
                       text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
          <FaClock className="text-[7px]" />
          {article.readTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        {/* Author */}
        <div className="flex items-center gap-2 mb-2">
          <img
            src={article.authorImage}
            alt={article.author}
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover ring-2 ring-green-100 flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-[11px] sm:text-xs font-semibold text-gray-800 truncate leading-tight">
              {article.author}
            </p>
            <p className="text-[9px] sm:text-[10px] text-gray-400 truncate leading-tight">
              {article.authorRole}
            </p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-[15px] font-bold text-gray-800 mb-1.5 flex-1
                       group-hover:text-green-600 transition-colors leading-snug line-clamp-2">
          {article.title}
        </h3>

        {/* Excerpt - hidden on very small screens to save space */}
        <p className="hidden sm:block text-xs text-gray-500 leading-relaxed line-clamp-2 mb-2.5">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
          <span className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-400">
            <FaCalendar className="text-[8px]" />
            {article.date}
          </span>
          <button className="text-green-600 font-semibold flex items-center gap-1
                             hover:gap-2 transition-all text-[10px] sm:text-xs">
            Baca
            <FaArrowRight className="text-[8px] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default ArticleCard