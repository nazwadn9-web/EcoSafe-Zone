import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaCalendar, FaClock, FaArrowLeft, FaShare, FaTag } from 'react-icons/fa'
import { getCategoryIcon, getCategoryColor } from '../../utils/articleUtils'
import KomposDetail from './KomposDetail'
import RelatedArticles from './RelatedArticles'

const ArticleModal = ({ showModal, selectedArticle, closeModal, openShareModal, articles }) => {
  if (!selectedArticle) return null

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            className="fixed inset-2 sm:inset-4 md:inset-6 lg:inset-10 z-50"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full h-full flex flex-col overflow-hidden">

              {/* Mobile close bar — tampil di HP untuk semua artikel, tersembunyi di desktop */}
              <div className="sm:hidden flex items-center justify-end px-4 py-3 border-b border-gray-100 flex-shrink-0">
                <button
                  onClick={closeModal}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center
                             text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto overscroll-contain">

                {/* Hero — for non-kompos articles */}
                {selectedArticle.id !== 2 && (
                  <ArticleHero
                    article={selectedArticle}
                    closeModal={closeModal}
                    openShareModal={openShareModal}
                  />
                )}

                {/* Content */}
                <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
                  <div className="max-w-3xl mx-auto">
                    {selectedArticle.id === 2 ? (
                      <KomposDetail article={selectedArticle} onClose={closeModal} />
                    ) : (
                      <ArticleContent article={selectedArticle} />
                    )}
                    <RelatedArticles
                      articles={articles}
                      relatedIds={selectedArticle.relatedArticles}
                      openArticle={(article) => {
                        closeModal()
                        setTimeout(() => openShareModal && null, 300)
                      }}
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

/* ── Hero Image ── */
const ArticleHero = ({ article, closeModal, openShareModal }) => {
  const CategoryIcon = getCategoryIcon(article.category)
  const catColor = getCategoryColor(article.category)

  return (
    <div className="relative h-48 sm:h-60 md:h-72 lg:h-80 flex-shrink-0 overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Close — desktop only, hidden on mobile (mobile pakai bar di atas) */}
      <button
        onClick={closeModal}
        className="hidden sm:flex absolute top-4 right-4
                   w-9 h-9 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full
                   items-center justify-center text-gray-700 hover:bg-white
                   transition-colors shadow-lg z-20"
      >
        <FaTimes className="text-sm" />
      </button>

      {/* Share button — di HP posisi right-4, di desktop right-16 */}
      <motion.button
        onClick={(e) => openShareModal(e, article)}
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        className="absolute top-4 right-4 sm:right-16
                   w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full
                   flex items-center justify-center shadow-lg
                   hover:bg-green-600 transition-colors z-20"
      >
        <FaShare className="text-white text-xs sm:text-sm" />
      </motion.button>

      {/* Category */}
      <div className={`absolute top-4 left-4 ${catColor}
                      px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold
                      flex items-center gap-1 shadow-md z-20`}>
        <CategoryIcon className="text-[9px] sm:text-[10px]" />
        <span>{article.category}</span>
      </div>

      {/* Title + meta */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 leading-snug">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <img
                src={article.authorImage}
                alt={article.author}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-white/50 flex-shrink-0"
              />
              <div>
                <p className="text-xs sm:text-sm font-semibold leading-tight">{article.author}</p>
                <p className="text-[10px] text-white/70 leading-tight hidden sm:block">{article.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/80 text-[10px] sm:text-xs">
              <span className="flex items-center gap-1">
                <FaCalendar className="text-[8px]" /> {article.date}
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="text-[8px]" /> {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Article Content Renderer ── */
const ArticleContent = ({ article }) => {
  const renderContent = () => {
    if (!article.fullDescription) return null

    const lines = article.fullDescription.split('\n')
    const elements = []
    let currentList = []
    let listType = null

    const flushList = (key) => {
      if (currentList.length === 0) return
      elements.push(
        listType === 'ol'
          ? <ol key={key} className="list-decimal pl-5 sm:pl-6 mb-4 space-y-1">
              {currentList.map((item, i) => (
                <li key={i} className="text-sm sm:text-base text-gray-700">{item}</li>
              ))}
            </ol>
          : <ul key={key} className="list-disc pl-5 sm:pl-6 mb-4 space-y-1">
              {currentList.map((item, i) => (
                <li key={i} className="text-sm sm:text-base text-gray-700">{item}</li>
              ))}
            </ul>
      )
      currentList = []
      listType = null
    }

    lines.forEach((raw, i) => {
      const line = raw.trim()
      if (!line) { flushList(`list-${i}`); return }

      if (line.startsWith('**') && line.endsWith('**')) {
        flushList(`list-${i}`)
        elements.push(
          <h2 key={i} className="text-base sm:text-lg md:text-xl font-bold text-green-700 mt-6 mb-2.5">
            {line.replace(/\*\*/g, '')}
          </h2>
        )
      } else if (/^\d+\./.test(line)) {
        if (listType !== 'ol') { flushList(`list-${i}`); listType = 'ol' }
        currentList.push(line.replace(/^\d+\.\s*/, ''))
      } else if (line.startsWith('-')) {
        if (listType !== 'ul') { flushList(`list-${i}`); listType = 'ul' }
        currentList.push(line.replace(/^-\s*/, ''))
      } else {
        flushList(`list-${i}`)
        elements.push(
          <p key={i} className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
            {line}
          </p>
        )
      }
    })
    flushList('final')
    return elements
  }

  return (
    <>
      <div className="prose max-w-none">{renderContent()}</div>

      {/* Tags */}
      <div className="mt-8 pt-5 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-1.5">
          <FaTag className="text-green-500 text-xs" /> Topik Terkait
        </h3>
        <div className="flex flex-wrap gap-2">
          {['#Lingkungan', '#DaurUlang', '#Sampah', '#EcoCare'].map((tag) => (
            <span key={tag}
              className="px-3 py-1 bg-green-50 text-green-700 border border-green-200
                         rounded-full text-xs sm:text-sm font-medium hover:bg-green-100
                         transition-colors cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}

export default ArticleModal