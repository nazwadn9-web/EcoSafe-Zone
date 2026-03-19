import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaLeaf, 
  FaHands, 
  FaHeart, 
  FaTree, 
  FaRecycle, 
  FaGlobeAsia,
  FaUsers,
  FaQuoteLeft,
  FaQuoteRight,
  FaAward,
  FaRocket,
  FaHandHoldingHeart,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaSeedling,
  FaWater,
  FaWind,
  FaSolarPanel,
  FaPlay
} from 'react-icons/fa'
import { GiEarthAmerica, GiPlantsAndAnimals, GiForest, GiEcology } from 'react-icons/gi'

const Tentang = () => {
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
    { icon: FaInstagram, name: 'Instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500', link: '#' },
    { icon: FaWhatsapp, name: 'WhatsApp', color: 'bg-green-500', link: '#' },
    { icon: FaYoutube, name: 'YouTube', color: 'bg-red-500', link: '#' },
    { icon: FaHands, name: 'Komunitas', color: 'bg-blue-500', link: '#' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 pb-12 overflow-hidden"
    >
      {/* Hero Section - Premium Design (Diperkecil) */}
      <div className="relative min-h-[500px] flex items-center justify-center mb-12 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900 via-green-800 to-emerald-900"></div>
          
          {/* Floating Elements - Lebih kecil dan sedikit */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: Math.random() * 200 + 30,
                height: Math.random() * 200 + 30,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Badge */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm 
                         px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-white/20"
              >
                <GiEcology className="text-green-300 text-sm" />
                <span>#EcoCareForFuture</span>
              </motion.div> */}

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-black mb-4 leading-tight"
              >
                Selamatkan Bumi,
                <br />
                <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Mulai dari Kita
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base text-white/80 mb-6 max-w-lg leading-relaxed"
              >
                Bersama-sama kita wujudkan Indonesia yang bersih, hijau, dan berkelanjutan 
                melalui aksi nyata dan kepedulian terhadap lingkungan.
              </motion.p>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-6"
              >
                {/* <div>
                  <div className="text-2xl font-bold text-green-300">5K+</div>
                  <div className="text-xs text-white/60">Relawan Aktif</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-300">45T</div>
                  <div className="text-xs text-white/60">Sampah Terolah</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-300">50K+</div>
                  <div className="text-xs text-white/60">Pohon Ditanam</div>
                </div> */}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 
                           text-white rounded-full font-semibold text-base shadow-lg
                           hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <FaHandHoldingHeart className="text-sm" />
                  Gabung Sekarang
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 
                           text-white rounded-full font-semibold text-base
                           hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <FaPlay className="text-sm" />
                  Lihat Video
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Animated Icons (Diperkecil) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[400px]">
                {/* Floating Icons - Lebih kecil */}
                <motion.div
                  animate={{ y: [-15, 15, -15], rotate: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 
                           rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-lg"
                >
                  <FaTree className="text-white text-3xl" />
                </motion.div>

                <motion.div
                  animate={{ y: [15, -15, 15], rotate: [0, -8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                  className="absolute top-16 right-0 w-28 h-28 bg-gradient-to-br from-blue-400 to-cyan-500 
                           rounded-3xl shadow-xl flex items-center justify-center"
                >
                  <FaWater className="text-white text-4xl" />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.08, 1], rotate: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  className="absolute bottom-0 left-16 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 
                           rounded-[40px] shadow-xl flex items-center justify-center"
                >
                  <FaSolarPanel className="text-white text-5xl" />
                </motion.div>

                <motion.div
                  animate={{ x: [-15, 15, -15], rotate: [0, -12, 0] }}
                  transition={{ duration: 8, repeat: Infinity, delay: 3 }}
                  className="absolute bottom-16 right-16 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 
                           rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <FaWind className="text-white text-3xl" />
                </motion.div>

                {/* Center Circle */}
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                           w-36 h-36 bg-gradient-to-br from-green-500 to-emerald-600 
                           rounded-full shadow-xl flex items-center justify-center"
                >
                  <GiEarthAmerica className="text-white text-5xl" />
                </motion.div>

                {/* Orbiting Leaves - Lebih sedikit */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-6"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      delay: i * 1.5,
                    }}
                  >
                    <motion.div
                      className="absolute"
                      style={{
                        top: -120,
                        left: -12,
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    >
                      <FaLeaf className="text-green-300/50 text-2xl" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Lebih kecil */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>

      {/* Vision Mission Section - Diperkecil */}
      <div id="visi-misi" className="container-custom scroll-mt-20 mb-12">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            Visi & <span className="text-green-600">Misi</span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fondasi dan tujuan kami dalam berkontribusi untuk lingkungan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Vision Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-[30px] transform rotate-2 group-hover:rotate-3 transition-transform"></div>
            <div className="relative bg-white rounded-[30px] p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                <FaTree className="text-3xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Visi Kami</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Menciptakan Indonesia yang bersih, hijau, dan berkelanjutan melalui 
                kesadaran kolektif dalam pengelolaan sampah dan pelestarian lingkungan 
                untuk generasi masa depan.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <div className="w-8 h-1 bg-green-600 rounded-full"></div>
                <span className="text-sm font-semibold">Masa Depan Lebih Hijau</span>
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[30px] transform -rotate-2 group-hover:-rotate-3 transition-transform"></div>
            <div className="relative bg-white rounded-[30px] p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-4">
                <FaHands className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Misi Kami</h3>
              <ul className="space-y-2">
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
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section - Diperkecil */}
      <div className="bg-gradient-to-b from-transparent via-green-50 to-transparent py-12 mb-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
            >
              Perjalanan <span className="text-green-600">Kami</span>
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Setiap langkah adalah bagian dari perubahan
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-300 via-green-500 to-green-300 rounded-full"></div>

            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex items-center mb-6 ${
                  idx % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-6' : 'pl-6'}`}>
                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-base font-bold text-gray-800 mb-1">{item.event}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-3 border-green-500 flex items-center justify-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section - Diperkecil */}
      <div className="container-custom mb-12">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            Nilai-Nilai <span className="text-green-600">Kami</span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prinsip yang menjadi fondasi setiap langkah kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
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
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-[30px] p-6 shadow-lg hover:shadow-xl transition-all h-full">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} 
                                flex items-center justify-center text-white text-2xl
                                group-hover:rotate-6 transition-transform`}>
                  <item.icon />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-center">{item.desc}</p>
                <div className="mt-4 flex justify-center">
                  <div className="w-8 h-1 bg-green-500 rounded-full group-hover:w-12 transition-all"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section - Diperkecil */}
      <div className="bg-gradient-to-t from-green-50 to-transparent py-12 mb-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
            >
              Tim <span className="text-green-600">Kami</span>
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Para pegiat lingkungan yang berdedikasi
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full animate-pulse"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-18 h-18 mx-auto rounded-full object-cover border-3 border-white"
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-800">{member.name}</h3>
                <p className="text-xs text-green-600 font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards Section - Diperkecil */}
      <div className="container-custom mb-12">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-[40px] p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-white rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white rounded-full"></div>
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="relative z-10"
          >
            <FaAward className="text-5xl mx-auto mb-3" />
            <h2 className="text-3xl font-bold mb-2">Penghargaan</h2>
            <p className="text-lg mb-1">Penghargaan Lingkungan Hidup 2023</p>
            <p className="text-base opacity-90">Kementerian Lingkungan Hidup & Kehutanan</p>
            <p className="text-xs opacity-75 mt-3">Atas dedikasi dalam pengelolaan sampah dan pelestarian lingkungan</p>
          </motion.div>
        </div>
      </div>

      {/* Contact & Social Media Section - Diperkecil */}
      <div className="container-custom mb-12">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[30px] p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaHandHoldingHeart className="text-green-600 text-xl" />
              Hubungi <span className="text-green-600">Kami</span>
            </h2>
            
            <div className="space-y-3 mb-6">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-base text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold text-sm
                         hover:bg-green-700 transition-all flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-sm" />
                WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold text-sm
                         hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                <FaEnvelope className="text-sm" />
                Email
              </motion.button>
            </div>
          </motion.div>

          {/* Social Media & Join Community */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-[30px] p-6 shadow-xl text-white relative overflow-hidden"
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
                    <FaLeaf className="text-white/30 text-2xl" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-1">Bergabung dengan</h2>
              <p className="text-3xl font-black mb-4 text-yellow-300">Komunitas Kami</p>
              
              <p className="text-white/90 mb-5 text-sm">
                Ikuti kami di media sosial untuk mendapatkan update terbaru 
                dan bergabung dengan ribuan relawan lainnya!
              </p>

              {/* Social Media Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {socialMedia.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`${social.color} p-3 rounded-xl text-white flex items-center gap-2
                              shadow-md hover:shadow-lg transition-all`}
                  >
                    <social.icon className="text-lg" />
                    <span className="text-sm font-semibold">{social.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* Join Community Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-white text-green-700 py-3 rounded-xl font-bold text-sm
                         shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2
                         group"
              >
                <FaUsers className="group-hover:rotate-12 transition-transform" />
                Gabung Komunitas
                <FaHands className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Member Count */}
              <div className="mt-4 flex items-center justify-center gap-2 text-white/80 text-xs">
                <FaUsers className="text-yellow-300" />
                <span className="font-semibold">5.000+ anggota aktif</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section - Diperkecil */}
      <div className="container-custom mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-800 to-green-900 rounded-[40px] p-8 text-white text-center relative overflow-hidden"
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
                  <FaLeaf className="text-white text-xl" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Dapatkan Update Terbaru
            </h2>
            <p className="text-sm text-white/80 mb-4">
              Berlangganan newsletter kami untuk mendapatkan informasi terbaru 
              tentang program dan kegiatan lingkungan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-3 rounded-full text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-3 bg-yellow-500 text-white rounded-full font-semibold text-sm
                         hover:bg-yellow-600 transition-all whitespace-nowrap"
              >
                Berlangganan
              </motion.button>
            </div>
            
            <p className="text-xs text-white/60 mt-3">
              *Kami tidak akan mengirim spam. Berhenti berlangganan kapan saja.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Tentang