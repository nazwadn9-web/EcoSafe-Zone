import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaCalendar, FaUser, FaArrowRight, FaTimes, FaShare, 
  FaFacebook, FaTwitter, FaWhatsapp, FaTelegram, 
  FaEnvelope, FaCopy, FaShareAlt, FaCheckCircle,
  FaClock, FaLeaf,
  FaRecycle, FaSeedling, FaGlobeAsia,
  FaBookOpen, FaTree, FaHeart, FaStar,
  FaSprout, FaTint, FaSun, FaBug,
  FaApple, FaCarrot, FaSeedling as FaSproutIcon,
  FaArrowLeft
} from 'react-icons/fa'
import { GiPlantRoots, GiEarthAmerica, GiFruitTree } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Artikel = () => {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const [shareSuccess, setShareSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState('semua')
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredShare, setHoveredShare] = useState(null)
  const [activeInfoTab, setActiveInfoTab] = useState('manfaat')
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  
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
      authorRole: 'Environmental Specialist',
      authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: '15 Mar 2024',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b',
      category: 'Edukasi',
      readTime: '5 menit',
      shares: 45,
      relatedArticles: [2, 3, 4]
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
      authorRole: 'Agricultural Expert',
      authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: '10 Mar 2024',
      image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e',
      category: 'Tips',
      readTime: '7 menit',
      shares: 32,
      relatedArticles: [1, 3, 5]
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
      authorRole: 'Environmental Consultant',
      authorImage: 'https://randomuser.me/api/portraits/men/46.jpg',
      date: '5 Mar 2024',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778bdf',
      category: 'Edukasi',
      readTime: '8 menit',
      shares: 78,
      relatedArticles: [1, 2, 6]
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
      authorRole: 'Lifestyle Blogger',
      authorImage: 'https://randomuser.me/api/portraits/women/65.jpg',
      date: '28 Feb 2024',
      image: 'https://images.unsplash.com/photo-1545161296-3c0c1ebfccb8',
      category: 'Gaya Hidup',
      readTime: '6 menit',
      shares: 56,
      relatedArticles: [2, 5, 6]
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
      authorRole: 'Creative Recycler',
      authorImage: 'https://randomuser.me/api/portraits/men/52.jpg',
      date: '20 Feb 2024',
      image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40',
      category: 'Kreatif',
      readTime: '7 menit',
      shares: 89,
      relatedArticles: [1, 3, 4]
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
      authorRole: 'Environmental Activist',
      authorImage: 'https://randomuser.me/api/portraits/women/68.jpg',
      date: '15 Feb 2024',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      category: 'Lingkungan',
      readTime: '6 menit',
      shares: 34,
      relatedArticles: [2, 3, 5]
    },
  ])

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

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  const filteredArticles = articles.filter(article => {
    if (activeTab === 'semua') return true
    return article.category === activeTab
  }).filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
                <FaSprout className="text-3xl mx-auto mb-2 text-yellow-300" />
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
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 
                       rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <FaBookOpen className="text-4xl text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Artikel & <span className="text-green-600">Berita</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Informasi terkini seputar lingkungan dan gaya hidup berkelanjutan
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-full border-2 border-gray-200 
                         focus:border-green-500 focus:outline-none transition-colors
                         bg-white/80 backdrop-blur-sm shadow-lg"
              />
              <FaLeaf className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500 text-xl" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeTab === category.value
              return (
                <motion.button
                  key={category.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(category.value)}
                  className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2
                           transition-all duration-300 ${
                    isActive 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-green-50'
                  }`}
                >
                  <Icon />
                  {category.name}
                </motion.button>
              )
            })}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => {
              const CategoryIcon = getCategoryIcon(article.category)
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl 
                           overflow-hidden cursor-pointer transition-all duration-300"
                  onClick={() => openArticle(article)}
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm 
                                  px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <CategoryIcon className="text-green-600" />
                      <span className="text-gray-700">{article.category}</span>
                    </div>
                    
                    {/* Enhanced Share Button */}
                    <motion.div 
                      className="absolute top-4 right-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={() => setHoveredShare(article.id)}
                      onHoverEnd={() => setHoveredShare(null)}
                    >
                      <div 
                        className="relative"
                        onClick={(e) => openShareModal(e, article)}
                      >
                        {/* Pulse Animation */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-blue-400"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Main Button */}
                        <motion.div
                          className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 
                                   rounded-full flex items-center justify-center cursor-pointer
                                   shadow-lg hover:shadow-xl transition-all z-10"
                          animate={{
                            rotate: hoveredShare === article.id ? [0, 15, -15, 0] : 0
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <FaShare className="text-white text-lg" />
                          
                          {/* Sparkle Effect on Hover */}
                          {hoveredShare === article.id && (
                            <>
                              <motion.div
                                className="absolute -top-1 -right-1 text-yellow-300"
                                initial={{ scale: 0, rotate: 0 }}
                                animate={{ scale: 1, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                <FaStar className="text-xs" />
                              </motion.div>
                              <motion.div
                                className="absolute -bottom-1 -left-1 text-yellow-300"
                                initial={{ scale: 0, rotate: 0 }}
                                animate={{ scale: 1, rotate: -360 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                              >
                                <FaStar className="text-xs" />
                              </motion.div>
                            </>
                          )}
                        </motion.div>

                        {/* Tooltip */}
                        <AnimatePresence>
                          {hoveredShare === article.id && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute -bottom-8 right-0 bg-gray-800 text-white 
                                       text-xs px-2 py-1 rounded whitespace-nowrap"
                            >
                              Bagikan Artikel
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Author Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={article.authorImage}
                        alt={article.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{article.author}</h4>
                        <p className="text-xs text-gray-500">{article.authorRole}</p>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 
                                 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <FaCalendar /> {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock /> {article.readTime}
                      </span>
                    </div>
                    
                    {/* Read More Button */}
                    <button className="text-green-600 font-semibold flex items-center gap-2 
                                     group/btn hover:gap-3 transition-all">
                      Baca Selengkapnya
                      <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              )
            })}
          </div>

          {/* Load More Button */}
          {filteredArticles.length > 0 && (
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 
                       md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg w-full z-50"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <FaShareAlt /> Bagikan Artikel
                    </h2>
                    <button
                      onClick={closeShareModal}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center 
                               justify-center hover:bg-white/30 transition-colors"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <p className="text-sm opacity-90 mt-2 line-clamp-1">{selectedArticle.title}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Share Buttons */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                      onClick={() => handleShare('facebook', selectedArticle)}
                      className="flex items-center gap-3 p-4 bg-blue-600 text-white 
                               rounded-xl hover:bg-blue-700 transition-all hover:scale-105"
                    >
                      <FaFacebook className="text-xl" />
                      <span className="font-semibold">Facebook</span>
                    </button>
                    
                    <button
                      onClick={() => handleShare('twitter', selectedArticle)}
                      className="flex items-center gap-3 p-4 bg-blue-400 text-white 
                               rounded-xl hover:bg-blue-500 transition-all hover:scale-105"
                    >
                      <FaTwitter className="text-xl" />
                      <span className="font-semibold">Twitter</span>
                    </button>
                    
                    <button
                      onClick={() => handleShare('whatsapp', selectedArticle)}
                      className="flex items-center gap-3 p-4 bg-green-500 text-white 
                               rounded-xl hover:bg-green-600 transition-all hover:scale-105"
                    >
                      <FaWhatsapp className="text-xl" />
                      <span className="font-semibold">WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={() => handleShare('telegram', selectedArticle)}
                      className="flex items-center gap-3 p-4 bg-blue-500 text-white 
                               rounded-xl hover:bg-blue-600 transition-all hover:scale-105"
                    >
                      <FaTelegram className="text-xl" />
                      <span className="font-semibold">Telegram</span>
                    </button>
                    
                    <button
                      onClick={() => handleShare('email', selectedArticle)}
                      className="col-span-2 flex items-center justify-center gap-3 p-4 
                               bg-gray-600 text-white rounded-xl hover:bg-gray-700 
                               transition-all hover:scale-105"
                    >
                      <FaEnvelope className="text-xl" />
                      <span className="font-semibold">Email</span>
                    </button>
                  </div>

                  {/* Copy Link */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-600 mb-2">Atau salin link artikel:</p>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-sm 
                                    text-gray-600 truncate">
                        https://ecocare.id/artikel/{selectedArticle.id}
                      </div>
                      <button
                        onClick={() => copyToClipboard(`https://ecocare.id/artikel/${selectedArticle.id}`)}
                        className="px-4 py-3 bg-green-600 text-white rounded-xl 
                                 hover:bg-green-700 transition-colors flex items-center gap-2"
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
            className="fixed bottom-4 right-4 bg-gradient-to-r from-green-600 to-emerald-600 
                     text-white px-6 py-3 rounded-full shadow-xl z-50 flex items-center gap-2"
          >
            <FaCheckCircle />
            <span>Artikel berhasil dibagikan! 🎉</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Article Detail Modal */}
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
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={selectedArticle.image}
                        alt={selectedArticle.title}
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
                        {React.createElement(getCategoryIcon(selectedArticle.category), { className: "text-lg" })}
                        {selectedArticle.category}
                      </div>

                      {/* Share Button in Modal */}
                      <motion.div 
                        className="absolute top-6 right-24 z-20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button
                          onClick={(e) => openShareModal(e, selectedArticle)}
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
                          {selectedArticle.title}
                        </h1>
                        
                        {/* Author & Meta */}
                        <div className="flex flex-wrap items-center gap-6">
                          <div className="flex items-center gap-3">
                            <img
                              src={selectedArticle.authorImage}
                              alt={selectedArticle.author}
                              className="w-12 h-12 rounded-full border-2 border-white"
                            />
                            <div>
                              <p className="font-semibold">{selectedArticle.author}</p>
                              <p className="text-sm text-white/80">{selectedArticle.authorRole}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-white/80">
                            <span className="flex items-center gap-1">
                              <FaCalendar /> {selectedArticle.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaClock /> {selectedArticle.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Article Content */}
                  <div className="p-12">
                    <div className="max-w-4xl mx-auto">
                      {/* Jika artikel adalah Kompos (id=2), tampilkan desain khusus */}
                      {selectedArticle.id === 2 ? (
                        <KomposDetail article={selectedArticle} />
                      ) : (
                        <>
                          {/* Full Description untuk artikel lain */}
                          <div className="prose prose-lg max-w-none">
                            {selectedArticle.fullDescription.split('\n').map((paragraph, idx) => {
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
                      )}

                      {/* Related Articles (untuk semua artikel) */}
                      <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Artikel Terkait</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          {selectedArticle.relatedArticles.map((id) => {
                            const related = articles.find(a => a.id === id)
                            if (!related) return null
                            return (
                              <motion.div
                                key={id}
                                whileHover={{ y: -5 }}
                                onClick={() => openArticle(related)}
                                className="bg-gray-50 rounded-xl p-4 cursor-pointer group"
                              >
                                <img
                                  src={related.image}
                                  alt={related.title}
                                  className="w-full h-32 object-cover rounded-lg mb-3"
                                />
                                <h4 className="font-semibold text-gray-800 group-hover:text-green-600 
                                           transition-colors line-clamp-2">
                                  {related.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">{related.date}</p>
                              </motion.div>
                            )
                          })}
                        </div>
                      </div>

                      {/* Like & Share Buttons */}
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
                          onClick={(e) => openShareModal(e, selectedArticle)}
                          className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold
                                   hover:bg-green-700 transition-all flex items-center gap-2"
                        >
                          <FaShare /> Bagikan ({selectedArticle.shares})
                        </motion.button>
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