import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaCalendar, FaUser, FaArrowRight, FaTimes, FaShare, 
  FaBookmark, FaHeart, FaRegHeart, FaFacebook, FaTwitter, 
  FaWhatsapp, FaTelegram, FaLink, FaCheckCircle,
  FaEnvelope, FaCopy, FaShareAlt
} from 'react-icons/fa'

const Artikel = () => {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [likedArticles, setLikedArticles] = useState({})
  const [bookmarkedArticles, setBookmarkedArticles] = useState({})
  const [copied, setCopied] = useState(false)
  const [shareSuccess, setShareSuccess] = useState(false)
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'Cara Mudah Memilah Sampah Rumah Tangga',
      excerpt: 'Panduan praktis memilah sampah organik, anorganik, dan B3 di rumah.',
      fullDescription: `Memilah sampah rumah tangga adalah langkah pertama yang penting dalam pengelolaan limbah yang bertanggung jawab. Berikut adalah panduan lengkapnya:

**1. Sampah Organik**
Sampah organik adalah limbah yang berasal dari sisa makhluk hidup yang mudah terurai. Contohnya: sisa makanan, kulit buah, sayuran, daun-daunan. Sampah ini bisa diolah menjadi kompos yang bermanfaat untuk tanaman.

**2. Sampah Anorganik**
Sampah anorganik adalah limbah yang tidak mudah terurai. Contohnya: plastik, botol kaca, kaleng, kertas. Sampah ini bisa didaur ulang menjadi barang baru yang bernilai ekonomis.

**3. Sampah B3 (Bahan Berbahaya dan Beracun)**
Sampah B3 memerlukan penanganan khusus karena dapat membahayakan kesehatan dan lingkungan. Contohnya: baterai, lampu neon, obat kadaluarsa, kemasan pestisida.

Tips praktis:
- Sediakan tempat sampah terpisah di rumah
- Bersihkan sampah anorganik sebelum dibuang
- Kumpulkan sampah B3 di wadah khusus
- Olah sampah organik menjadi kompos
      
Dengan memilah sampah dari rumah, Anda telah berkontribusi besar dalam menjaga lingkungan!`,
      author: 'Tim EcoCare',
      date: '15 Mar 2024',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b',
      category: 'Edukasi',
      readTime: '5 menit',
      likes: 234,
      shares: 45,
    },
    {
      id: 2,
      title: 'Manfaat Kompos untuk Tanaman',
      excerpt: 'Bagaimana kompos dari sisa dapur bisa menyuburkan tanaman Anda.',
      fullDescription: `Kompos adalah pupuk organik yang dibuat dari sisa-sisa bahan organik seperti dedaunan, sisa makanan, dan kotoran hewan. Berikut manfaat lengkapnya untuk tanaman:

**1. Menyuburkan Tanah**
Kompos meningkatkan kandungan bahan organik tanah, memperbaiki struktur tanah, dan meningkatkan kemampuan tanah menyimpan air.

**2. Sumber Nutrisi Lengkap**
Kompos mengandung unsur hara makro (N, P, K) dan mikro yang dibutuhkan tanaman secara lengkap dan seimbang.

**3. Meningkatkan Aktivitas Mikroorganisme**
Kompos menjadi makanan bagi mikroorganisme tanah yang membantu proses dekomposisi dan menyuburkan tanah.

**4. Ramah Lingkungan**
Mengurangi ketergantungan pada pupuk kimia yang dapat merusak lingkungan dalam jangka panjang.

**Cara Membuat Kompos Sederhana:**
1. Siapkan wadah atau lubang di tanah
2. Masukkan sampah organik bergantian dengan tanah
3. Siram dengan air secukupnya
4. Aduk setiap 1 minggu sekali
5. Tunggu 1-2 bulan hingga matang

Kompos siap digunakan ketika berwarna hitam kecoklatan, tidak berbau, dan teksturnya remah.`,
      author: 'Dr. Green',
      date: '10 Mar 2024',
      image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e',
      category: 'Tips',
      readTime: '7 menit',
      likes: 156,
      shares: 32,
    },
    {
      id: 3,
      title: 'Bahaya Sampah B3 dan Cara Menanganinya',
      excerpt: 'Kenali jenis sampah berbahaya dan cara pembuangan yang benar.',
      fullDescription: `Sampah B3 (Bahan Berbahaya dan Beracun) adalah jenis limbah yang karena sifat, konsentrasi, atau jumlahnya dapat mencemari lingkungan dan membahayakan kesehatan.

**Jenis-jenis Sampah B3 Rumah Tangga:**
- Baterai bekas
- Lampu neon/LED bekas
- Obat-obatan kadaluarsa
- Kemasan pestisida atau herbisida
- Minyak rem dan oli bekas
- Pembersih kimia
- Cat dan thinner

**Bahaya Sampah B3:**
- Meracuni air tanah
- Mencemari tanah dalam waktu lama
- Menyebabkan gangguan kesehatan seperti kanker, gangguan saraf
- Membunuh biota tanah dan air

**Cara Menangani Sampah B3:**
1. Pisahkan dari sampah lainnya
2. Simpan dalam wadah tertutup dan beri label
3. Jangan dibuang ke saluran air atau tanah
4. Kumpulkan di tempat pengumpulan khusus
5. Serahkan ke pengelola limbah B3 resmi

**Lokasi Penampungan:**
- Bank sampah yang memiliki izin
- Pusat daur ulang elektronik
- Program pengumpulan limbah B3 dari pemerintah

Ingat! Jangan pernah membakar sampah B3 karena dapat menghasilkan gas beracun.`,
      author: 'Eco Expert',
      date: '5 Mar 2024',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778bdf',
      category: 'Edukasi',
      readTime: '8 menit',
      likes: 312,
      shares: 78,
    },
    {
      id: 4,
      title: 'Zero Waste Lifestyle untuk Pemula',
      excerpt: 'Langkah awal menjalani gaya hidup tanpa sampah.',
      fullDescription: `Zero waste lifestyle atau gaya hidup tanpa sampah adalah filosofi yang mendorong kita untuk mengurangi produksi sampah seminimal mungkin. Berikut panduan untuk pemula:

**Prinsip 5R:**
1. Refuse (Tolak): Tolak barang yang tidak perlu seperti sedotan plastik, kantong plastik
2. Reduce (Kurangi): Kurangi konsumsi barang yang menghasilkan sampah
3. Reuse (Gunakan Ulang): Gunakan barang yang bisa dipakai berulang
4. Recycle (Daur Ulang): Olah sampah yang tidak bisa dihindari
5. Rot (Membusukkan): Kompos sampah organik

**Langkah Awal untuk Pemula:**
1. Bawa tas belanja sendiri
2. Gunakan tumbler dan botol minum
3. Bawa wadah makan sendiri
4. Tolak sedotan plastik
5. Belanja di pasar tradisional dengan wadah sendiri
6. Buat kompos dari sisa dapur
7. Beli produk dengan kemasan minimal

**Manfaat Zero Waste:**
- Mengurangi polusi lingkungan
- Menghemat uang dalam jangka panjang
- Hidup lebih sehat
- Mengurangi jejak karbon

Mulailah dengan langkah kecil dan konsisten. Jangan sempurna dari awal, yang penting konsisten!`,
      author: 'Green Living',
      date: '28 Feb 2024',
      image: 'https://images.unsplash.com/photo-1545161296-3c0c1ebfccb8',
      category: 'Gaya Hidup',
      readTime: '6 menit',
      likes: 189,
      shares: 56,
    },
    {
      id: 5,
      title: 'Daur Ulang Plastik jadi Barang Bernilai',
      excerpt: 'Kreativitas mengubah sampah plastik menjadi produk ekonomis.',
      fullDescription: `Sampah plastik bisa diubah menjadi berbagai produk bernilai ekonomi tinggi. Berikut ide-ide kreatif dan cara melakukannya:

**Jenis Plastik yang Bisa Didaur Ulang:**
- PET (botol minuman)
- HDPE (botol deterjen, shampoo)
- LDPE (kantong plastik)
- PP (cup plastik, sedotan)

**Ide Kerajinan dari Plastik:**
1. **Ecobrick**: Botol plastik diisi padat dengan sampah plastik untuk jadi bahan bangunan
2. **Tas dari bungkus kopi**: Anyam bungkus kopi atau deterjen menjadi tas cantik
3. **Pot tanaman dari botol**: Botol bekas jadi pot gantung yang menarik
4. **Kreasi bunga plastik**: Sedotan dan kantong plastik jadi bunga hias
5. **Tempat pensil**: Botol bekas dipotong dan dihias

**Nilai Ekonomi:**
- Tas anyaman plastik: Rp 50.000 - Rp 200.000
- Ecobrick: Dikumpulkan untuk bahan bangunan
- Bunga plastik: Rp 20.000 - Rp 100.000 per rangkaian

**Tips Sukses:**
- Bersihkan plastik sebelum diolah
- Kumpulkan dalam jumlah banyak
- Bergabung dengan komunitas daur ulang
- Jual online di marketplace

Dengan kreativitas, sampah plastik bisa jadi cuan!`,
      author: 'Recycle Team',
      date: '20 Feb 2024',
      image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40',
      category: 'Kreatif',
      readTime: '7 menit',
      likes: 267,
      shares: 89,
    },
    {
      id: 6,
      title: 'Hutan Kota dan Manfaatnya',
      excerpt: 'Pentingnya ruang terbuka hijau di tengah perkotaan.',
      fullDescription: `Hutan kota adalah area hijau di tengah perkotaan yang memiliki fungsi ekologis dan sosial. Berikut manfaat lengkapnya:

**Manfaat Ekologis:**
1. **Penyerap CO2**: Pohon menyerap karbondioksida dan menghasilkan oksigen
2. **Pengatur suhu**: Menurunkan suhu kota 2-4 derajat Celcius
3. **Penahan air**: Mencegah banjir dan erosi
4. **Habitat satwa**: Rumah bagi burung dan hewan kecil
5. **Peredam kebisingan**: Pohon meredam suara bising kendaraan

**Manfaat Sosial:**
1. **Rekreasi**: Tempat warga berolahraga dan bersantai
2. **Edukasi**: Laboratorium alam untuk belajar lingkungan
3. **Kesehatan**: Udara bersih baik untuk kesehatan
4. **Estetika**: Memperindah wajah kota

**Contoh Hutan Kota di Indonesia:**
- Hutan Kota GBK (Jakarta)
- Hutan Kota Plataran (Surabaya)
- Hutan Kota Malabar (Malang)

**Cara Berkontribusi:**
- Ikut program penanaman pohon
- Jaga kebersihan hutan kota
- Tanam pohon di lingkungan sekitar
- Edukasi masyarakat tentang pentingnya ruang hijau

Hutan kota adalah paru-paru kota yang harus kita jaga bersama!`,
      author: 'Forest Keeper',
      date: '15 Feb 2024',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      category: 'Lingkungan',
      readTime: '6 menit',
      likes: 145,
      shares: 34,
    },
  ])

  const handleLike = (articleId, e) => {
    e.stopPropagation()
    setLikedArticles(prev => {
      const isLiked = prev[articleId]
      setArticles(prevArticles =>
        prevArticles.map(article =>
          article.id === articleId
            ? { ...article, likes: article.likes + (isLiked ? -1 : 1) }
            : article
        )
      )
      return { ...prev, [articleId]: !isLiked }
    })
  }

  const handleBookmark = (articleId, e) => {
    e.stopPropagation()
    setBookmarkedArticles(prev => ({
      ...prev,
      [articleId]: !prev[articleId]
    }))
  }

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
      // Update share count
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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-16"
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Artikel & <span className="text-green-600">Berita</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Informasi terkini seputar lingkungan dan gaya hidup berkelanjutan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => openArticle(article)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div 
                      className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-white transition-colors"
                      onClick={(e) => handleLike(article.id, e)}
                    >
                      {likedArticles[article.id] ? (
                        <FaHeart className="text-red-500 text-base animate-pingOnce" />
                      ) : (
                        <FaRegHeart className="text-red-500 text-base" />
                      )}
                      <span className="text-gray-700">{article.likes}</span>
                    </div>
                    
                    <div 
                      className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-white transition-colors"
                      onClick={(e) => openShareModal(e, article)}
                    >
                      <FaShare className="text-blue-500 text-base" />
                      <span className="text-gray-700">{article.shares}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FaUser /> {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendar /> {article.date}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-green-600 font-semibold flex items-center gap-2 group/btn">
                      Baca Selengkapnya
                      <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                    
                    <div 
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      onClick={(e) => handleBookmark(article.id, e)}
                    >
                      <FaBookmark className={`text-lg ${bookmarkedArticles[article.id] ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Muat Artikel Lainnya
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && selectedArticle && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeShareModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg w-full z-50"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <FaShareAlt /> Bagikan Artikel
                    </h2>
                    <button
                      onClick={closeShareModal}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <p className="text-sm opacity-90 mt-2 line-clamp-1">{selectedArticle.title}</p>
                </div>

                <div className="p-6">
                  {/* Share Stats */}
                  <div className="flex items-center justify-between mb-6 bg-gray-50 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{selectedArticle.shares}</div>
                      <div className="text-xs text-gray-500">Dibagikan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{selectedArticle.likes}</div>
                      <div className="text-xs text-gray-500">Disukai</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">1.2k</div>
                      <div className="text-xs text-gray-500">Dilihat</div>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                      onClick={() => handleShare('facebook', selectedArticle)}
                      className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      <FaFacebook className="text-xl" />
                      <span className="font-semibold">Facebook</span>
                    </button>
                    
                    <button
                      onClick={() => handleShare('twitter', selectedArticle)}
                      className="flex items-center gap-3 p-4 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition-colors"
                    >
                      <FaTwitter className="text-xl" />
                      <span className="font-semibold">Twitter</span>
                    </button>
                    
                    <button
                      onClick={() => handleShare('whatsapp', selectedArticle)}
                      className="flex items-center gap-3 p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
                    >
                      <FaWhatsapp className="text-xl" />
                      <span className="font-semibold">WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={() => handleShare('telegram', selectedArticle)}
                      className="flex items-center gap-3 p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                    >
                      <FaTelegram className="text-xl" />
                      <span className="font-semibold">Telegram</span>
                    </button>
                    
                    <button
                      onClick={() => handleShare('email', selectedArticle)}
                      className="flex items-center gap-3 p-4 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors col-span-2"
                    >
                      <FaEnvelope className="text-xl" />
                      <span className="font-semibold">Email</span>
                    </button>
                  </div>

                  {/* Copy Link */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-600 mb-2">Atau salin link artikel:</p>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-sm text-gray-600 truncate">
                        https://ecocare.id/artikel/{selectedArticle.id}
                      </div>
                      <button
                        onClick={() => copyToClipboard(`https://ecocare.id/artikel/${selectedArticle.id}`)}
                        className="px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2"
                      >
                        {copied ? <FaCheckCircle /> : <FaCopy />}
                        <span className="hidden md:inline">{copied ? 'Tersalin!' : 'Salin'}</span>
                      </button>
                    </div>
                    {copied && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-green-600 text-sm mt-2 text-center"
                      >
                        ✓ Link berhasil disalin!
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Success Notification */}
      <AnimatePresence>
        {shareSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-2"
          >
            <FaCheckCircle />
            <span>Artikel berhasil dibagikan! 🎉</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Article Modal (existing code) */}
      <AnimatePresence>
        {showModal && selectedArticle && !showShareModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-10 z-50 overflow-hidden"
            >
              <div className="bg-white rounded-3xl shadow-2xl w-full h-full flex flex-col overflow-hidden">
                {/* Header Image */}
                <div className="relative h-64 md:h-80 overflow-hidden flex-shrink-0">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-lg z-10"
                  >
                    <FaTimes size={20} />
                  </button>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                    {selectedArticle.category}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-20 right-4 flex flex-col gap-2 z-10">
                    <div 
                      className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer hover:bg-white transition-colors shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLike(selectedArticle.id, e)
                        setSelectedArticle(prev => ({
                          ...prev,
                          likes: prev.likes + (likedArticles[selectedArticle.id] ? -1 : 1)
                        }))
                      }}
                    >
                      {likedArticles[selectedArticle.id] ? (
                        <FaHeart className="text-red-500 text-lg animate-pingOnce" />
                      ) : (
                        <FaRegHeart className="text-red-500 text-lg" />
                      )}
                      <span className="text-gray-700">{selectedArticle.likes}</span>
                    </div>
                    
                    <div 
                      className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer hover:bg-white transition-colors shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation()
                        openShareModal(e, selectedArticle)
                      }}
                    >
                      <FaShare className="text-blue-500 text-lg" />
                      <span className="text-gray-700">Bagikan</span>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                      {selectedArticle.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm md:text-base drop-shadow">
                      <span className="flex items-center gap-1">
                        <FaUser /> {selectedArticle.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendar /> {selectedArticle.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaHeart className="text-red-400" /> {selectedArticle.likes} suka
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content - Scrollable */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-8">
                    <div className="max-w-3xl mx-auto">
                      {/* Read Time & Actions */}
                      <div className="flex items-center justify-between mb-8">
                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                          Waktu baca: {selectedArticle.readTime}
                        </span>
                        <div className="flex gap-2">
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleBookmark(selectedArticle.id, e)
                            }}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                                      ${bookmarkedArticles[selectedArticle.id] 
                                        ? 'bg-green-100 text-green-600' 
                                        : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600'}`}
                          >
                            <FaBookmark />
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => openShareModal(e, selectedArticle)}
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition-colors"
                          >
                            <FaShare />
                          </motion.button>
                        </div>
                      </div>

                      {/* Full Description */}
                      <div className="prose prose-lg max-w-none">
                        {selectedArticle.fullDescription.split('\n').map((paragraph, idx) => {
                          if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                            return (
                              <h3 key={idx} className="text-xl font-bold text-green-700 mt-6 mb-3">
                                {paragraph.replace(/\*\*/g, '')}
                              </h3>
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
                              <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                                {paragraph}
                              </p>
                            )
                          }
                          return null
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Artikel