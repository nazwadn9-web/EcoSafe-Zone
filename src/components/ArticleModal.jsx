import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaCalendar, FaClock, FaShare, FaHeart } from 'react-icons/fa'
import KomposDetail from './KomposDetail'
import RelatedArticles from './RelatedArticles'
import { getCategoryIcon } from '../utils/articleUtils'

const ArticleModal = ({ 
  showModal, 
  selectedArticle, 
  showShareModal, 
  closeModal, 
  openShareModal,
  articles 
}) => {
  const [likes, setLikes] = React.useState(0)
  const [isLiked, setIsLiked] = React.useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  if (!selectedArticle) return null

  return (
    <AnimatePresence>
      {showModal && selectedArticle && !showShareModal && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 z-50 overflow-hidden"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full h-full flex flex-col overflow-hidden">
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Hero Image - Hanya tampil untuk artikel selain Kompos */}
                {selectedArticle.id !== 2 && (
                  <ArticleHero 
                    article={selectedArticle} 
                    closeModal={closeModal}
                    openShareModal={openShareModal}
                  />
                )}

                {/* Article Content */}
                <div className="p-12">
                  <div className="max-w-4xl mx-auto">
                    {/* Jika artikel adalah Kompos (id=2), tampilkan desain khusus */}
                    {selectedArticle.id === 2 ? (
                      <KomposDetail article={selectedArticle} />
                    ) : (
                      <ArticleContent article={selectedArticle} />
                    )}

                    {/* Related Articles */}
                    <RelatedArticles 
                      articles={articles}
                      relatedIds={selectedArticle.relatedArticles}
                      openArticle={openArticle}
                    />

                    {/* Like & Share Buttons */}
                    <LikeShareButtons 
                      likes={likes}
                      isLiked={isLiked}
                      handleLike={handleLike}
                      openShareModal={(e) => openShareModal(e, selectedArticle)}
                      shares={selectedArticle.shares}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Sub-komponen untuk Hero
const ArticleHero = ({ article, closeModal, openShareModal }) => {
  const CategoryIcon = getCategoryIcon(article.category)
  
  return (
    <div className="relative h-96 overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm 
                 rounded-full flex items-center justify-center text-gray-700 
                 hover:bg-white transition-colors shadow-lg z-20"
      >
        <FaTimes size={20} />
      </button>

      {/* Category Badge */}
      <div className="absolute top-6 left-6 bg-green-600 text-white 
                    px-6 py-3 rounded-full text-sm font-semibold shadow-lg z-20
                    flex items-center gap-2">
        <CategoryIcon className="text-lg" />
        {article.category}
      </div>

      {/* Share Button in Modal */}
      <motion.div 
        className="absolute top-6 right-24 z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={(e) => openShareModal(e, article)}
          className="relative group"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 
                       rounded-full flex items-center justify-center
                       shadow-lg group-hover:shadow-xl transition-all
                       group-hover:rotate-12"
          >
            <FaShare className="text-white text-lg" />
          </div>
          <motion.div
            className="absolute -inset-1 rounded-full bg-blue-400/30 -z-10"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </button>
      </motion.div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {article.title}
        </h1>
        
        {/* Author & Meta */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={article.authorImage}
              alt={article.author}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <p className="font-semibold">{article.author}</p>
              <p className="text-sm text-white/80">{article.authorRole}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-white/80">
            <span className="flex items-center gap-1">
              <FaCalendar /> {article.date}
            </span>
            <span className="flex items-center gap-1">
              <FaClock /> {article.readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sub-komponen untuk Konten Artikel
const ArticleContent = ({ article }) => {
  return (
    <>
      <div className="prose prose-lg max-w-none">
        {article.fullDescription.split('\n').map((paragraph, idx) => {
          if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
            return (
              <h2 key={idx} className="text-2xl font-bold text-green-700 mt-8 mb-4">
                {paragraph.replace(/\*\*/g, '')}
              </h2>
            )
          } else if (paragraph.trim().startsWith('-')) {
            return (
              <li key={idx} className="ml-6 text-gray-700 list-disc">
                {paragraph.replace('-', '')}
              </li>
            )
          } else if (paragraph.trim().match(/^\d+\./)) {
            return (
              <li key={idx} className="ml-6 text-gray-700 list-decimal">
                {paragraph.replace(/^\d+\./, '')}
              </li>
            )
          } else if (paragraph.trim()) {
            return (
              <p key={idx} className="text-gray-700 mb-4 leading-relaxed text-lg">
                {paragraph}
              </p>
            )
          }
          return null
        })}
      </div>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Topik Terkait:</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
            #Lingkungan
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
            #DaurUlang
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
            #Sampah
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
            #EcoCare
          </span>
        </div>
      </div>
    </>
  )
}

// Sub-komponen untuk Like & Share Buttons
const LikeShareButtons = ({ likes, isLiked, handleLike, openShareModal, shares }) => {
  return (
    <div className="mt-12 flex items-center justify-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLike}
        className={`px-6 py-3 rounded-full font-semibold transition-all
                 flex items-center gap-2 ${
          isLiked 
            ? 'bg-red-500 text-white shadow-lg' 
            : 'bg-gray-100 text-gray-600 hover:bg-red-50'
        }`}
      >
        <FaHeart className={isLiked ? 'text-white' : 'text-red-500'} />
        Suka ({likes})
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openShareModal}
        className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold
                 hover:bg-green-700 transition-all flex items-center gap-2"
      >
        <FaShare /> Bagikan ({shares})
      </motion.button>
    </div>
  )
}

// Fungsi untuk membuka artikel (perlu didefinisikan ulang di sini atau di-pass dari props)
const openArticle = (article) => {
  // Fungsi ini akan di-override oleh props atau didefinisikan ulang
}

export default ArticleModal