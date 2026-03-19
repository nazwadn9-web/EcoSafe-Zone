import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ArticleCard from './ArticleCard'
import { FaLeaf, FaRecycle, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ArticleGrid = ({ 
  articles, 
  filteredArticles, 
  visibleArticles, 
  loadMoreArticles, 
  openArticle, 
  openShareModal,
  currentPage,
  totalPages,
  onPageChange
}) => {
  // Jika menggunakan pagination (props currentPage, totalPages, dan onPageChange ada)
  const isPaginationMode = currentPage !== undefined && totalPages !== undefined && onPageChange !== undefined

  if (filteredArticles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 sm:py-16"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-green-100 rounded-full 
                     flex items-center justify-center"
        >
          <FaLeaf className="text-2xl sm:text-3xl text-green-600" />
        </motion.div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-1">
          Tidak Ada Artikel
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto px-4">
          Maaf, tidak ada artikel yang sesuai dengan pencarian atau kategori yang dipilih.
          Coba kata kunci atau kategori lain.
        </p>
      </motion.div>
    )
  }

  return (
    <>
      {/* Grid Artikel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            index={index}
            openArticle={openArticle}
            openShareModal={openShareModal}
          />
        ))}
      </div>

      {/* Mode Pagination dengan Prev & Next */}
      {isPaginationMode && (
        <div className="flex flex-col items-center mt-8 sm:mt-10">
          {/* Pagination Controls */}
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                        transition-all ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700 shadow-md'
              }`}
            >
              <FaChevronLeft className="text-xs sm:text-sm" />
            </motion.button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1 sm:gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <motion.button
                  key={number}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onPageChange(number)}
                  className={`min-w-[32px] sm:min-w-[36px] h-8 sm:h-9 px-2 sm:px-3 
                            rounded-full text-xs sm:text-sm font-medium transition-all
                            ${
                    currentPage === number
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
                  }`}
                >
                  {number}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                        transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700 shadow-md'
              }`}
            >
              <FaChevronRight className="text-xs sm:text-sm" />
            </motion.button>
          </div>
        </div>
      )}

      {/* Mode Load More */}
      {!isPaginationMode && filteredArticles.length > visibleArticles && (
        <div className="text-center mt-8 sm:mt-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={loadMoreArticles}
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-600 
                     text-white rounded-full font-semibold text-sm sm:text-base shadow-md
                     hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
          >
            <FaRecycle className="animate-spin-slow text-sm sm:text-base" />
            Muat Artikel Lainnya
          </motion.button>
        </div>
      )}
    </>
  )
}

export default ArticleGrid