// src/pages/Artikel.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaLeaf,
  FaRecycle,
  FaSeedling,
  FaGlobeAsia,
  FaBookOpen,
  FaTree,
  FaClock,
  FaHeart,
  FaStar,
  FaTint,
  FaSun,
  FaBug,
  FaBoxOpen
} from 'react-icons/fa'
import { GiPlantRoots, GiEarthAmerica } from 'react-icons/gi' // Import tambahan untuk ikon spesifik
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
  const [activeInfoTab, setActiveInfoTab] = useState('manfaat') // Ditambahkan agar KomposDetail jalan
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
    const text = `Baca artikel menarik: ${title}`
    
    let shareUrl = ''
    switch(platform) {
      case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; break
      case 'twitter': shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`; break
      case 'whatsapp': shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`; break
      default: break
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank')
      setArticles(prevArticles =>
        prevArticles.map(a => a.id === article.id ? { ...a, shares: a.shares + 1 } : a)
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

  const closeShareModal = () => setShowShareModal(false)

  // Filter Logic
  const filteredArticles = articles.filter(article => {
    const matchesTab = activeTab === 'semua' || article.category === activeTab
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    const gridElement = document.getElementById('article-grid')
    if (gridElement) gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setCurrentPage(1)
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white pt-24 pb-20"
      >
        <div className="container mx-auto px-4 max-w-7xl">
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