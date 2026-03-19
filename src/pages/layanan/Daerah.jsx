import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaArrowLeft, FaMapMarkerAlt, FaCity, FaGlobeAsia,
  FaSearch, FaCheckCircle, FaPhone, FaWhatsapp,
  FaClock, FaEnvelope, FaStar, FaUsers,
  FaRecycle, FaTrash, FaLeaf, FaBuilding,
  FaChevronDown, FaChevronRight, FaInfoCircle
} from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'

// Data provinsi dan kota di Indonesia
const dataWilayah = {
  'Aceh': {
    provinsi: 'Aceh',
    ibuKota: 'Banda Aceh',
    kota: ['Banda Aceh', 'Sabang', 'Langsa', 'Lhokseumawe', 'Subulussalam'],
    layanan: ['Bank Sampah', 'Edukasi', 'Pengaduan'],
    cabang: 3
  },
  'Sumatera Utara': {
    provinsi: 'Sumatera Utara',
    ibuKota: 'Medan',
    kota: ['Medan', 'Binjai', 'Tebing Tinggi', 'Pematangsiantar', 'Tanjungbalai', 'Sibolga', 'Padang Sidempuan', 'Gunungsitoli'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pengaduan'],
    cabang: 5
  },
  'Sumatera Barat': {
    provinsi: 'Sumatera Barat',
    ibuKota: 'Padang',
    kota: ['Padang', 'Bukittinggi', 'Payakumbuh', 'Solok', 'Sawahlunto', 'Padang Panjang', 'Pariaman'],
    layanan: ['Bank Sampah', 'Edukasi'],
    cabang: 2
  },
  'Riau': {
    provinsi: 'Riau',
    ibuKota: 'Pekanbaru',
    kota: ['Pekanbaru', 'Dumai'],
    layanan: ['Bank Sampah', 'Edukasi', 'Pengaduan'],
    cabang: 2
  },
  'Kepulauan Riau': {
    provinsi: 'Kepulauan Riau',
    ibuKota: 'Tanjung Pinang',
    kota: ['Batam', 'Tanjung Pinang'],
    layanan: ['Bank Sampah', 'Edukasi'],
    cabang: 2
  },
  'Jambi': {
    provinsi: 'Jambi',
    ibuKota: 'Jambi',
    kota: ['Jambi', 'Sungai Penuh'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Sumatera Selatan': {
    provinsi: 'Sumatera Selatan',
    ibuKota: 'Palembang',
    kota: ['Palembang', 'Pagar Alam', 'Lubuklinggau', 'Prabumulih'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas'],
    cabang: 3
  },
  'Bengkulu': {
    provinsi: 'Bengkulu',
    ibuKota: 'Bengkulu',
    kota: ['Bengkulu'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Lampung': {
    provinsi: 'Lampung',
    ibuKota: 'Bandar Lampung',
    kota: ['Bandar Lampung', 'Metro'],
    layanan: ['Bank Sampah', 'Edukasi'],
    cabang: 2
  },
  'Bangka Belitung': {
    provinsi: 'Bangka Belitung',
    ibuKota: 'Pangkal Pinang',
    kota: ['Pangkal Pinang'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Banten': {
    provinsi: 'Banten',
    ibuKota: 'Serang',
    kota: ['Serang', 'Tangerang', 'Cilegon', 'Tangerang Selatan'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pengaduan'],
    cabang: 4
  },
  'DKI Jakarta': {
    provinsi: 'DKI Jakarta',
    ibuKota: 'Jakarta',
    kota: ['Jakarta Pusat', 'Jakarta Utara', 'Jakarta Barat', 'Jakarta Selatan', 'Jakarta Timur', 'Kepulauan Seribu'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pelatihan', 'Pengaduan'],
    cabang: 6
  },
  'Jawa Barat': {
    provinsi: 'Jawa Barat',
    ibuKota: 'Bandung',
    kota: ['Bandung', 'Bogor', 'Bekasi', 'Depok', 'Cimahi', 'Tasikmalaya', 'Banjar', 'Sukabumi', 'Cirebon'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pelatihan', 'Pengaduan'],
    cabang: 8
  },
  'Jawa Tengah': {
    provinsi: 'Jawa Tengah',
    ibuKota: 'Semarang',
    kota: ['Semarang', 'Surakarta', 'Salatiga', 'Magelang', 'Pekalongan', 'Tegal'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas'],
    cabang: 5
  },
  'DI Yogyakarta': {
    provinsi: 'DI Yogyakarta',
    ibuKota: 'Yogyakarta',
    kota: ['Yogyakarta'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas'],
    cabang: 2
  },
  'Jawa Timur': {
    provinsi: 'Jawa Timur',
    ibuKota: 'Surabaya',
    kota: ['Surabaya', 'Malang', 'Kediri', 'Blitar', 'Madiun', 'Mojokerto', 'Pasuruan', 'Probolinggo', 'Batu'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pelatihan'],
    cabang: 6
  },
  'Bali': {
    provinsi: 'Bali',
    ibuKota: 'Denpasar',
    kota: ['Denpasar'],
    layanan: ['Bank Sampah', 'Edukasi'],
    cabang: 2
  },
  'Nusa Tenggara Barat': {
    provinsi: 'Nusa Tenggara Barat',
    ibuKota: 'Mataram',
    kota: ['Mataram', 'Bima'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Nusa Tenggara Timur': {
    provinsi: 'Nusa Tenggara Timur',
    ibuKota: 'Kupang',
    kota: ['Kupang'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Kalimantan Barat': {
    provinsi: 'Kalimantan Barat',
    ibuKota: 'Pontianak',
    kota: ['Pontianak', 'Singkawang'],
    layanan: ['Bank Sampah', 'Edukasi'],
    cabang: 2
  },
  'Kalimantan Tengah': {
    provinsi: 'Kalimantan Tengah',
    ibuKota: 'Palangka Raya',
    kota: ['Palangka Raya'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Kalimantan Selatan': {
    provinsi: 'Kalimantan Selatan',
    ibuKota: 'Banjarmasin',
    kota: ['Banjarmasin', 'Banjarbaru'],
    layanan: ['Bank Sampah', 'Edukasi'],
    cabang: 2
  },
  'Kalimantan Timur': {
    provinsi: 'Kalimantan Timur',
    ibuKota: 'Samarinda',
    kota: ['Samarinda', 'Balikpapan', 'Bontang'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas'],
    cabang: 3
  },
  'Kalimantan Utara': {
    provinsi: 'Kalimantan Utara',
    ibuKota: 'Tanjung Selor',
    kota: ['Tarakan'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Sulawesi Utara': {
    provinsi: 'Sulawesi Utara',
    ibuKota: 'Manado',
    kota: ['Manado', 'Bitung', 'Tomohon', 'Kotamobagu'],
    layanan: ['Bank Sampah', 'Edukasi'],
    cabang: 2
  },
  'Sulawesi Tengah': {
    provinsi: 'Sulawesi Tengah',
    ibuKota: 'Palu',
    kota: ['Palu'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Sulawesi Selatan': {
    provinsi: 'Sulawesi Selatan',
    ibuKota: 'Makassar',
    kota: ['Makassar', 'Parepare', 'Palopo'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas'],
    cabang: 3
  },
  'Sulawesi Tenggara': {
    provinsi: 'Sulawesi Tenggara',
    ibuKota: 'Kendari',
    kota: ['Kendari', 'Baubau'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Gorontalo': {
    provinsi: 'Gorontalo',
    ibuKota: 'Gorontalo',
    kota: ['Gorontalo'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Sulawesi Barat': {
    provinsi: 'Sulawesi Barat',
    ibuKota: 'Mamuju',
    kota: ['Mamuju'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Maluku': {
    provinsi: 'Maluku',
    ibuKota: 'Ambon',
    kota: ['Ambon', 'Tual'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Maluku Utara': {
    provinsi: 'Maluku Utara',
    ibuKota: 'Sofifi',
    kota: ['Ternate', 'Tidore Kepulauan'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Papua': {
    provinsi: 'Papua',
    ibuKota: 'Jayapura',
    kota: ['Jayapura'],
    layanan: ['Bank Sampah'],
    cabang: 1
  },
  'Papua Barat': {
    provinsi: 'Papua Barat',
    ibuKota: 'Manokwari',
    kota: ['Manokwari'],
    layanan: ['Bank Sampah'],
    cabang: 1
  }
}

const LayananWilayah = () => {
  const [selectedProvinsi, setSelectedProvinsi] = useState(null)
  const [selectedKota, setSelectedKota] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showDetail, setShowDetail] = useState(false)

  // Konversi object ke array untuk memudahkan filtering
  const provinsiList = Object.keys(dataWilayah).map(key => ({
    ...dataWilayah[key],
    id: key
  }))

  // Filter provinsi berdasarkan pencarian
  const filteredProvinsi = provinsiList.filter(prov => 
    prov.provinsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prov.kota.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const handleProvinsiClick = (provinsi) => {
    setSelectedProvinsi(provinsi)
    setSelectedKota(null)
    setShowDetail(true)
  }

  const handleKotaClick = (kota) => {
    setSelectedKota(kota)
  }

  const handleBack = () => {
    setShowDetail(false)
    setSelectedProvinsi(null)
    setSelectedKota(null)
  }

  // Warna untuk setiap layanan
  const layananColors = {
    'Bank Sampah': 'bg-green-100 text-green-700',
    'Edukasi': 'bg-blue-100 text-blue-700',
    'Komunitas': 'bg-purple-100 text-purple-700',
    'Pelatihan': 'bg-orange-100 text-orange-700',
    'Pengaduan': 'bg-red-100 text-red-700'
  }

  const layananIcons = {
    'Bank Sampah': FaRecycle,
    'Edukasi': FaLeaf,
    'Komunitas': FaUsers,
    'Pelatihan': FaStar,
    'Pengaduan': FaInfoCircle
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-10"
    >
      <div className="container-custom max-w-6xl px-3">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <Link to="/layanan" className="hover:text-green-600">Layanan</Link>
          <span>/</span>
          <span className="text-green-600">Wilayah</span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            {showDetail ? (
              <button 
                onClick={handleBack}
                className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-sm"
              >
                <FaArrowLeft size={12} /> Kembali ke Daftar Provinsi
              </button>
            ) : (
              <Link to="/layanan" className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-sm">
                <FaArrowLeft size={12} /> Kembali ke Layanan
              </Link>
            )}
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 
                       rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg"
            >
              <GiEarthAmerica className="text-2xl text-white" />
            </motion.div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
              Layanan <span className="text-green-600">Wilayah</span>
            </h1>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Temukan layanan bank sampah dan edukasi di seluruh Indonesia
            </p>
          </div>
        </div>

        {/* Search Bar - Hanya muncul di daftar provinsi */}
        {!showDetail && (
          <div className="relative mb-5 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Cari provinsi atau kota..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 rounded-xl border border-gray-200 
                       focus:border-green-500 focus:ring-2 focus:ring-green-200 
                       focus:outline-none transition-all text-sm bg-white shadow-sm"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
          </div>
        )}

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {!showDetail ? (
            /* Daftar Provinsi */
            <motion.div
              key="provinsi-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {filteredProvinsi.map((prov, idx) => {
                const IconComponent = FaCity
                return (
                  <motion.div
                    key={prov.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    onClick={() => handleProvinsiClick(prov)}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md 
                             transition-all cursor-pointer border border-gray-100
                             flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <IconComponent className="text-green-600 text-lg" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-800">{prov.provinsi}</h3>
                        <p className="text-[10px] text-gray-500">
                          {prov.kota.length} kota • {prov.cabang} cabang
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="flex -space-x-1">
                        {prov.layanan.slice(0, 3).map((layanan, i) => {
                          const Icon = layananIcons[layanan] || FaMapMarkerAlt
                          return (
                            <div key={i} className={`w-5 h-5 rounded-full ${layananColors[layanan]?.split(' ')[0] || 'bg-gray-100'} 
                                                  flex items-center justify-center border border-white`}>
                              <Icon className="text-[8px]" />
                            </div>
                          )
                        })}
                      </div>
                      <FaChevronRight className="text-gray-300 text-xs group-hover:text-green-600 transition-colors" />
                    </div>
                  </motion.div>
                )
              })}

              {filteredProvinsi.length === 0 && (
                <div className="col-span-full text-center py-8">
                  <FaCity className="text-4xl text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Tidak ada provinsi yang ditemukan</p>
                </div>
              )}
            </motion.div>
          ) : (
            /* Detail Provinsi */
            <motion.div
              key="provinsi-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {/* Info Provinsi */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <FaCity className="text-white text-xl" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">{selectedProvinsi.provinsi}</h2>
                    <p className="text-xs opacity-90">Ibu Kota: {selectedProvinsi.ibuKota}</p>
                  </div>
                </div>
              </div>

              {/* Statistik */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                  <div className="text-lg font-bold text-green-600">{selectedProvinsi.kota.length}</div>
                  <div className="text-[10px] text-gray-500">Kota</div>
                </div>
                <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                  <div className="text-lg font-bold text-green-600">{selectedProvinsi.cabang}</div>
                  <div className="text-[10px] text-gray-500">Cabang</div>
                </div>
                <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                  <div className="text-lg font-bold text-green-600">{selectedProvinsi.layanan.length}</div>
                  <div className="text-[10px] text-gray-500">Layanan</div>
                </div>
              </div>

              {/* Layanan Tersedia */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Layanan Tersedia</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProvinsi.layanan.map((layanan, idx) => {
                    const Icon = layananIcons[layanan] || FaMapMarkerAlt
                    return (
                      <div key={idx} className={`px-3 py-1.5 rounded-full text-xs font-semibold 
                                                flex items-center gap-1 ${layananColors[layanan] || 'bg-gray-100 text-gray-700'}`}>
                        <Icon className="text-xs" />
                        {layanan}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Daftar Kota */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Kota/Kabupaten</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {selectedProvinsi.kota.map((kota, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.02 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleKotaClick(kota)}
                      className={`p-2 rounded-lg text-left transition-all text-xs
                                ${selectedKota === kota 
                                  ? 'bg-green-600 text-white shadow-md' 
                                  : 'bg-gray-50 hover:bg-green-100 text-gray-700'}`}
                    >
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className={`text-[10px] ${selectedKota === kota ? 'text-white' : 'text-green-600'}`} />
                        <span className="font-medium">{kota}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Detail Kota Terpilih */}
              <AnimatePresence>
                {selectedKota && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <FaCheckCircle className="text-green-600 text-sm" />
                      <h4 className="text-sm font-bold text-gray-800">Informasi {selectedKota}</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <FaBuilding className="text-green-600" />
                          <span className="font-semibold text-gray-700">Bank Sampah</span>
                        </div>
                        <p className="text-gray-600">Jl. Sudirman No. 123, {selectedKota}</p>
                        <p className="text-gray-500 mt-1">Telp: (021) 1234-5678</p>
                      </div>

                      <div className="bg-white rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <FaClock className="text-green-600" />
                          <span className="font-semibold text-gray-700">Jam Operasional</span>
                        </div>
                        <p className="text-gray-600">Senin - Jumat: 08.00 - 16.00</p>
                        <p className="text-gray-600">Sabtu: 08.00 - 12.00</p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-xs font-semibold
                                       hover:bg-green-700 transition flex items-center justify-center gap-1">
                        <FaWhatsapp className="text-xs" /> Chat CS
                      </button>
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-xs font-semibold
                                       hover:bg-blue-700 transition flex items-center justify-center gap-1">
                        <FaPhone className="text-xs" /> Telepon
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 rounded-xl p-3 flex items-start gap-2">
          <FaInfoCircle className="text-blue-500 text-xs mt-0.5 flex-shrink-0" />
          <p className="text-[10px] text-blue-700">
            Layanan tersedia di 34 provinsi dan lebih dari 100 kota di seluruh Indonesia. 
            Klik provinsi untuk melihat detail layanan dan cabang terdekat.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default LayananWilayah