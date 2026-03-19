import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ArticleCard from './ArticleCard'
import { FaLeaf, FaRecycle } from 'react-icons/fa'

const ArticleGrid = ({ 
  articles, 
  filteredArticles, 
  visibleArticles, 
  loadMoreArticles, 
  openArticle, 
  openShareModal 
}) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Load More Button */}
      {filteredArticles.length > visibleArticles && (
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loadMoreArticles}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 
                     text-white rounded-full font-bold text-lg shadow-xl
                     hover:shadow-2xl transition-all flex items-center gap-2 mx-auto"
          >
            <FaRecycle className="animate-spin-slow" />
            Muat Artikel Lainnya
          </motion.button>
        </div>
      )}

      {/* No Results */}
      {filteredArticles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <FaLeaf className="text-6xl text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-600 mb-2">Tidak Ada Artikel</h3>
          <p className="text-gray-500">Coba kata kunci atau kategori lain</p>
        </motion.div>
      )}
    </>
  )
}

export default ArticleGrid