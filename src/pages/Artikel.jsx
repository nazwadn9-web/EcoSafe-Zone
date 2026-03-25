import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaLeaf, FaRecycle, FaSeedling,
  FaGlobeAsia, FaBookOpen, FaTree,
} from 'react-icons/fa'

// Components — adjust path to match your project structure
import ArticleHeader       from '../components/article/ArticleHeader'
import ArticleSearch       from '../components/article/ArticleSearch'
import ArticleCategories   from '../components/article/ArticleCategories'
import ArticleGrid         from '../components/article/ArticleGrid'
import ArticleModal        from '../components/article/ArticleModal'
import ShareModal          from '../components/article/ShareModal'
import SuccessNotification from '../components/article/SuccessNotification'

// Data
import { articles as initialArticles } from '../data/articles'

const ARTICLES_PER_PAGE = 6

const categories = [
  { name: 'Semua',      icon: FaGlobeAsia, value: 'semua'      },
  { name: 'Edukasi',    icon: FaBookOpen,  value: 'Edukasi'    },
  { name: 'Tips',       icon: FaLeaf,      value: 'Tips'       },
  { name: 'Gaya Hidup', icon: FaSeedling,  value: 'Gaya Hidup' },
  { name: 'Kreatif',    icon: FaRecycle,   value: 'Kreatif'    },
  { name: 'Lingkungan', icon: FaTree,      value: 'Lingkungan' },
]

const Artikel = () => {
  const [articles, setArticles]           = useState(initialArticles)
  const [selectedArticle, setSelected]    = useState(null)
  const [showModal, setShowModal]         = useState(false)
  const [showShareModal, setShareModal]   = useState(false)
  const [shareSuccess, setShareSuccess]   = useState(false)
  const [activeTab, setActiveTab]         = useState('semua')
  const [searchQuery, setSearchQuery]     = useState('')
  const [currentPage, setCurrentPage]     = useState(1)

  /* ── Share ── */
  const handleShare = (platform, article) => {
    const url  = `${window.location.origin}/artikel/${article.id}`
    const text = `Baca artikel menarik: ${article.title}`
    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter:  `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      email:    `mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(text + '\n' + url)}`,
    }
    const shareUrl = shareUrls[platform]
    if (!shareUrl) return
    if (platform === 'email') {
      window.location.href = shareUrl
    } else {
      window.open(shareUrl, '_blank', 'noopener,noreferrer')
    }
    setArticles(prev =>
      prev.map(a => a.id === article.id ? { ...a, shares: (a.shares || 0) + 1 } : a)
    )
    setShareSuccess(true)
    setTimeout(() => setShareSuccess(false), 3000)
  }

  /* ── Modals ── */
  const openArticle = (article) => {
    setSelected(article)
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setShowModal(false)
    document.body.style.overflow = ''
    setTimeout(() => setSelected(null), 300)
  }

  const openShareModal = (e, article) => {
    e.stopPropagation()
    setSelected(article)
    setShareModal(true)
  }

  const closeShareModal = () => setShareModal(false)

  /* ── Filter ── */
  const filtered = articles.filter(a => {
    const tab     = activeTab === 'semua' || a.category === activeTab
    const q       = searchQuery.toLowerCase()
    const search  = a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
    return tab && search
  })

  /* ── Pagination ── */
  const totalPages     = Math.ceil(filtered.length / ARTICLES_PER_PAGE)
  const paginated      = filtered.slice((currentPage - 1) * ARTICLES_PER_PAGE, currentPage * ARTICLES_PER_PAGE)

  const handleTabChange = (tab) => { setActiveTab(tab); setCurrentPage(1) }
  const handleSearch    = (q)   => { setSearchQuery(q); setCurrentPage(1) }
  const handlePage      = (p)   => {
    setCurrentPage(p)
    const el = document.getElementById('article-grid')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white pt-20 sm:pt-24 pb-16 sm:pb-20"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ArticleHeader />

          <ArticleSearch searchQuery={searchQuery} setSearchQuery={handleSearch} />

          <ArticleCategories
            categories={categories}
            activeTab={activeTab}
            setActiveTab={handleTabChange}
          />

          <div id="article-grid" className="scroll-mt-24">
            <ArticleGrid
              articles={paginated}
              filteredArticles={filtered}
              openArticle={openArticle}
              openShareModal={openShareModal}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePage}
            />
          </div>

        </div>
      </motion.div>

      <ShareModal
        showShareModal={showShareModal}
        selectedArticle={selectedArticle}
        closeShareModal={closeShareModal}
        handleShare={handleShare}
      />

      <SuccessNotification shareSuccess={shareSuccess} />

      <ArticleModal
        showModal={showModal}
        selectedArticle={selectedArticle}
        closeModal={closeModal}
        openShareModal={openShareModal}
        articles={articles}
      />
    </>
  )
}

export default Artikel