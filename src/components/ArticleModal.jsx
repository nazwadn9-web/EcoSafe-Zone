import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaCalendar, FaClock, FaArrowLeft, FaShare } from 'react-icons/fa'
import KomposDetail from './KomposDetail'
import RelatedArticles from './RelatedArticles'
import { getCategoryIcon } from '../utils/articleUtils'

const ArticleModal = ({ 
  showModal, 
  selectedArticle, 
  closeModal, 
  openShareModal,
  articles 
}) => {
  const openArticle = (article) => {
    // Fungsi untuk membuka artikel terkait
    // Implementasi sesuai kebutuhan
  }

  if (!selectedArticle) return null

  return (
    <AnimatePresence>
      {showModal && selectedArticle && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-2 sm:inset-4 md:inset-6 lg:inset-10 z-50 overflow-hidden"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl w-full h-full flex flex-col overflow-hidden">
              {/* Header Mobile - Kembali Button (hanya di mobile) */}
              <div className="sm:hidden flex items-center p-3 border-b border-gray-100">
                <button
                  onClick={closeModal}
                  className="flex items-center gap-1 text-green-600"
                >
                  <FaArrowLeft className="text-sm" />
                  <span className="text-sm font-medium">Kembali</span>
                </button>
              </div>

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
                <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
                  {/* Container dengan lebar yang sama dengan image */}
                  <div className="max-w-4xl mx-auto">
                    {/* Jika artikel adalah Kompos (id=2), tampilkan desain khusus dengan onClose */}
                    {selectedArticle.id === 2 ? (
                      <KomposDetail 
                        article={selectedArticle} 
                        onClose={closeModal} 
                      />
                    ) : (
                      <ArticleContent article={selectedArticle} />
                    )}

                    {/* Related Articles */}
                    <RelatedArticles 
                      articles={articles}
                      relatedIds={selectedArticle.relatedArticles}
                      openArticle={openArticle}
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
    <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      {/* Close Button - Desktop */}
      <button
        onClick={closeModal}
        className="hidden sm:flex absolute top-3 sm:top-4 md:top-5 lg:top-6 
                   right-3 sm:right-4 md:right-5 lg:right-6 
                   w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 
                   bg-white/90 backdrop-blur-sm rounded-full items-center justify-center 
                   text-gray-700 hover:bg-white transition-colors shadow-lg z-20"
      >
        <FaTimes size={14} className="sm:text-sm md:text-base lg:text-lg" />
      </button>

      {/* Share Button - 1 saja */}
      <motion.button
        onClick={(e) => openShareModal(e, article)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-16 sm:right-20 md:right-24 lg:right-28
                   w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 
                   bg-green-500 rounded-full flex items-center justify-center
                   shadow-lg hover:bg-green-600 transition-colors z-20"
      >
        <FaShare className="text-white text-xs sm:text-sm md:text-base lg:text-lg" />
      </motion.button>

      {/* Category Badge */}
      <div className="absolute top-3 sm:top-4 md:top-5 lg:top-6 left-3 sm:left-4 md:left-5 lg:left-6 
                    bg-green-600 text-white px-2 sm:px-3 md:px-4 lg:px-5 
                    py-1 sm:py-1.5 md:py-2 lg:py-2.5 
                    rounded-full text-[10px] sm:text-xs md:text-sm font-semibold shadow-lg z-20
                    flex items-center gap-1 sm:gap-1.5">
        <CategoryIcon className="text-xs sm:text-sm md:text-base" />
        <span className="truncate max-w-[80px] sm:max-w-none">{article.category}</span>
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10 text-white">
        {/* Container dengan lebar yang sama dengan konten */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
            {article.title}
          </h1>
          
          {/* Author & Meta */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <img
                src={article.authorImage}
                alt={article.author}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full border border-white"
              />
              <div className="flex flex-col">
                <p className="text-xs sm:text-sm md:text-base font-semibold leading-tight">{article.author}</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/70 leading-tight hidden sm:block">{article.authorRole}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 text-white/80 text-[10px] sm:text-xs md:text-sm">
              <span className="flex items-center gap-1">
                <FaCalendar className="text-[8px] sm:text-[10px] md:text-xs" /> 
                <span>{article.date}</span>
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="text-[8px] sm:text-[10px] md:text-xs" /> 
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sub-komponen untuk Konten Artikel - Dengan paragraf yang rapi dan sejajar
const ArticleContent = ({ article }) => {
  // Fungsi untuk memproses teks menjadi paragraf
  const renderContent = () => {
    if (!article.fullDescription) return null

    const lines = article.fullDescription.split('\n')
    const elements = []
    let currentList = []
    let listType = null

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      if (!line) {
        // Kosong, flush list if any
        if (currentList.length > 0) {
          elements.push(
            <div key={`list-${i}`} className={`${listType === 'ol' ? 'list-decimal' : 'list-disc'} pl-5 mb-4`}>
              {currentList.map((item, idx) => (
                <li key={idx} className="text-sm sm:text-base text-gray-700 mb-1 ml-1">{item}</li>
              ))}
            </div>
          )
          currentList = []
          listType = null
        }
        continue
      }

      // Deteksi heading (teks dengan **)
      if (line.startsWith('**') && line.endsWith('**')) {
        // Flush list if any
        if (currentList.length > 0) {
          elements.push(
            <div key={`list-${i}`} className={`${listType === 'ol' ? 'list-decimal' : 'list-disc'} pl-5 mb-4`}>
              {currentList.map((item, idx) => (
                <li key={idx} className="text-sm sm:text-base text-gray-700 mb-1 ml-1">{item}</li>
              ))}
            </div>
          )
          currentList = []
          listType = null
        }
        
        elements.push(
          <h2 key={i} className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 mt-6 mb-3">
            {line.replace(/\*\*/g, '')}
          </h2>
        )
      }
      // Deteksi list dengan angka (1., 2., dst)
      else if (line.match(/^\d+\./)) {
        if (listType !== 'ol') {
          if (currentList.length > 0) {
            elements.push(
              <div key={`list-${i}`} className="list-disc pl-5 mb-4">
                {currentList.map((item, idx) => (
                  <li key={idx} className="text-sm sm:text-base text-gray-700 mb-1 ml-1">{item}</li>
                ))}
              </div>
            )
            currentList = []
          }
          listType = 'ol'
        }
        currentList.push(line.replace(/^\d+\.\s*/, ''))
      }
      // Deteksi list dengan tanda -
      else if (line.startsWith('-')) {
        if (listType !== 'ul') {
          if (currentList.length > 0) {
            elements.push(
              <div key={`list-${i}`} className={`${listType === 'ol' ? 'list-decimal' : 'list-disc'} pl-5 mb-4`}>
                {currentList.map((item, idx) => (
                  <li key={idx} className="text-sm sm:text-base text-gray-700 mb-1 ml-1">{item}</li>
                ))}
              </div>
            )
            currentList = []
          }
          listType = 'ul'
        }
        currentList.push(line.replace(/^-\s*/, ''))
      }
      // Paragraf biasa
      else {
        // Flush list if any
        if (currentList.length > 0) {
          elements.push(
            <div key={`list-${i}`} className={`${listType === 'ol' ? 'list-decimal' : 'list-disc'} pl-5 mb-4`}>
              {currentList.map((item, idx) => (
                <li key={idx} className="text-sm sm:text-base text-gray-700 mb-1 ml-1">{item}</li>
              ))}
            </div>
          )
          currentList = []
          listType = null
        }
        
        elements.push(
          <p key={i} className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
            {line}
          </p>
        )
      }
    }

    // Flush any remaining list
    if (currentList.length > 0) {
      elements.push(
        <div key="final-list" className={`${listType === 'ol' ? 'list-decimal' : 'list-disc'} pl-5 mb-4`}>
          {currentList.map((item, idx) => (
            <li key={idx} className="text-sm sm:text-base text-gray-700 mb-1 ml-1">{item}</li>
          ))}
        </div>
      )
    }

    return elements
  }

  return (
    <>
      <div className="prose max-w-none">
        {renderContent()}
      </div>

      {/* Tags */}
      <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-gray-200">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">Topik Terkait:</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 sm:px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm">
            #Lingkungan
          </span>
          <span className="px-3 sm:px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm">
            #DaurUlang
          </span>
          <span className="px-3 sm:px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm">
            #Sampah
          </span>
          <span className="px-3 sm:px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm">
            #EcoCare
          </span>
        </div>
      </div>
    </>
  )
}

export default ArticleModal