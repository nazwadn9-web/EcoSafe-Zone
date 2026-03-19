// src/pages/Artikel.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaLeaf, FaRecycle, FaSeedling, FaGlobeAsia,
  FaBookOpen, FaTree
} from 'react-icons/fa'
import ArticleHeader from '../components/ArticleHeader'  // Perbaiki path
import ArticleSearch from '../components/ArticleSearch'  // Perbaiki path
import ArticleCategories from '../components/ArticleCategories'  // Perbaiki path
import ArticleGrid from '../components/ArticleGrid'  // Perbaiki path
import ArticleModal from '../components/ArticleModal'  // Perbaiki path
import ShareModal from '../components/ShareModal'  // Perbaiki path
import SuccessNotification from '../components/SuccessNotification'  // Perbaiki path
import { articles as initialArticles } from '../data/articles'  // Perbaiki path

// ... rest of the code

const Artikel = () => {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [shareSuccess, setShareSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState('semua')
  const [searchQuery, setSearchQuery] = useState('')
  const [articles, setArticles] = useState(initialArticles)
  const [visibleArticles, setVisibleArticles] = useState(6)

  const categories = [
    { name: 'Semua', icon: FaGlobeAsia, value: 'semua' },
    { name: 'Edukasi', icon: FaBookOpen, value: 'Edukasi' },
    { name: 'Tips', icon: FaLeaf, value: 'Tips' },
    { name: 'Gaya Hidup', icon: FaSeedling, value: 'Gaya Hidup' },
    { name: 'Kreatif', icon: FaRecycle, value: 'Kreatif' },
    { name: 'Lingkungan', icon: FaTree, value: 'Lingkungan' },
  ]

  const handleShare = (platform, article) => {
    const url = window.location.href
    const title = article.title
    const text = `Baca artikel menarik: ${title} - ${article.excerpt}`
    
    let shareUrl = ''
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        break
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
        break
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        break
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`
        break
      default:
        break
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank')
      setArticles(prevArticles =>
        prevArticles.map(a =>
          a.id === article.id
            ? { ...a, shares: a.shares + 1 }
            : a
        )
      )
      setShareSuccess(true)
      setTimeout(() => setShareSuccess(false), 3000)
    }
  }

  const openArticle = (article) => {
    setSelectedArticle(article)
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setShowModal(false)
    document.body.style.overflow = 'unset'
    setTimeout(() => setSelectedArticle(null), 300)
  }

  const openShareModal = (e, article) => {
    e.stopPropagation()
    setSelectedArticle(article)
    setShowShareModal(true)
  }

  const closeShareModal = () => {
    setShowShareModal(false)
  }

  const loadMoreArticles = () => {
    setVisibleArticles(prev => prev + 3)
  }

  const filteredArticles = articles.filter(article => {
    if (activeTab === 'semua') return true
    return article.category === activeTab
  }).filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const displayedArticles = filteredArticles.slice(0, visibleArticles)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-16"
      >
        <div className="container-custom">
          <ArticleHeader />
          <ArticleSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ArticleCategories 
            categories={categories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <ArticleGrid 
            articles={displayedArticles}
            filteredArticles={filteredArticles}
            visibleArticles={visibleArticles}
            loadMoreArticles={loadMoreArticles}
            openArticle={openArticle}
            openShareModal={openShareModal}
          />
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
        showShareModal={showShareModal}
        closeModal={closeModal}
        openShareModal={openShareModal}
        articles={articles}
      />
    </>
  )
}

export default Artikel