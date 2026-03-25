import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaClock } from 'react-icons/fa'
import { getCategoryColor } from '../../utils/articleUtils'

const RelatedArticles = ({ articles, relatedIds, openArticle }) => {
  if (!relatedIds || relatedIds.length === 0) return null
  const related = articles.filter(a => relatedIds.includes(a.id))
  if (related.length === 0) return null

  return (
    <div className="mt-10 sm:mt-12 pt-8 border-t border-gray-100">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5">
        Artikel Terkait
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {related.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            onClick={() => openArticle(article)}
            className="group bg-gray-50 hover:bg-white rounded-xl border border-gray-100
                       hover:border-green-200 hover:shadow-md cursor-pointer
                       transition-all duration-200 overflow-hidden"
          >
            <div className="relative h-28 sm:h-32 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className={`absolute top-2 left-2 ${getCategoryColor(article.category)}
                              text-[9px] font-semibold px-2 py-0.5 rounded-full`}>
                {article.category}
              </span>
            </div>
            <div className="p-3">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-800
                             group-hover:text-green-600 transition-colors line-clamp-2 mb-2">
                {article.title}
              </h4>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-[10px] text-gray-400">
                  <FaClock className="text-[7px]" /> {article.readTime}
                </span>
                <span className="text-green-600 text-[10px] font-semibold flex items-center gap-1
                                 group-hover:gap-1.5 transition-all">
                  Baca <FaArrowRight className="text-[7px]" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RelatedArticles