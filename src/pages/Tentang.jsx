import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaLeaf, 
  FaHands, 
  FaHeart, 
  FaTree, 
  FaUsers,
  FaAward,
  FaHandHoldingHeart,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaPlay,
  FaTimes,
  FaImage,
  FaSync,
  FaArrowDown
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

  // Dua gambar yang akan bergantian
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Hutan'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Gunung'
    }
  ]

  // Timeline data
  const timeline = [
    { year: '2020', event: 'EcoCare didirikan', desc: 'Bermula dari kepedulian sekelompok pemuda terhadap lingkungan' },
    { year: '2021', event: 'Bank Sampah Pertama', desc: 'Membuka bank sampah pertama di Jakarta' },
    { year: '2022', event: 'Edukasi 100+ Sekolah', desc: 'Program edukasi lingkungan menjangkau lebih dari 100 sekolah' },
    { year: '2023', event: 'Ekspansi Nasional', desc: 'Hadir di 25 kota di Indonesia' },
    { year: '2024', event: '1 Juta Pohon', desc: 'Mencapai target 1 juta pohon tertanam' },
  ]

  // Team members
  const team = [
    { name: 'Dr. Andi Wijaya', role: 'Founder & CEO', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Rina Fitriani', role: 'Head of Education', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Budi Santoso', role: 'Program Director', image: 'https://randomuser.me/api/portraits/men/46.jpg' },
    { name: 'Siti Aisyah', role: 'Community Manager', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
  ]

  // Contact info
  const contactInfo = [
    { icon: FaMapMarkerAlt, title: 'Alamat', info: 'Jl. Hijau No. 123, Jakarta Selatan' },
    { icon: FaPhone, title: 'Telepon', info: '(021) 1234-5678' },
    { icon: FaEnvelope, title: 'Email', info: 'info@ecocare.id' },
    { icon: FaClock, title: 'Jam Operasional', info: 'Senin - Jumat, 08.00 - 17.00' },
  ]

  // Social media
  const socialMedia = [
    { icon: FaInstagram, name: 'Instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500', link: 'https://instagram.com/ecocare' },
    { icon: FaWhatsapp, name: 'WhatsApp', color: 'bg-green-500', link: 'https://wa.me/62123456789' },
    { icon: FaYoutube, name: 'YouTube', color: 'bg-red-500', link: 'https://youtube.com/ecocare' },
    { icon: FaUsers, name: 'Komunitas', color: 'bg-blue-500', link: '#komunitas' },
  ]

  // Handle scroll to hide button
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom
        setShowButton(heroBottom > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle image transformation effect
  const handleTransform = () => {
    if (isTransforming) return
    
    setIsTransforming(true)
    
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const cols = 4
    const rows = 3
    const pieceWidth = rect.width / cols
    const pieceHeight = rect.height / rows

    const newPieces = []

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const angle = (Math.random() - 0.5) * 180
        const distance = 200 + Math.random() * 300
        
        newPieces.push({
          id: `${i}-${j}`,
          x: i * pieceWidth,
          y: j * pieceHeight,
          width: pieceWidth,
          height: pieceHeight,
          translateX: (Math.random() - 0.5) * distance * 1.5,
          translateY: (Math.random() - 0.5) * distance,
          rotate: angle,
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
        handleReset()
        setCurrentImage(currentImage === 1 ? 2 : 1)
        setIsTransforming(false)
      }, 1200)
    }, 600)
  }

  // Navigasi functions
  const handleJoinNow = () => {
    const komunitasSection = document.getElementById('komunitas')
    if (komunitasSection) {
      komunitasSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/ecocare-community', '_blank')
  }

  // Scroll ke section berikutnya
  const scrollToNext = () => {
    const nextSection = document.getElementById('visi-misi')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Reset broken effect
  const handleReset = () => {
    setIsBroken(false)
    setShowNewImage(false)
    setPieces([])
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-12 overflow-hidden"
    >
      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <FaTimes />
              </button>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video Profile EcoCare"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LANDING 1: Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div 
          ref={containerRef}
          className="absolute inset-0"
        >
          {!showNewImage && !isBroken && (
            <motion.div className="w-full h-full relative">
              <img 
                src={images.find(img => img.id === currentImage).url}
                alt="Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </motion.div>
          )}

          {isBroken && !showNewImage && (
            <>
              {pieces.map((piece) => (
                <motion.div
                  key={piece.id}
                  className="absolute bg-cover bg-no-repeat"
                  style={{
                    left: piece.x,
                    top: piece.y,
                    width: piece.width,
                    height: piece.height,
                    backgroundImage: `url(${images.find(img => img.id === currentImage).url})`,
                    backgroundPosition: `-${piece.x}px -${piece.y}px`,
                    backgroundSize: containerRef.current ? `${containerRef.current.offsetWidth}px ${containerRef.current.offsetHeight}px` : 'cover',
                  }}
                  initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                  animate={{ 
                    x: piece.translateX, 
                    y: piece.translateY, 
                    rotate: piece.rotate,
                    scale: piece.scale,
                    opacity: piece.opacity,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              ))}
            </>
          )}

          {showNewImage && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full relative"
            >
              <img 
                src={images.find(img => img.id === (currentImage === 1 ? 2 : 1)).url}
                alt="New Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
            >
              Selamatkan Bumi,
              <br />
              <span className="text-green-400">
                Mulai dari Kita
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            >
              Bersama-sama kita wujudkan Indonesia yang bersih, hijau, dan berkelanjutan 
              melalui aksi nyata dan kepedulian terhadap lingkungan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            >
              <button
                onClick={handleJoinNow}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-green-600 text-white rounded-full font-semibold text-sm sm:text-base
                         hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <FaHandHoldingHeart className="text-sm sm:text-base" />
                Gabung Sekarang
              </button>
              
              <button
                onClick={() => setIsVideoOpen(true)}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/20 backdrop-blur-sm border-2 border-white/40 
                         text-white rounded-full font-semibold text-sm sm:text-base
                         hover:bg-white/30 transition-all flex items-center justify-center gap-2"
              >
                <FaPlay className="text-sm sm:text-base" />
                Lihat Video
              </button>
            </motion.div>
          </div>
        </div>

        {/* Transform Button - Responsif */}
        <AnimatePresence>
          {showButton && (
            <motion.button
              onClick={handleTransform}
              disabled={isTransforming}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-30 group"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-blue-500/30"
              />
              
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full 
                            flex items-center justify-center shadow-lg border-2 border-white/50
                            group-hover:from-blue-600 group-hover:to-green-600 transition-all">
                {isTransforming ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                    <FaSync className="text-white text-sm sm:text-lg" />
                  </motion.div>
                ) : (
                  <GiEarthAmerica className="text-white text-base sm:text-xl" />
                )}
              </div>
              
              {/* Tooltip - Sembunyikan di mobile, tampil di desktop */}
              <div className="hidden sm:block absolute right-full mr-2 top-1/2 -translate-y-1/2
                            bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                {isTransforming ? 'Loading...' : 'Ganti Gambar'}
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Scroll Down - Responsif */}
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        >
          <FaArrowDown className="text-lg sm:text-xl" />
        </motion.button>
      </section>

      {/* Vision Mission Section - Yang Anda Sukai */}
      <div id="visi-misi" className="container-custom scroll-mt-20 mb-12 px-4">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            Visi & <span className="text-green-600">Misi</span>
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Fondasi dan tujuan kami dalam berkontribusi untuk lingkungan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Vision Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl sm:rounded-[30px] transform rotate-2 group-hover:rotate-3 transition-transform"></div>
            <div className="relative bg-white rounded-2xl sm:rounded-[30px] p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <FaTree className="text-2xl sm:text-3xl text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Visi Kami</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                Menciptakan Indonesia yang bersih, hijau, dan berkelanjutan melalui 
                kesadaran kolektif dalam pengelolaan sampah dan pelestarian lingkungan 
                untuk generasi masa depan.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <div className="w-6 sm:w-8 h-1 bg-green-600 rounded-full"></div>
                <span className="text-xs sm:text-sm font-semibold">Masa Depan Lebih Hijau</span>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl sm:rounded-[30px] transform -rotate-2 group-hover:-rotate-3 transition-transform"></div>
            <div className="relative bg-white rounded-2xl sm:rounded-[30px] p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <FaHands className="text-2xl sm:text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Misi Kami</h3>
              <ul className="space-y-1 sm:space-y-2">
                {[
                  'Mengedukasi masyarakat tentang pentingnya memilah sampah',
                  'Memfasilitasi program daur ulang di berbagai komunitas',
                  'Mengadvokasi kebijakan lingkungan yang berkelanjutan',
                  'Membangun jejaring kolaborasi dengan berbagai pihak',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2 text-xs sm:text-sm"
                  >
                    <span className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full"></span>
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section - Yang Anda Sukai */}
      <div className="bg-gradient-to-b from-transparent via-green-50 to-transparent py-8 sm:py-12 mb-12">
        <div className="container-custom px-4">
          <div className="text-center mb-6 sm:mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3"
            >
              Perjalanan <span className="text-green-600">Kami</span>
            </motion.h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Setiap langkah adalah bagian dari perubahan
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line - Sembunyikan di mobile */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-300 via-green-500 to-green-300 rounded-full"></div>

            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex items-center mb-4 sm:mb-6 ${
                  idx % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
                } justify-center`}
              >
                {/* Mobile layout - stack vertically */}
                <div className="sm:hidden w-full">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">{item.event}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className={`hidden sm:block w-5/12 ${idx % 2 === 0 ? 'text-right pr-6' : 'pl-6'}`}>
                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-base font-bold text-gray-800 mb-1">{item.event}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
                
                {/* Timeline dot - Sembunyikan di mobile */}
                <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-3 border-green-500 items-center justify-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section - Yang Anda Sukai */}
      <div className="container-custom mb-12 px-4">
        <div className="text-center mb-6 sm:mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            Nilai-Nilai <span className="text-green-600">Kami</span>
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Prinsip yang menjadi fondasi setiap langkah kami
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {[
            { 
              icon: FaLeaf, 
              title: 'Edukasi', 
              desc: 'Memberikan pemahaman yang benar tentang lingkungan melalui program edukasi berkelanjutan',
              color: 'from-green-400 to-green-600',
              delay: 0.1
            },
            { 
              icon: FaHeart, 
              title: 'Kepedulian', 
              desc: 'Membangun rasa cinta dan kepedulian terhadap alam sekitar',
              color: 'from-red-400 to-pink-500',
              delay: 0.2
            },
            { 
              icon: FaHands, 
              title: 'Kolaborasi', 
              desc: 'Bekerja sama dengan berbagai pihak untuk dampak yang lebih besar',
              color: 'from-blue-400 to-blue-600',
              delay: 0.3
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: item.delay }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl sm:rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl sm:rounded-[30px] p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all h-full">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br ${item.color} 
                                flex items-center justify-center text-white text-xl sm:text-2xl
                                group-hover:rotate-6 transition-transform`}>
                  <item.icon />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 text-center">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">{item.desc}</p>
                <div className="mt-3 sm:mt-4 flex justify-center">
                  <div className="w-6 sm:w-8 h-1 bg-green-500 rounded-full group-hover:w-8 sm:group-hover:w-12 transition-all"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section - Yang Anda Sukai */}
      <div className="bg-gradient-to-t from-green-50 to-transparent py-8 sm:py-12 mb-12">
        <div className="container-custom px-4">
          <div className="text-center mb-6 sm:mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3"
            >
              Tim <span className="text-green-600">Kami</span>
            </motion.h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Para pegiat lingkungan yang berdedikasi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full animate-pulse"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full mx-auto rounded-full object-cover border-2 sm:border-3 border-white"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-800">{member.name}</h3>
                <p className="text-[10px] sm:text-xs text-green-600 font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards Section - Yang Anda Sukai */}
      <div className="container-custom mb-12 px-4">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl sm:rounded-[40px] p-6 sm:p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-white rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white rounded-full"></div>
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="relative z-10"
          >
            <FaAward className="text-3xl sm:text-5xl mx-auto mb-2 sm:mb-3" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Penghargaan</h2>
            <p className="text-sm sm:text-base md:text-lg mb-1">Penghargaan Lingkungan Hidup 2023</p>
            <p className="text-xs sm:text-sm opacity-90">Kementerian Lingkungan Hidup & Kehutanan</p>
            <p className="text-[10px] sm:text-xs opacity-75 mt-2 sm:mt-3">Atas dedikasi dalam pengelolaan sampah dan pelestarian lingkungan</p>
          </motion.div>
        </div>
      </div>

      {/* Contact & Social Media Section - Yang Anda Sukai */}
      <div className="container-custom mb-12 px-4">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-[30px] p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
              <FaHandHoldingHeart className="text-green-600 text-lg sm:text-xl" />
              Hubungi <span className="text-green-600">Kami</span>
            </h2>
            
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-xs sm:text-base text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-700">{item.title}</h3>
                    <p className="text-[10px] sm:text-xs text-gray-600">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex gap-2">
              <motion.a
                href="https://wa.me/62123456789"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 bg-green-600 text-white py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm
                         hover:bg-green-700 transition-all flex items-center justify-center gap-1 sm:gap-2"
              >
                <FaWhatsapp className="text-xs sm:text-sm" />
                <span className="hidden xs:inline">WhatsApp</span>
                <span className="xs:hidden">WA</span>
              </motion.a>
              <motion.a
                href="mailto:info@ecocare.id"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 bg-blue-600 text-white py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm
                         hover:bg-blue-700 transition-all flex items-center justify-center gap-1 sm:gap-2"
              >
                <FaEnvelope className="text-xs sm:text-sm" />
                <span className="hidden xs:inline">Email</span>
                <span className="xs:hidden">@</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Social Media & Join Community - dengan ID komunitas */}
          <motion.div
            id="komunitas"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl sm:rounded-[30px] p-4 sm:p-6 shadow-xl text-white relative overflow-hidden scroll-mt-20"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, delay: i * 2 }}
                    className="absolute"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  >
                    <FaLeaf className="text-white/30 text-xl sm:text-2xl" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-1">Bergabung dengan</h2>
              <p className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 text-yellow-300">Komunitas Kami</p>
              
              <p className="text-white/90 mb-4 sm:mb-5 text-xs sm:text-sm">
                Ikuti kami di media sosial untuk mendapatkan update terbaru 
                dan bergabung dengan ribuan relawan lainnya!
              </p>

              {/* Social Media Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
                {socialMedia.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target={social.name !== 'Komunitas' ? '_blank' : undefined}
                    rel={social.name !== 'Komunitas' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`${social.color} p-2 sm:p-3 rounded-lg sm:rounded-xl text-white flex items-center justify-center gap-1 sm:gap-2
                              shadow-md hover:shadow-lg transition-all text-xs sm:text-sm`}
                  >
                    <social.icon className="text-sm sm:text-lg" />
                    <span className="hidden xs:inline">{social.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* Join Community Button */}
              <motion.button
                onClick={handleJoinCommunity}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-white text-green-700 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm
                         shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2
                         group"
              >
                <FaUsers className="group-hover:rotate-12 transition-transform text-sm sm:text-base" />
                <span>Gabung Komunitas</span>
                <FaHands className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
              </motion.button>

              {/* Member Count */}
              <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-white/80 text-[10px] sm:text-xs">
                <FaUsers className="text-yellow-300" />
                <span className="font-semibold">5.000+ anggota aktif</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section - Yang Anda Sukai dengan layout sejajar */}
      <div className="container-custom mb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-800 to-green-900 rounded-2xl sm:rounded-[40px] p-6 sm:p-8 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, delay: i * 1.5 }}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                >
                  <FaLeaf className="text-white text-base sm:text-xl" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              Dapatkan Update Terbaru
            </h2>
            <p className="text-xs sm:text-sm text-white/80 mb-4 sm:mb-5">
              Berlangganan newsletter kami untuk mendapatkan informasi terbaru 
              tentang program dan kegiatan lingkungan
            </p>
            
            {/* Layout sejajar untuk semua ukuran layar */}
            <div className="flex flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 sm:px-5 py-2 sm:py-3 bg-yellow-500 text-white rounded-full font-semibold text-xs sm:text-sm
                         hover:bg-yellow-600 transition-all whitespace-nowrap"
              >
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