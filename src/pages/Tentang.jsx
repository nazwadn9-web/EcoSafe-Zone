import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaLeaf, FaHands, FaHeart, FaTree, FaUsers, FaAward,
  FaHandHoldingHeart, FaEnvelope, FaWhatsapp, FaInstagram,
  FaYoutube, FaMapMarkerAlt, FaPhone, FaClock, FaPlay,
  FaTimes, FaSync, FaArrowDown, FaCheckCircle, FaBullseye,
  FaFacebook, FaTwitter
} from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'

const Tentang = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [pieces, setPieces] = useState([])
  const [isBroken, setIsBroken] = useState(false)
  const [currentImage, setCurrentImage] = useState(1)
  const [showNewImage, setShowNewImage] = useState(false)
  const [isTransforming, setIsTransforming] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const containerRef = useRef(null)
  const heroRef = useRef(null)

  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    { id: 2, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  ]

  const timeline = [
    { year: '2020', event: 'EcoCare didirikan', desc: 'Bermula dari kepedulian sekelompok pemuda terhadap lingkungan' },
    { year: '2021', event: 'Bank Sampah Pertama', desc: 'Membuka bank sampah pertama di Jakarta' },
    { year: '2022', event: 'Edukasi 100+ Sekolah', desc: 'Program edukasi lingkungan menjangkau lebih dari 100 sekolah' },
    { year: '2023', event: 'Ekspansi Nasional', desc: 'Hadir di 25 kota di Indonesia' },
    { year: '2024', event: '1 Juta Pohon', desc: 'Mencapai target 1 juta pohon tertanam' },
  ]

  const team = [
    { name: 'Dr. Andi Wijaya', role: 'Founder & CEO', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Rina Fitriani', role: 'Head of Education', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Budi Santoso', role: 'Program Director', image: 'https://randomuser.me/api/portraits/men/46.jpg' },
    { name: 'Siti Aisyah', role: 'Community Manager', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
  ]

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: 'Alamat', info: 'JL. DARUN NAIM, KARANGDUREN TENGARAN KAB. SEMARANG, Karangduren, Kec. Tengaran, Kab. Semarang, Jawa Tengah' },
    { icon: FaEnvelope, title: 'Email', info: 'nazwadn9a@gmail.com' },
    { icon: FaClock, title: 'Jam Operasional', info: 'Senin - Jumat, 08.00 - 17.00' },
  ]

  const socialMedia = [
    { icon: FaInstagram, name: 'Instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500', link: 'https://www.instagram.com/nasukacheese/' },
    { icon: FaFacebook, name: 'Facebook', color: 'bg-blue-600', link: 'https://www.facebook.com/profile.php?id=61578554922812' },
    { icon: FaTwitter, name: 'X / Twitter', color: 'bg-gray-900', link: 'https://x.com/mucitra61802' },
    { icon: FaYoutube, name: 'YouTube', color: 'bg-red-500', link: 'https://www.youtube.com/@Mecha-y6' },
  ]

  const misiItems = [
    'Mengedukasi masyarakat tentang pentingnya memilah sampah dengan benar',
    'Memfasilitasi program daur ulang yang berdampak di berbagai komunitas',
    'Mengadvokasi kebijakan lingkungan hidup yang berkelanjutan',
    'Membangun jejaring kolaborasi lintas sektor untuk dampak yang lebih luas',
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setShowButton(heroRef.current.getBoundingClientRect().bottom > 0)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTransform = () => {
    if (isTransforming) return
    setIsTransforming(true)
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const cols = 4, rows = 3
    const pw = rect.width / cols, ph = rect.height / rows
    const newPieces = []
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const d = 200 + Math.random() * 300
        newPieces.push({
          id: `${i}-${j}`, x: i * pw, y: j * ph, width: pw, height: ph,
          translateX: (Math.random() - 0.5) * d * 1.5,
          translateY: (Math.random() - 0.5) * d,
          rotate: (Math.random() - 0.5) * 180,
          scale: Math.random() * 0.7 + 0.3,
          opacity: Math.random() * 0.7 + 0.3,
        })
      }
    }
    setPieces(newPieces)
    setIsBroken(true)
    setTimeout(() => {
      setShowNewImage(true)
      setTimeout(() => {
        setIsBroken(false); setShowNewImage(false); setPieces([])
        setCurrentImage(currentImage === 1 ? 2 : 1)
        setIsTransforming(false)
      }, 1200)
    }, 600)
  }

  const handleJoinNow = () => {
    document.getElementById('komunitas')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-12 overflow-hidden">

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsVideoOpen(false)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}>
              <button onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                <FaTimes />
              </button>
              <iframe className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video EcoCare" allow="autoplay" allowFullScreen />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden">
        <div ref={containerRef} className="absolute inset-0">
          {!showNewImage && !isBroken && (
            <div className="w-full h-full relative">
              <img src={images.find(i => i.id === currentImage).url} alt="bg" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>
          )}
          {isBroken && !showNewImage && pieces.map(piece => (
            <motion.div key={piece.id} className="absolute bg-cover bg-no-repeat"
              style={{
                left: piece.x, top: piece.y, width: piece.width, height: piece.height,
                backgroundImage: `url(${images.find(i => i.id === currentImage).url})`,
                backgroundPosition: `-${piece.x}px -${piece.y}px`,
                backgroundSize: containerRef.current ? `${containerRef.current.offsetWidth}px ${containerRef.current.offsetHeight}px` : 'cover',
              }}
              initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
              animate={{ x: piece.translateX, y: piece.translateY, rotate: piece.rotate, scale: piece.scale, opacity: piece.opacity }}
              transition={{ duration: 0.6, ease: "easeOut" }} />
          ))}
          {showNewImage && (
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="w-full h-full relative">
              <img src={images.find(i => i.id === (currentImage === 1 ? 2 : 1)).url} alt="bg" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </motion.div>
          )}
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Selamatkan Bumi,<br /><span className="text-green-400">Mulai dari Kita</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-white/90 mb-7 max-w-2xl mx-auto">
              Bersama-sama kita wujudkan Indonesia yang bersih, hijau, dan berkelanjutan melalui aksi nyata dan kepedulian terhadap lingkungan.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={handleJoinNow}
                className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold text-sm sm:text-base hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-lg">
                <FaHandHoldingHeart /> Gabung Sekarang
              </button>
              <button onClick={() => setIsVideoOpen(true)}
                className="px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white rounded-full font-semibold text-sm sm:text-base hover:bg-white/30 transition-all flex items-center justify-center gap-2">
                <FaPlay /> Lihat Video
              </button>
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {showButton && (
            <motion.button onClick={handleTransform} disabled={isTransforming}
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
              className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-30 group">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-blue-500/30" />
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50 group-hover:from-blue-600 group-hover:to-green-600 transition-all">
                {isTransforming
                  ? <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}><FaSync className="text-white text-sm sm:text-lg" /></motion.div>
                  : <GiEarthAmerica className="text-white text-base sm:text-xl" />}
              </div>
              <div className="hidden sm:block absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                {isTransforming ? 'Loading...' : 'Ganti Gambar'}
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button onClick={() => document.getElementById('visi-misi')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors">
          <FaArrowDown className="text-lg sm:text-xl" />
        </motion.button>
      </section>

      {/* ===== VISI & MISI ===== */}
      <section id="visi-misi" className="scroll-mt-20 py-10 sm:py-16 bg-white">
        <div className="container-custom max-w-5xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full mb-3 tracking-wider uppercase">
              Tentang EcoCare
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Visi & <span className="text-green-600">Misi</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-gray-500 max-w-xl mx-auto">
              Fondasi dan tujuan kami dalam berkontribusi untuk lingkungan hidup yang lebih baik
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7">

            {/* VISI CARD */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-transform duration-300" />
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-green-100 h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                    <FaBullseye className="text-white text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-widest mb-0.5">Visi Kami</p>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-snug">Indonesia Hijau 2030</h3>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-green-200 via-green-100 to-transparent mb-4 sm:mb-5" />

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 sm:mb-6">
                  Menciptakan Indonesia yang{' '}
                  <span className="font-semibold text-green-700">bersih, hijau, dan berkelanjutan</span>{' '}
                  melalui kesadaran kolektif dalam pengelolaan sampah dan pelestarian lingkungan untuk generasi masa depan.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Lingkungan Bersih', 'Generasi Masa Depan', 'Berkelanjutan'].map((tag, i) => (
                    <span key={i} className="text-[10px] sm:text-xs bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* MISI CARD */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-transform duration-300" />
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-blue-100 h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                    <FaHands className="text-white text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-widest mb-0.5">Misi Kami</p>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-snug">Aksi Nyata Bersama</h3>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-blue-200 via-blue-100 to-transparent mb-4 sm:mb-5" />

                <ul className="space-y-3 sm:space-y-3.5">
                  {misiItems.map((item, idx) => (
                    <motion.li key={idx} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }} className="flex items-start gap-2.5 sm:gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheckCircle className="text-green-600 text-[9px] sm:text-[11px]" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <div className="bg-gradient-to-b from-transparent via-green-50 to-transparent py-8 sm:py-12 mb-12">
        <div className="container-custom px-4">
          <div className="text-center mb-6 sm:mb-8">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Perjalanan <span className="text-green-600">Kami</span>
            </motion.h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Setiap langkah adalah bagian dari perubahan</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-300 via-green-500 to-green-300 rounded-full" />
            {timeline.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex items-center mb-4 sm:mb-6 ${idx % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} justify-center`}>
                <div className="sm:hidden w-full">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-2">{item.year}</span>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">{item.event}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
                <div className={`hidden sm:block w-5/12 ${idx % 2 === 0 ? 'text-right pr-6' : 'pl-6'}`}>
                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-2">{item.year}</span>
                    <h3 className="text-base font-bold text-gray-800 mb-1">{item.event}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-green-500 items-center justify-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div className="container-custom mb-12 px-4">
        <div className="text-center mb-6 sm:mb-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Nilai-Nilai <span className="text-green-600">Kami</span>
          </motion.h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Prinsip yang menjadi fondasi setiap langkah kami</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {[
            { icon: FaLeaf, title: 'Edukasi', desc: 'Memberikan pemahaman yang benar tentang lingkungan melalui program edukasi', color: 'from-green-400 to-green-600', delay: 0.1 },
            { icon: FaHeart, title: 'Kepedulian', desc: 'Membangun rasa cinta dan kepedulian terhadap alam sekitar', color: 'from-red-400 to-pink-500', delay: 0.2 },
            { icon: FaHands, title: 'Kolaborasi', desc: 'Bekerja sama dengan berbagai pihak untuk dampak yang lebih besar', color: 'from-blue-400 to-blue-600', delay: 0.3 },
          ].map((item, index) => (
            <motion.div key={index} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: item.delay }} whileHover={{ y: -5 }} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all h-full">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl sm:text-2xl group-hover:rotate-6 transition-transform`}>
                  <item.icon />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 text-center">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">{item.desc}</p>
                <div className="mt-3 sm:mt-4 flex justify-center">
                  <div className="w-6 sm:w-8 h-1 bg-green-500 rounded-full group-hover:w-12 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="bg-gradient-to-t from-green-50 to-transparent py-8 sm:py-12 mb-12">
        <div className="container-custom px-4">
          <div className="text-center mb-6 sm:mb-8">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Tim <span className="text-green-600">Kami</span>
            </motion.h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Para pegiat lingkungan yang berdedikasi</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {team.map((member, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }} whileHover={{ y: -3 }}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-all">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full animate-pulse" />
                  <img src={member.image} alt={member.name} className="relative w-full h-full rounded-full object-cover border-2 sm:border-4 border-white" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-800">{member.name}</h3>
                <p className="text-[10px] sm:text-xs text-green-600 font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AWARDS */}
      <div className="container-custom mb-12 px-4">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl sm:rounded-[40px] p-6 sm:p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-white rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white rounded-full" />
          </div>
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="relative z-10">
            <FaAward className="text-3xl sm:text-5xl mx-auto mb-2 sm:mb-3" />
            <h2 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">Penghargaan</h2>
            <p className="text-sm sm:text-lg mb-1">Penghargaan Lingkungan Hidup 2023</p>
            <p className="text-xs sm:text-sm opacity-90">Kementerian Lingkungan Hidup & Kehutanan</p>
            <p className="text-[10px] sm:text-xs opacity-75 mt-2 sm:mt-3">Atas dedikasi dalam pengelolaan sampah dan pelestarian lingkungan</p>
          </motion.div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="container-custom mb-12 px-4">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">

          {/* Contact Info Card */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-[30px] p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
              <FaHandHoldingHeart className="text-green-600 text-lg sm:text-xl" />
              Hubungi <span className="text-green-600">Kami</span>
            </h2>
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {contactInfo.map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-green-50 transition-colors">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="text-xs sm:text-sm text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-700">{item.title}</h3>
                    <p className="text-[10px] sm:text-xs text-gray-600 break-words">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-2">
              <motion.a href="https://wa.me/6285811463202" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex-1 bg-green-600 text-white py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm hover:bg-green-700 transition-all flex items-center justify-center gap-1.5">
                <FaWhatsapp className="text-sm" /> WhatsApp
              </motion.a>
              <motion.a href="mailto:nazwadn9a@gmail.com"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex-1 bg-blue-600 text-white py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-1.5">
                <FaEnvelope className="text-sm" /> Email
              </motion.a>
            </div>
          </motion.div>

          {/* Community / Social Card */}
          <motion.div id="komunitas" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl sm:rounded-[30px] p-4 sm:p-6 shadow-xl text-white relative overflow-hidden scroll-mt-20">
            <div className="absolute inset-0 opacity-10">
              {[...Array(4)].map((_, i) => (
                <motion.div key={i} animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 8, repeat: Infinity, delay: i * 2 }}
                  className="absolute" style={{ top: `${25 * i}%`, left: `${20 * i}%` }}>
                  <FaLeaf className="text-white/30 text-xl sm:text-2xl" />
                </motion.div>
              ))}
            </div>
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-1">Ikuti Kami di</h2>
              <p className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 text-yellow-300">Media Sosial</p>
              <p className="text-white/90 mb-4 text-xs sm:text-sm">
                Ikuti kami untuk mendapatkan update terbaru dan bergabung dengan ribuan relawan lainnya!
              </p>

              {/* Social Media Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
                {socialMedia.map((social, idx) => (
                  <motion.a key={idx} href={social.link}
                    target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                    className={`${social.color} p-2 sm:p-3 rounded-lg sm:rounded-xl text-white flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all text-xs sm:text-sm`}>
                    <social.icon className="text-sm sm:text-lg flex-shrink-0" />
                    <span className="truncate">{social.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2">
                {/* Join WhatsApp Community */}
                <motion.a href="https://wa.me/6285811463202" target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="w-full bg-white text-green-700 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                  <FaWhatsapp className="text-green-600 group-hover:rotate-12 transition-transform" />
                  Gabung Komunitas Kami
                </motion.a>
              </div>

              <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-white/80 text-[10px] sm:text-xs">
                <FaUsers className="text-yellow-300" />
                <span className="font-semibold">5.000+ anggota aktif</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="container-custom mb-12 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-800 to-green-900 rounded-2xl sm:rounded-[40px] p-6 sm:p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            {[...Array(6)].map((_, i) => (
              <motion.div key={i} animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, delay: i * 1.5 }}
                className="absolute" style={{ top: `${15 * i}%`, left: `${15 * i}%` }}>
                <FaLeaf className="text-white text-base sm:text-xl" />
              </motion.div>
            ))}
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Dapatkan Update Terbaru</h2>
            <p className="text-xs sm:text-sm text-white/80 mb-4 sm:mb-5">
              Berlangganan newsletter kami untuk mendapatkan informasi terbaru tentang program dan kegiatan lingkungan
            </p>
            <div className="flex flex-row gap-2 max-w-md mx-auto">
              <input type="email" placeholder="Email Anda"
                className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300" />
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="px-4 sm:px-5 py-2 sm:py-3 bg-yellow-500 text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-yellow-600 transition-all whitespace-nowrap flex-shrink-0">
                Berlangganan
              </motion.button>
            </div>
            <p className="text-[10px] sm:text-xs text-white/60 mt-3 sm:mt-4">
              *Kami tidak akan mengirim spam. Berhenti berlangganan kapan saja.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Tentang