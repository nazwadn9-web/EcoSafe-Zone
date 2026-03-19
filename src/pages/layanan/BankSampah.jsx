import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaArrowRight, FaRecycle, FaTrash, FaUsers,
  FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPhone,
  FaEnvelope, FaWhatsapp, FaTrophy, FaStar, 
  FaCoins, FaWallet, FaExchangeAlt, FaBalanceScale, 
  FaTruck, FaBoxOpen, FaCheckCircle, FaInfoCircle,
  FaIdCard, FaHandHoldingHeart, FaPiggyBank, FaLeaf
} from 'react-icons/fa'
import { GiMoneyStack, GiRecycle, GiGlassCelebration } from 'react-icons/gi'

const BankSampah = () => {
  const [activeTab, setActiveTab] = useState('informasi')
  const [selectedLocation, setSelectedLocation] = useState(null)

  const bankInfo = {
    'Nasabah Aktif': '2.547',
    'Sampah Terolah': '47,3 Ton',
    'Total Poin': '16,2 Jt',
    'Cabang': '5 Kota'
  }

  const hargaSampah = [
    { jenis: 'Plastik PET (Botol Minum)', harga: 'Rp 3.500/kg', icon: FaRecycle, color: 'text-blue-500' },
    { jenis: 'Plastik HDPE (Ember, Pipa)', harga: 'Rp 2.800/kg', icon: FaRecycle, color: 'text-blue-400' },
    { jenis: 'Kertas HVS/Putih', harga: 'Rp 2.000/kg', icon: FaBoxOpen, color: 'text-yellow-600' },
    { jenis: 'Kertas Koran/Majalah', harga: 'Rp 1.200/kg', icon: FaBoxOpen, color: 'text-yellow-500' },
    { jenis: 'Kardus Bekas', harga: 'Rp 1.800/kg', icon: FaBoxOpen, color: 'text-yellow-700' },
    { jenis: 'Botol Kaca', harga: 'Rp 500/kg', icon: GiGlassCelebration, color: 'text-green-500' },
    { jenis: 'Kaleng Aluminium', harga: 'Rp 8.000/kg', icon: FaTrash, color: 'text-gray-500' },
    { jenis: 'Besi/Baja Bekas', harga: 'Rp 3.000/kg', icon: FaTrash, color: 'text-gray-700' },
    { jenis: 'Elektronik (HP, Laptop)', harga: 'Rp 5.000/kg', icon: FaRecycle, color: 'text-purple-500' },
    { jenis: 'Minyak Jelantah', harga: 'Rp 4.000/liter', icon: FaRecycle, color: 'text-orange-500' },
  ]

  const lokasi = [
    {
      id: 1,
      nama: 'Bank Sampah Pusat — Jakarta Selatan',
      alamat: 'Jl. Raya Pasar Minggu No. 17, Pancoran, Jakarta Selatan',
      jam: 'Senin–Sabtu, 08.00–16.00 WIB',
      telepon: '(021) 7884-2210',
      whatsapp: '0812-9988-7712',
      fasilitas: ['Timbangan Digital', 'Area Parkir', 'Ruang Edukasi', 'Kantin'],
      gambar: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format'
    },
    {
      id: 2,
      nama: 'Bank Sampah Bandung — Cicendo',
      alamat: 'Jl. Pajajaran No. 82, Cicendo, Kota Bandung',
      jam: 'Senin–Jumat, 09.00–17.00 WIB',
      telepon: '(022) 6034-8821',
      whatsapp: '0821-4433-6678',
      fasilitas: ['Timbangan Digital', 'Drop Box 24 Jam', 'Komunitas Aktif'],
      gambar: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778bdf?w=600&auto=format'
    },
    {
      id: 3,
      nama: 'Bank Sampah Surabaya — Gubeng',
      alamat: 'Jl. Raya Gubeng No. 33, Gubeng, Kota Surabaya',
      jam: 'Senin–Sabtu, 08.30–15.30 WIB',
      telepon: '(031) 5023-9910',
      whatsapp: '0831-7722-4490',
      fasilitas: ['Timbangan Digital', 'Area Parkir Luas', 'Kafe Daur Ulang'],
      gambar: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?w=600&auto=format'
    }
  ]

  const keuntungan = [
    { icon: FaCoins, title: 'Poin Tunai', desc: 'Setor sampah, kumpulkan poin yang bisa dicairkan' },
    { icon: FaTrophy, title: 'Kompetisi Bulanan', desc: 'Hadiah menarik untuk nasabah terbaik' },
    { icon: FaUsers, title: 'Komunitas Hijau', desc: 'Bergabung dengan ribuan anggota aktif' },
    { icon: GiRecycle, title: 'Workshop Gratis', desc: 'Edukasi daur ulang setiap bulan' }
  ]

  const caraKerja = [
    { step: 1, title: 'Pilah Sampah', desc: 'Pisahkan organik & anorganik di rumah', icon: FaTrash },
    { step: 2, title: 'Setor ke Bank', desc: 'Bawa ke cabang terdekat atau jadwalkan jemput', icon: FaTruck },
    { step: 3, title: 'Timbang & Catat', desc: 'Petugas menimbang dan mencatat di buku tabungan', icon: FaBalanceScale },
    { step: 4, title: 'Poin Masuk', desc: 'Poin otomatis masuk rekening sampah Anda', icon: FaCoins }
  ]

  const testimoni = [
    {
      nama: 'Ibu Ratna Dewi',
      role: 'Nasabah sejak 2021',
      text: 'Alhamdulillah, dari setor sampah saya bisa bantu bayar listrik tiap bulan. Lumayan banget!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      nama: 'Bapak Budi Hartono',
      role: 'Nasabah sejak 2022',
      text: 'Awalnya ragu, tapi ternyata poin saya sudah terkumpul cukup untuk bayar uang sekolah anak.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      nama: 'Karang Taruna RT 07',
      role: 'Nasabah Komunal',
      text: 'Program bank sampah komunal sangat membantu kas RT kami. Warga juga jadi lebih sadar lingkungan.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/52.jpg'
    }
  ]

  const caraDaftarSteps = [
    { 
      step: 1, 
      title: 'Kunjungi Cabang', 
      desc: 'Datangi bank sampah terdekat di kota Anda',
      icon: FaMapMarkerAlt,
      color: 'from-blue-400 to-blue-600'
    },
    { 
      step: 2, 
      title: 'Bawa KTP Asli', 
      desc: 'Untuk verifikasi dan registrasi data diri',
      icon: FaIdCard,
      color: 'from-green-400 to-green-600'
    },
    { 
      step: 3, 
      title: 'Terima Buku Tabungan', 
      desc: 'Buku tabungan sampah resmi diterbitkan gratis',
      icon: FaPiggyBank,
      color: 'from-yellow-400 to-orange-500'
    },
    { 
      step: 4, 
      title: 'Mulai Setor Sampah', 
      desc: 'Langsung kumpulkan poin dari setoran pertama',
      icon: FaHandHoldingHeart,
      color: 'from-purple-400 to-pink-500'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-6 pb-10"
    >
      <div className="container-custom max-w-6xl px-3">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
          <Link to="/" className="hover:text-green-600">Beranda</Link>
          <span>/</span>
          <Link to="/layanan" className="hover:text-green-600">Layanan</Link>
          <span>/</span>
          <span className="text-green-600 font-medium">Bank Sampah</span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 
                       rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg"
            >
              <FaRecycle className="text-2xl text-white" />
            </motion.div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
              Bank <span className="text-green-600">Sampah</span>
            </h1>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Ubah sampah rumah tangga menjadi poin tabungan yang bisa dicairkan kapan saja
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
          {Object.entries(bankInfo).map(([key, value], idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-xl p-3 text-center shadow-sm"
            >
              <div className="text-lg font-bold text-green-600">{value}</div>
              <div className="text-xs text-gray-500">{key}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-5 flex-wrap">
          {['informasi', 'harga', 'lokasi', 'cara'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-all
                        ${activeTab === tab 
                          ? 'bg-green-600 text-white shadow' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {tab === 'informasi' && '📋 Informasi'}
              {tab === 'harga' && '💰 Harga Sampah'}
              {tab === 'lokasi' && '📍 Lokasi'}
              {tab === 'cara' && '⚙️ Cara Kerja'}
            </button>
          ))}
        </div>

        {/* Informasi Tab */}
        {activeTab === 'informasi' && (
          <div className="space-y-4">
            {/* Keuntungan */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h2 className="text-base font-bold text-gray-800 mb-3 text-center">Mengapa Bergabung?</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {keuntungan.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-center p-2"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <item.icon className="text-base text-green-600" />
                    </div>
                    <h3 className="font-bold text-xs text-gray-800 mb-0.5">{item.title}</h3>
                    <p className="text-[10px] text-gray-500 leading-snug">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimoni */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
              <h2 className="text-base font-bold text-gray-800 mb-3 text-center">Kata Nasabah Kami</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {testimoni.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-xl p-3 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <img src={item.image} alt={item.nama} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <h3 className="font-bold text-xs text-gray-800">{item.nama}</h3>
                        <p className="text-[10px] text-gray-500">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-yellow-400 text-xs mb-1">
                      {[...Array(item.rating)].map((_, i) => (<FaStar key={i} />))}
                    </div>
                    <p className="text-[10px] text-gray-600 italic leading-relaxed">"{item.text}"</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cara Daftar */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 shadow-md border border-green-100">
              <div className="flex items-center gap-2 mb-4 justify-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <FaHandHoldingHeart className="text-white text-sm" />
                </div>
                <h2 className="text-base font-bold text-gray-800">Cara Menjadi Nasabah</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {caraDaftarSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="relative bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all border border-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-[10px] font-bold text-green-700 flex-shrink-0">
                        {step.step}
                      </div>
                      <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-sm flex-shrink-0`}>
                        <step.icon className="text-white text-sm" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xs text-gray-800">{step.title}</h3>
                        <p className="text-[9px] text-gray-500 leading-tight">{step.desc}</p>
                      </div>
                    </div>
                    {idx < caraDaftarSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2">
                        <div className="w-4 h-4 bg-green-200 rounded-full flex items-center justify-center">
                          <FaArrowRight className="text-[8px] text-green-700" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <p className="text-[10px] text-gray-500 mb-2">
                  <FaCheckCircle className="inline text-green-500 mr-1 text-xs" />
                  Pendaftaran 100% gratis — langsung datangi cabang terdekat
                </p>
                <button className="bg-green-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow hover:bg-green-700 transition inline-flex items-center gap-1">
                  <FaWhatsapp className="text-xs" /> Konsultasi via WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Harga Tab */}
        {activeTab === 'harga' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 text-white">
              <h2 className="text-base font-bold">Daftar Harga Sampah</h2>
              <p className="text-[10px] opacity-90">Berlaku per Maret 2025 · Harga dapat berbeda antar cabang</p>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {hargaSampah.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.02 }}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full bg-white flex items-center justify-center ${item.color} shadow-sm`}>
                        <item.icon className="text-xs" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">{item.jenis}</span>
                    </div>
                    <span className="text-xs font-bold text-green-600 whitespace-nowrap ml-2">{item.harga}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-3 p-2 bg-blue-50 rounded-lg flex items-start gap-2">
                <FaInfoCircle className="text-blue-500 text-xs mt-0.5 flex-shrink-0" />
                <p className="text-[10px] text-blue-700">Harga mengikuti fluktuasi pasar daur ulang. Hubungi cabang untuk konfirmasi harga terkini sebelum menyetor.</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Lokasi Tab */}
        {activeTab === 'lokasi' && (
          <div className="space-y-3">
            {lokasi.map((loc, idx) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="h-32 md:h-auto md:w-1/4 overflow-hidden">
                    <img src={loc.gambar} alt={loc.nama} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 md:w-3/4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-bold text-gray-800 leading-tight">{loc.nama}</h3>
                      <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-[10px] ml-2 whitespace-nowrap">● Buka</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-[10px] text-gray-600 mb-2">
                      <p className="flex items-start gap-1"><FaMapMarkerAlt className="text-green-600 text-[10px] mt-0.5 flex-shrink-0" />{loc.alamat}</p>
                      <p className="flex items-center gap-1"><FaClock className="text-green-600 text-[10px]" />{loc.jam}</p>
                      <p className="flex items-center gap-1"><FaPhone className="text-green-600 text-[10px]" />{loc.telepon}</p>
                      <p className="flex items-center gap-1"><FaWhatsapp className="text-green-600 text-[10px]" />{loc.whatsapp}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {loc.fasilitas.map((item, i) => (
                        <span key={i} className="px-2 py-0.5 bg-gray-100 rounded-full text-[9px] text-gray-600">{item}</span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedLocation(selectedLocation === loc.id ? null : loc.id)}
                      className="text-xs text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                      {selectedLocation === loc.id ? 'Tutup ↑' : 'Lihat Kontak →'}
                    </button>
                    {selectedLocation === loc.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-2 pt-2 border-t border-gray-100"
                      >
                        <div className="flex gap-2">
                          <button className="flex-1 bg-green-600 text-white py-1.5 rounded-lg text-[10px] font-semibold hover:bg-green-700 transition">
                            Chat WhatsApp
                          </button>
                          <button className="flex-1 bg-blue-600 text-white py-1.5 rounded-lg text-[10px] font-semibold hover:bg-blue-700 transition">
                            Buka Google Maps
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Cara Kerja Tab */}
        {activeTab === 'cara' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h2 className="text-base font-bold text-gray-800 mb-3 text-center">Alur Setoran Sampah</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caraKerja.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex flex-col items-center text-center relative"
                  >
                    <div className="relative mb-2">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                        <step.icon className="text-xl text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-200 rounded-full flex items-center justify-center shadow-sm border border-white">
                        <span className="text-[10px] font-bold text-green-700">{step.step}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-sm text-gray-800 mb-0.5">{step.title}</h3>
                    <p className="text-[10px] text-gray-500 leading-tight">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 text-white">
              <h3 className="text-sm font-bold mb-3 text-center">Sistem Poin & Pencairan</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-2">
                    <FaCoins className="text-xl mx-auto mb-1" />
                    <div className="font-bold text-xs">1 kg = 100 Poin</div>
                    <div className="text-[9px] opacity-80 mt-0.5">Plastik & kertas</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-2">
                    <FaWallet className="text-xl mx-auto mb-1" />
                    <div className="font-bold text-xs">100 Poin = Rp 1.000</div>
                    <div className="text-[9px] opacity-80 mt-0.5">Min. 50.000 poin</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-2">
                    <FaExchangeAlt className="text-xl mx-auto mb-1" />
                    <div className="font-bold text-xs">Tukar Hadiah</div>
                    <div className="text-[9px] opacity-80 mt-0.5">Voucher & produk</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="text-sm font-bold text-gray-800 mb-3 text-center">Pertanyaan Umum</h3>
              <div className="space-y-2">
                {[
                  { q: 'Sampah apa saja yang diterima?', a: 'Plastik, kertas, kardus, kaca, logam, kaleng, elektronik, dan minyak jelantah.' },
                  { q: 'Berapa minimal poin untuk dicairkan?', a: 'Minimal 50.000 poin (setara Rp 500.000) untuk pencairan tunai.' },
                  { q: 'Apakah ada biaya pendaftaran?', a: 'Tidak ada. Pendaftaran 100% gratis termasuk buku tabungan sampah.' }
                ].map((faq, idx) => (
                  <div key={idx} className="p-2 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 text-xs flex items-center gap-1">
                      <FaInfoCircle className="text-green-600 text-[10px]" />
                      {faq.q}
                    </h4>
                    <p className="text-[10px] text-gray-600 ml-4 mt-0.5">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 text-center text-white"
        >
          <h2 className="text-base font-bold mb-1">Siap Menjadi Nasabah?</h2>
          <p className="text-xs mb-3 opacity-90">Daftar sekarang dan mulai ubah sampah menjadi tabungan bermanfaat</p>
          <div className="flex justify-center gap-2">
            <button className="bg-white text-green-600 px-5 py-1.5 rounded-full text-xs font-bold shadow hover:scale-105 transition">
              Daftar Sekarang
            </button>
            <button className="border border-white text-white px-5 py-1.5 rounded-full text-xs font-bold hover:bg-white/10 transition flex items-center gap-1">
              <FaWhatsapp className="text-xs" /> Hubungi CS
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BankSampah