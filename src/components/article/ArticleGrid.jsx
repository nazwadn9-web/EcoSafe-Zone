import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLeaf, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ArticleCard from './ArticleCard'

const ArticleGrid = ({
  articles,
  filteredArticles,
  openArticle,
  openShareModal,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isPagination = currentPage !== undefined && totalPages !== undefined && onPageChange !== undefined

  // Empty state
  if (filteredArticles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 sm:py-20"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-green-100
                     rounded-full flex items-center justify-center"
        >
          <FaLeaf className="text-2xl sm:text-3xl text-green-500" />
        </motion.div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-1.5">
          Artikel Tidak Ditemukan
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 max-w-xs mx-auto px-4">
          Tidak ada artikel yang cocok. Coba kata kunci atau kategori lain.
        </p>
      </motion.div>
    )
  }

  // Build page number list (show max 5, with ellipsis)
  const getPageNumbers = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages = []
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', totalPages)
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
    }
    return pages
  }

  return (
    <>
      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={index}
              openArticle={openArticle}
              openShareModal={openShareModal}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      {isPagination && totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 flex-wrap">
          {/* Prev */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center
                       transition-all text-sm ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-300 shadow-sm'
            }`}
          >
            <FaChevronLeft className="text-xs" />
          </motion.button>

          {/* Page numbers */}
          {getPageNumbers().map((num, i) =>
            num === '...' ? (
              <span key={`dots-${i}`} className="w-8 text-center text-gray-400 text-sm">…</span>
            ) : (
              <motion.button
                key={num}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPageChange(num)}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full text-xs sm:text-sm font-medium
                           transition-all ${
                  currentPage === num
                    ? 'bg-green-600 text-white shadow-md shadow-green-200'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-300 shadow-sm'
                }`}
              >
                {num}
              </motion.button>
            )
          )}

          {/* Next */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center
                       transition-all text-sm ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-300 shadow-sm'
            }`}
          >
            <FaChevronRight className="text-xs" />
          </motion.button>
        </div>
      )}
    </>
  )
}

export default ArticleGrid