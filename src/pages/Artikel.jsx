// src/pages/Artikel.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaLeaf,
  FaRecycle,
  FaSeedling,
  FaGlobeAsia,
  FaBookOpen,
  FaTree,
  FaClock,
  FaHeart,
  FaStar
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

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Edukasi': return FaBookOpen
      case 'Tips': return FaLeaf
      case 'Gaya Hidup': return FaSeedling
      case 'Kreatif': return FaRecycle
      case 'Lingkungan': return FaTree
      default: return FaGlobeAsia
    }
  }

  // Komponen untuk menampilkan artikel "Manfaat Kompos" dengan desain khusus
  const KomposDetail = ({ article }) => {
    return (
      <div className="space-y-8">
        {/* Hero Section dengan tanaman animasi */}
        <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                }}
              >
                <FaLeaf className="text-white text-2xl" />
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Left: Icon & Title */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full 
                         flex items-center justify-center mx-auto md:mx-0 mb-4"
              >
                <GiPlantRoots className="text-white text-5xl" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {article.title}
              </h2>
              <p className="text-white/80 text-lg">{article.excerpt}</p>
            </div>

            {/* Right: Stats */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
               <FaSeedling className="text-3xl mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs opacity-80">Organik</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <FaTint className="text-3xl mx-auto mb-2 text-blue-300" />
                <div className="text-2xl font-bold">70%</div>
                <div className="text-xs opacity-80">Retensi Air</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <FaSun className="text-3xl mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold">+50%</div>
                <div className="text-xs opacity-80">Nutrisi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <FaBug className="text-3xl mx-auto mb-2 text-green-300" />
                <div className="text-2xl font-bold">+80%</div>
                <div className="text-xs opacity-80">Bioaktivitas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
          {[
            { id: 'manfaat', label: '🌱 Manfaat', icon: FaLeaf },
            { id: 'cara', label: '📝 Cara Membuat', icon: FaSeedling },
            { id: 'tips', label: '💡 Tips', icon: FaStar },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveInfoTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2
                        ${activeInfoTab === tab.id 
                          ? 'bg-green-600 text-white shadow-lg' 
                          : 'bg-gray-100 text-gray-600 hover:bg-green-50'}`}
            >
              <tab.icon />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content berdasarkan tab */}
        <AnimatePresence mode="wait">
          {activeInfoTab === 'manfaat' && (
            <motion.div
              key="manfaat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <FaLeaf className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Menyuburkan Tanah</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Kompos meningkatkan kandungan bahan organik tanah, memperbaiki struktur tanah, 
                  dan meningkatkan kemampuan tanah menyimpan air hingga 70%.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <GiEarthAmerica className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Nutrisi Lengkap</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Mengandung unsur hara makro (N, P, K) dan mikro yang dibutuhkan tanaman 
                  secara lengkap dan seimbang.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <FaBug className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Aktivitas Mikroorganisme</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi makanan bagi mikroorganisme tanah yang membantu proses dekomposisi 
                  dan menyuburkan tanah.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <FaRecycle className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Ramah Lingkungan</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Mengurangi ketergantungan pada pupuk kimia yang dapat merusak lingkungan 
                  dalam jangka panjang.
                </p>
              </div>
            </motion.div>
          )}

          {activeInfoTab === 'cara' && (
            <motion.div
              key="cara"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {[
                { step: 1, title: 'Siapkan Wadah', desc: 'Siapkan wadah atau lubang di tanah dengan ukuran yang sesuai', icon: FaBoxOpen },
                { step: 2, title: 'Masukkan Bahan', desc: 'Masukkan sampah organik bergantian dengan tanah', icon: FaLeaf },
                { step: 3, title: 'Siram', desc: 'Siram dengan air secukupnya agar lembab', icon: FaTint },
                { step: 4, title: 'Aduk', desc: 'Aduk setiap 1 minggu sekali untuk aerasi', icon: FaRecycle },
                { step: 5, title: 'Tunggu', desc: 'Tunggu 1-2 bulan hingga kompos matang', icon: FaClock },
              ].map((step) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: step.step * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-600 text-xl">
                    {step.step}
                  </div>
                  <step.icon className="text-3xl text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeInfoTab === 'tips' && (
            <motion.div
              key="tips"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {[
                { tip: 'Jangan gunakan daging atau tulang', icon: '🚫' },
                { tip: 'Pastikan kelembaban terjaga', icon: '💧' },
                { tip: 'Potong bahan menjadi kecil-kecil', icon: '✂️' },
                { tip: 'Campur bahan coklat (kering) dan hijau (basah)', icon: '🟤🟢' },
                { tip: 'Tutup wadah untuk menghindari hama', icon: '🔒' },
                { tip: 'Aduk secara teratur', icon: '🔄' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <p className="text-gray-700">{item.tip}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Visual Progression */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
            🌱 Proses Pembuatan Kompos
          </h3>
          <div className="flex justify-between items-center">
            {['Minggu 1', 'Minggu 2', 'Minggu 4', 'Minggu 8'].map((week, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow-md">
                  <FaSprout className={`text-${idx === 3 ? 'green' : 'gray'}-500`} />
                </div>
                <div className="text-xs font-semibold text-gray-600">{week}</div>
              </div>
            ))}
          </div>
          <div className="relative mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
            />
          </div>
        </div>
      </div>
    )
  }


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