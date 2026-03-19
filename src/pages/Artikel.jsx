// src/pages/Artikel.jsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaLeaf, FaRecycle, FaSeedling, FaGlobeAsia,
  FaBookOpen, FaTree
} from 'react-icons/fa'
import ArticleHeader from '../components/ArticleHeader'
import ArticleSearch from '../components/ArticleSearch'
import ArticleCategories from '../components/ArticleCategories'
import ArticleGrid from '../components/ArticleGrid'
import ArticleModal from '../components/ArticleModal'
import ShareModal from '../components/ShareModal'
import SuccessNotification from '../components/SuccessNotification'
import { articles as initialArticles } from '../data/articles'

const Artikel = () => {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [shareSuccess, setShareSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState('semua')
  const [searchQuery, setSearchQuery] = useState('')
  const [articles, setArticles] = useState(initialArticles)
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 6

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

  // Filter articles berdasarkan tab dan search
  const filteredArticles = articles.filter(article => {
    if (activeTab === 'semua') return true
    return article.category === activeTab
  }).filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    // Scroll ke atas grid artikel
    const gridElement = document.getElementById('article-grid')
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Reset ke halaman 1 ketika filter berubah
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setCurrentPage(1)
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  // Update class untuk padding top
  useEffect(() => {
    // Memberi jarak dari navbar
    document.body.style.paddingTop = '0'
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white"
      >
<div className="pt-4 sm:pt-6 pb-16 sm:pb-20">
            <div className="container-custom max-w-7xl mx-auto px-4">
            <ArticleHeader />
            <ArticleSearch 
              searchQuery={searchQuery} 
              setSearchQuery={handleSearchChange} 
            />
            <ArticleCategories 
              categories={categories}
              activeTab={activeTab}
              setActiveTab={handleTabChange}
            />
            
            {/* Article Grid dengan ID untuk scroll */}
            <div id="article-grid">
              <ArticleGrid 
                articles={currentArticles}
                filteredArticles={filteredArticles}
                openArticle={openArticle}
                openShareModal={openShareModal}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
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
        showShareModal={showShareModal}
        closeModal={closeModal}
        openShareModal={openShareModal}
        articles={articles}
      />
    </>
  )
}

export default Artikel