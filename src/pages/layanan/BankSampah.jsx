import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaArrowLeft, FaRecycle, FaTrash, FaLeaf, FaUsers,
  FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPhone,
  FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook,
  FaTrophy, FaStar, FaAward, FaCoins, FaWallet,
  FaExchangeAlt, FaBalanceScale, FaTruck, FaBoxOpen,
  FaCheckCircle, FaInfoCircle, FaQuestionCircle
} from 'react-icons/fa'
import { GiMoneyStack, GiRecycle, GiGlassCelebration } from 'react-icons/gi'

const BankSampah = () => {
  const [activeTab, setActiveTab] = useState('informasi')
  const [selectedLocation, setSelectedLocation] = useState(null)

  const bankInfo = {
    totalNasabah: '2.500+',
    totalSampah: '45 Ton',
    totalPoin: '15 Juta',
    cabang: '5 Lokasi'
  }

  const hargaSampah = [
    { jenis: 'Plastik PET (Botol)', harga: 'Rp 3.500/kg', icon: FaRecycle, color: 'text-blue-500' },
    { jenis: 'Plastik HDPE', harga: 'Rp 2.800/kg', icon: FaRecycle, color: 'text-blue-400' },
    { jenis: 'Kertas Putih', harga: 'Rp 2.000/kg', icon: FaBoxOpen, color: 'text-yellow-600' },
    { jenis: 'Kertas Campur', harga: 'Rp 1.200/kg', icon: FaBoxOpen, color: 'text-yellow-500' },
    { jenis: 'Kardus', harga: 'Rp 1.800/kg', icon: FaBoxOpen, color: 'text-yellow-700' },
    { jenis: 'Botol Kaca', harga: 'Rp 500/kg', icon: GiGlassCelebration, color: 'text-green-500' },
    { jenis: 'Kaleng Aluminium', harga: 'Rp 8.000/kg', icon: FaTrash, color: 'text-gray-500' },
    { jenis: 'Besi', harga: 'Rp 3.000/kg', icon: FaTrash, color: 'text-gray-700' },
    { jenis: 'Elektronik', harga: 'Rp 5.000/kg', icon: FaRecycle, color: 'text-purple-500' },
    { jenis: 'Minyak Jelantah', harga: 'Rp 4.000/liter', icon: FaRecycle, color: 'text-orange-500' },
  ]

  const lokasi = [
    {
      id: 1,
      nama: 'Bank Sampah Pusat',
      alamat: 'Jl. Hijau No. 123, Jakarta Selatan',
      jam: 'Senin - Sabtu, 08.00 - 16.00',
      telepon: '(021) 1234-5678',
      whatsapp: '0812-3456-7890',
      fasilitas: ['Timbangan Digital', 'Area Parkir Luas', 'Ruang Edukasi', 'Kantin'],
      gambar: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b',
      koordinat: '-6.2088, 106.8456'
    },
    {
      id: 2,
      nama: 'Bank Sampah Bandung',
      alamat: 'Jl. Asia Afrika No. 45, Bandung',
      jam: 'Senin - Jumat, 09.00 - 17.00',
      telepon: '(022) 5678-1234',
      whatsapp: '0821-3456-7890',
      fasilitas: ['Timbangan Digital', 'Drop Box 24 Jam', 'Ruang Komunitas'],
      gambar: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778bdf',
      koordinat: '-6.9175, 107.6191'
    },
    {
      id: 3,
      nama: 'Bank Sampah Surabaya',
      alamat: 'Jl. Tunjungan No. 78, Surabaya',
      jam: 'Senin - Sabtu, 08.30 - 15.30',
      telepon: '(031) 3456-7890',
      whatsapp: '0831-2345-6789',
      fasilitas: ['Timbangan Digital', 'Area Parkir', 'Kafe Daur Ulang'],
      gambar: 'https://images.unsplash.com/photo-1528323273322-d81458248d40',
      koordinat: '-7.2575, 112.7521'
    }
  ]

  const keuntungan = [
    {
      icon: FaCoins,
      title: 'Dapatkan Poin',
      desc: 'Setiap setor sampah dapat poin yang bisa ditukar uang atau hadiah'
    },
    {
      icon: FaTrophy,
      title: 'Kompetisi',
      desc: 'Ikut lomba nasabah teraktif dapat hadiah menarik'
    },
    {
      icon: FaUsers,
      title: 'Komunitas',
      desc: 'Bergabung dengan sesama pecinta lingkungan'
    },
    {
      icon: FaLeaf,
      title: 'Edukasi',
      desc: 'Pelatihan dan workshop gratis untuk nasabah'
    }
  ]

  const caraKerja = [
    {
      step: 1,
      title: 'Pilah Sampah',
      desc: 'Pisahkan sampah anorganik di rumah sesuai jenisnya',
      icon: FaTrash
    },
    {
      step: 2,
      title: 'Setor ke Bank',
      desc: 'Bawa sampah yang sudah dipilah ke bank sampah terdekat',
      icon: FaTruck
    },
    {
      step: 3,
      title: 'Timbang & Catat',
      desc: 'Sampah akan ditimbang dan dicatat di buku tabungan',
      icon: FaBalanceScale
    },
    {
      step: 4,
      title: 'Dapatkan Poin',
      desc: 'Poin masuk ke rekening, bisa dicairkan atau ditabung',
      icon: FaCoins
    }
  ]

  const testimoni = [
    {
      nama: 'Ibu Ratna',
      role: 'Nasabah sejak 2022',
      text: 'Alhamdulillah, setiap bulan bisa dapat tambahan uang dari sampah. Rumah juga lebih bersih!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      nama: 'Pak Budi',
      role: 'Nasabah sejak 2021',
      text: 'Program bank sampah sangat membantu. Saya bisa nabung untuk biaya sekolah anak dari hasil setor sampah.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      nama: 'Karang Taruna',
      role: 'Nasabah Komunal',
      text: 'Kami kelola sampah lingkungan jadi tabungan bersama. Sangat bermanfaat untuk warga.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/52.jpg'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Beranda</Link>
          <span>/</span>
          <Link to="/layanan" className="hover:text-green-600">Layanan</Link>
          <span>/</span>
          <span className="text-green-600 font-semibold">Bank Sampah</span>
        </div>

        {/* Header */}
        <div className="relative mb-12">
          <Link 
            to="/layanan" 
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 
                     bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6
                     hover:bg-white transition-all"
          >
            <FaArrowLeft /> Kembali ke Layanan
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 
                       rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <FaRecycle className="text-4xl text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Bank <span className="text-green-600">Sampah</span>
            </h1>
            <p className="text-xl text-gray-600">
              Ubah sampah jadi berkah! Setor sampah anorganik, dapatkan poin dan keuntungan
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(bankInfo).map(([key, value], idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-2xl font-bold text-green-600 mb-1">{value}</div>
              <div className="text-sm text-gray-600 capitalize">{key}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {['informasi', 'harga', 'lokasi', 'cara kerja'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold capitalize transition-all
                        ${activeTab === tab 
                          ? 'bg-green-600 text-white shadow-lg' 
                          : 'bg-white text-gray-600 hover:bg-green-50'}`}
            >
              {tab === 'informasi' && '📋 Informasi'}
              {tab === 'harga' && '💰 Daftar Harga'}
              {tab === 'lokasi' && '📍 Lokasi'}
              {tab === 'cara kerja' && '⚙️ Cara Kerja'}
            </button>
          ))}
        </div>

        {/* Informasi Tab */}
        {activeTab === 'informasi' && (
          <div className="space-y-8">
            {/* Keuntungan */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Keuntungan Menjadi Nasabah
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {keuntungan.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <item.icon className="text-2xl text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimoni */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Apa Kata Nasabah?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimoni.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src={item.image} 
                        alt={item.nama}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-800">{item.nama}</h3>
                        <p className="text-xs text-gray-500">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 text-yellow-400 mb-2">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 italic">"{item.text}"</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cara Daftar */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Cara Menjadi Nasabah
              </h2>
              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  'Datang ke bank sampah terdekat',
                  'Bawa KTP untuk registrasi',
                  'Dapatkan buku tabungan sampah',
                  'Mulai setor sampah dan kumpulkan poin'
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Harga Tab */}
        {activeTab === 'harga' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Daftar Harga Sampah</h2>
              <p className="opacity-90">Harga berlaku per Maret 2024 (dapat berubah sewaktu-waktu)</p>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {hargaSampah.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center ${item.color}`}>
                        <item.icon className="text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.jenis}</h3>
                        <p className="text-xs text-gray-500">per kilogram</p>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-green-600">{item.harga}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl flex items-start gap-3">
                <FaInfoCircle className="text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-sm text-blue-700">
                  Harga dapat berbeda di setiap cabang. Untuk sampah elektronik dan barang besar, 
                  harap konfirmasi terlebih dahulu ke petugas.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Lokasi Tab */}
        {activeTab === 'lokasi' && (
          <div className="space-y-6">
            {lokasi.map((loc, idx) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer
                          ${selectedLocation === loc.id ? 'ring-4 ring-green-500' : ''}`}
                onClick={() => setSelectedLocation(selectedLocation === loc.id ? null : loc.id)}
              >
                <div className="grid md:grid-cols-3">
                  <div className="h-48 md:h-full overflow-hidden">
                    <img 
                      src={loc.gambar} 
                      alt={loc.nama}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{loc.nama}</h3>
                      <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                        Buka
                      </div>
                    </div>

                    <div className="space-y-2 text-gray-600 mb-4">
                      <p className="flex items-start gap-2">
                        <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-green-600" />
                        <span>{loc.alamat}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <FaClock className="text-green-600" />
                        <span>{loc.jam}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <FaPhone className="text-green-600" />
                        <span>{loc.telepon}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <FaWhatsapp className="text-green-600" />
                        <span>{loc.whatsapp}</span>
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Fasilitas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {loc.fasilitas.map((item, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedLocation === loc.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <div className="flex gap-3">
                          <button className="flex-1 bg-green-600 text-white py-2 rounded-xl font-semibold
                                           hover:bg-green-700 transition-colors">
                            <FaWhatsapp className="inline mr-2" />
                            Chat WhatsApp
                          </button>
                          <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl font-semibold
                                           hover:bg-blue-700 transition-colors">
                            <FaMapMarkerAlt className="inline mr-2" />
                            Lihat Maps
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-3xl h-96 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524662177401-7b2c5c6c8c9c"
                alt="Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <FaMapMarkerAlt className="text-5xl mx-auto mb-3" />
                  <h3 className="text-2xl font-bold mb-2">Temukan Lokasi Terdekat</h3>
                  <p className="mb-4">5 cabang tersedia di berbagai kota</p>
                  <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold">
                    Lihat di Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cara Kerja Tab */}
        {activeTab === 'cara kerja' && (
          <div className="space-y-8">
            {/* Steps */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Bagaimana Cara Kerja Bank Sampah?
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 relative">
                {caraKerja.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    {/* Connector Line */}
                    {idx < caraKerja.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-green-200">
                        <div className="absolute right-0 w-3 h-3 bg-green-500 rounded-full -top-1"></div>
                      </div>
                    )}
                    
                    <div className="text-center relative z-10">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 
                                    rounded-3xl flex items-center justify-center mx-auto mb-4
                                    shadow-xl">
                        <step.icon className="text-3xl text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-200 
                                    rounded-full flex items-center justify-center font-bold text-green-700">
                        {step.step}
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Penjelasan Sistem Poin */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 text-center">Sistem Poin & Tabungan</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <FaCoins className="text-4xl mx-auto mb-2" />
                  <div className="font-bold text-xl mb-1">1 kg = 100 Poin</div>
                  <p className="text-sm opacity-90">Setiap setor sampah dapat poin</p>
                </div>
                <div className="text-center">
                  <FaWallet className="text-4xl mx-auto mb-2" />
                  <div className="font-bold text-xl mb-1">100 Poin = Rp 1.000</div>
                  <p className="text-sm opacity-90">Bisa dicairkan atau ditabung</p>
                </div>
                <div className="text-center">
                  <FaExchangeAlt className="text-4xl mx-auto mb-2" />
                  <div className="font-bold text-xl mb-1">Tukar Hadiah</div>
                  <p className="text-sm opacity-90">Poin bisa ditukar sembako</p>
                </div>
              </div>
            </div>

            {/* FAQ Singkat */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Pertanyaan Umum
              </h3>
              <div className="max-w-2xl mx-auto space-y-3">
                {[
                  { q: 'Apakah semua sampah bisa disetor?', a: 'Kami menerima sampah anorganik seperti plastik, kertas, kaca, logam, dan elektronik.' },
                  { q: 'Kapan pencairan poin bisa dilakukan?', a: 'Poin bisa dicairkan setiap bulan minimal 50.000 poin.' },
                  { q: 'Apakah ada biaya pendaftaran?', a: 'Pendaftaran nasabah baru GRATIS!' }
                ].map((faq, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                      <FaQuestionCircle className="text-green-600" />
                      {faq.q}
                    </h4>
                    <p className="text-sm text-gray-600 ml-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 
                   rounded-3xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Siap Menjadi Nasabah?</h2>
          <p className="text-xl mb-6 opacity-90">
            Ayo mulai setor sampah dan dapatkan keuntungannya!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-bold
                             hover:shadow-xl transform hover:scale-105 transition-all">
              Daftar Jadi Nasabah
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold
                             hover:bg-white hover:text-green-600 transition-all">
              <FaWhatsapp className="inline mr-2" />
              Hubungi CS
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BankSampah