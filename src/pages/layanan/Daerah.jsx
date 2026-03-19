import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaMapMarkerAlt, FaCity, FaGlobeAsia,
  FaSearch, FaCheckCircle, FaPhone, FaWhatsapp,
  FaClock, FaEnvelope, FaStar, FaUsers,
  FaRecycle, FaTrash, FaLeaf, FaBuilding,
  FaChevronDown, FaChevronRight, FaInfoCircle,
  FaBoxOpen, FaGraduationCap, FaExclamationCircle,
  FaHandsHelping, FaCalendarAlt
} from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'

// Data realistis per kota
const detailKota = {
  // DKI Jakarta
  'Jakarta Selatan': {
    alamat: 'Jl. Raya Pasar Minggu No. 17, Pancoran, Jakarta Selatan 12780',
    telepon: '(021) 7884-2210',
    whatsapp: '0812-9988-7712',
    email: 'jaksel@pilahpintar.id',
    jam: 'Sen–Sab: 08.00–16.00 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pelatihan', 'Pengaduan'],
    nasabah: 412,
    sampahBulan: '3,2 Ton',
    jadwalEdukasi: 'Setiap Sabtu, 09.00 WIB'
  },
  'Jakarta Utara': {
    alamat: 'Jl. Pluit Selatan Raya No. 8, Penjaringan, Jakarta Utara 14450',
    telepon: '(021) 6619-3344',
    whatsapp: '0813-1100-2233',
    email: 'jakut@pilahpintar.id',
    jam: 'Sen–Jum: 08.00–15.30 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi', 'Pengaduan'],
    nasabah: 285,
    sampahBulan: '2,1 Ton',
    jadwalEdukasi: 'Setiap Rabu, 10.00 WIB'
  },
  'Jakarta Barat': {
    alamat: 'Jl. Daan Mogot KM 11 No. 45, Cengkareng, Jakarta Barat 11730',
    telepon: '(021) 5437-8891',
    whatsapp: '0815-7788-9900',
    email: 'jakbar@pilahpintar.id',
    jam: 'Sen–Sab: 08.30–16.00 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi', 'Komunitas'],
    nasabah: 320,
    sampahBulan: '2,7 Ton',
    jadwalEdukasi: 'Setiap Jumat, 09.00 WIB'
  },
  'Jakarta Timur': {
    alamat: 'Jl. Pemuda No. 55, Rawamangun, Jakarta Timur 13220',
    telepon: '(021) 4788-5500',
    whatsapp: '0817-2233-4455',
    email: 'jaktim@pilahpintar.id',
    jam: 'Sen–Sab: 08.00–16.00 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pelatihan'],
    nasabah: 378,
    sampahBulan: '2,9 Ton',
    jadwalEdukasi: 'Setiap Kamis, 10.00 WIB'
  },
  'Jakarta Pusat': {
    alamat: 'Jl. Kramat Raya No. 12, Senen, Jakarta Pusat 10450',
    telepon: '(021) 3901-7722',
    whatsapp: '0811-9988-0011',
    email: 'jakpus@pilahpintar.id',
    jam: 'Sen–Jum: 08.00–17.00 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pelatihan', 'Pengaduan'],
    nasabah: 290,
    sampahBulan: '2,0 Ton',
    jadwalEdukasi: 'Setiap Selasa, 09.30 WIB'
  },
  // Jawa Barat
  'Bandung': {
    alamat: 'Jl. Pajajaran No. 82, Cicendo, Kota Bandung 40172',
    telepon: '(022) 6034-8821',
    whatsapp: '0821-4433-6678',
    email: 'bandung@pilahpintar.id',
    jam: 'Sen–Sab: 08.00–16.00 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pelatihan', 'Pengaduan'],
    nasabah: 534,
    sampahBulan: '4,1 Ton',
    jadwalEdukasi: 'Setiap Sabtu, 08.30 WIB'
  },
  'Bogor': {
    alamat: 'Jl. Juanda No. 28, Bogor Tengah, Kota Bogor 16122',
    telepon: '(0251) 831-4400',
    whatsapp: '0822-5544-3322',
    email: 'bogor@pilahpintar.id',
    jam: 'Sen–Jum: 08.00–15.00 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi', 'Komunitas'],
    nasabah: 310,
    sampahBulan: '2,4 Ton',
    jadwalEdukasi: 'Setiap Rabu, 09.00 WIB'
  },
  'Bekasi': {
    alamat: 'Jl. Ahmad Yani No. 10, Bekasi Selatan, Kota Bekasi 17141',
    telepon: '(021) 8840-2211',
    whatsapp: '0823-6677-8899',
    email: 'bekasi@pilahpintar.id',
    jam: 'Sen–Sab: 08.30–16.30 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi', 'Pelatihan'],
    nasabah: 422,
    sampahBulan: '3,3 Ton',
    jadwalEdukasi: 'Setiap Sabtu, 09.00 WIB'
  },
  'Depok': {
    alamat: 'Jl. Margonda Raya No. 100, Pancoran Mas, Kota Depok 16431',
    telepon: '(021) 7754-3300',
    whatsapp: '0819-1122-3344',
    email: 'depok@pilahpintar.id',
    jam: 'Sen–Jum: 09.00–16.00 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi'],
    nasabah: 245,
    sampahBulan: '1,8 Ton',
    jadwalEdukasi: 'Setiap Kamis, 10.00 WIB'
  },
  // Jawa Tengah
  'Semarang': {
    alamat: 'Jl. Pemuda No. 150, Semarang Tengah, Kota Semarang 50132',
    telepon: '(024) 3541-2200',
    whatsapp: '0824-7788-5566',
    email: 'semarang@pilahpintar.id',
    jam: 'Sen–Sab: 08.00–16.00 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pelatihan'],
    nasabah: 398,
    sampahBulan: '3,0 Ton',
    jadwalEdukasi: 'Setiap Jumat, 09.00 WIB'
  },
  'Surakarta': {
    alamat: 'Jl. Slamet Riyadi No. 275, Laweyan, Kota Surakarta 57141',
    telepon: '(0271) 712-4400',
    whatsapp: '0825-3344-1122',
    email: 'solo@pilahpintar.id',
    jam: 'Sen–Sab: 08.30–15.30 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi', 'Komunitas'],
    nasabah: 287,
    sampahBulan: '2,2 Ton',
    jadwalEdukasi: 'Setiap Sabtu, 09.30 WIB'
  },
  // Jawa Timur
  'Surabaya': {
    alamat: 'Jl. Raya Gubeng No. 33, Gubeng, Kota Surabaya 60281',
    telepon: '(031) 5023-9910',
    whatsapp: '0831-7722-4490',
    email: 'surabaya@pilahpintar.id',
    jam: 'Sen–Sab: 08.00–16.00 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pelatihan'],
    nasabah: 612,
    sampahBulan: '5,2 Ton',
    jadwalEdukasi: 'Setiap Sabtu, 09.00 WIB'
  },
  'Malang': {
    alamat: 'Jl. Veteran No. 20, Lowokwaru, Kota Malang 65145',
    telepon: '(0341) 551-2200',
    whatsapp: '0832-5566-7788',
    email: 'malang@pilahpintar.id',
    jam: 'Sen–Jum: 08.00–15.30 WIB',
    layananAktif: ['Bank Sampah', 'Edukasi', 'Komunitas'],
    nasabah: 334,
    sampahBulan: '2,6 Ton',
    jadwalEdukasi: 'Setiap Rabu, 10.00 WIB'
  },
  // Default untuk kota yang belum ada data spesifik
  'default': {
    alamat: 'Hubungi pusat untuk info alamat cabang',
    telepon: '(021) 1234-5678',
    whatsapp: '0800-PILAH-01',
    email: 'info@pilahpintar.id',
    jam: 'Sen–Jum: 08.00–16.00 WIB',
    layananAktif: ['Bank Sampah'],
    nasabah: null,
    sampahBulan: null,
    jadwalEdukasi: null
  }
}

const dataWilayah = {
  'Aceh': {
    provinsi: 'Aceh', ibuKota: 'Banda Aceh',
    kota: ['Banda Aceh', 'Sabang', 'Langsa', 'Lhokseumawe', 'Subulussalam'],
    layanan: ['Bank Sampah', 'Edukasi', 'Pengaduan'], cabang: 3
  },
  'Sumatera Utara': {
    provinsi: 'Sumatera Utara', ibuKota: 'Medan',
    kota: ['Medan', 'Binjai', 'Tebing Tinggi', 'Pematangsiantar', 'Tanjungbalai', 'Sibolga', 'Padang Sidempuan'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pengaduan'], cabang: 5
  },
  'Sumatera Barat': {
    provinsi: 'Sumatera Barat', ibuKota: 'Padang',
    kota: ['Padang', 'Bukittinggi', 'Payakumbuh', 'Solok', 'Sawahlunto', 'Pariaman'],
    layanan: ['Bank Sampah', 'Edukasi'], cabang: 2
  },
  'Riau': {
    provinsi: 'Riau', ibuKota: 'Pekanbaru',
    kota: ['Pekanbaru', 'Dumai'],
    layanan: ['Bank Sampah', 'Edukasi', 'Pengaduan'], cabang: 2
  },
  'Kepulauan Riau': {
    provinsi: 'Kepulauan Riau', ibuKota: 'Tanjung Pinang',
    kota: ['Batam', 'Tanjung Pinang'],
    layanan: ['Bank Sampah', 'Edukasi'], cabang: 2
  },
  'Jambi': {
    provinsi: 'Jambi', ibuKota: 'Jambi',
    kota: ['Jambi', 'Sungai Penuh'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Sumatera Selatan': {
    provinsi: 'Sumatera Selatan', ibuKota: 'Palembang',
    kota: ['Palembang', 'Pagar Alam', 'Lubuklinggau', 'Prabumulih'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas'], cabang: 3
  },
  'Bengkulu': {
    provinsi: 'Bengkulu', ibuKota: 'Bengkulu',
    kota: ['Bengkulu'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Lampung': {
    provinsi: 'Lampung', ibuKota: 'Bandar Lampung',
    kota: ['Bandar Lampung', 'Metro'],
    layanan: ['Bank Sampah', 'Edukasi'], cabang: 2
  },
  'Bangka Belitung': {
    provinsi: 'Bangka Belitung', ibuKota: 'Pangkal Pinang',
    kota: ['Pangkal Pinang'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Banten': {
    provinsi: 'Banten', ibuKota: 'Serang',
    kota: ['Serang', 'Tangerang', 'Cilegon', 'Tangerang Selatan'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pengaduan'], cabang: 4
  },
  'DKI Jakarta': {
    provinsi: 'DKI Jakarta', ibuKota: 'Jakarta',
    kota: ['Jakarta Pusat', 'Jakarta Utara', 'Jakarta Barat', 'Jakarta Selatan', 'Jakarta Timur'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pelatihan', 'Pengaduan'], cabang: 6
  },
  'Jawa Barat': {
    provinsi: 'Jawa Barat', ibuKota: 'Bandung',
    kota: ['Bandung', 'Bogor', 'Bekasi', 'Depok', 'Cimahi', 'Tasikmalaya', 'Sukabumi', 'Cirebon'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pelatihan', 'Pengaduan'], cabang: 8
  },
  'Jawa Tengah': {
    provinsi: 'Jawa Tengah', ibuKota: 'Semarang',
    kota: ['Semarang', 'Surakarta', 'Salatiga', 'Magelang', 'Pekalongan', 'Tegal'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas'], cabang: 5
  },
  'DI Yogyakarta': {
    provinsi: 'DI Yogyakarta', ibuKota: 'Yogyakarta',
    kota: ['Yogyakarta'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas'], cabang: 2
  },
  'Jawa Timur': {
    provinsi: 'Jawa Timur', ibuKota: 'Surabaya',
    kota: ['Surabaya', 'Malang', 'Kediri', 'Blitar', 'Madiun', 'Mojokerto', 'Pasuruan', 'Probolinggo', 'Batu'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas', 'Pelatihan'], cabang: 6
  },
  'Bali': {
    provinsi: 'Bali', ibuKota: 'Denpasar',
    kota: ['Denpasar'],
    layanan: ['Bank Sampah', 'Edukasi'], cabang: 2
  },
  'Nusa Tenggara Barat': {
    provinsi: 'Nusa Tenggara Barat', ibuKota: 'Mataram',
    kota: ['Mataram', 'Bima'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Nusa Tenggara Timur': {
    provinsi: 'Nusa Tenggara Timur', ibuKota: 'Kupang',
    kota: ['Kupang'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Kalimantan Barat': {
    provinsi: 'Kalimantan Barat', ibuKota: 'Pontianak',
    kota: ['Pontianak', 'Singkawang'],
    layanan: ['Bank Sampah', 'Edukasi'], cabang: 2
  },
  'Kalimantan Tengah': {
    provinsi: 'Kalimantan Tengah', ibuKota: 'Palangka Raya',
    kota: ['Palangka Raya'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Kalimantan Selatan': {
    provinsi: 'Kalimantan Selatan', ibuKota: 'Banjarmasin',
    kota: ['Banjarmasin', 'Banjarbaru'],
    layanan: ['Bank Sampah', 'Edukasi'], cabang: 2
  },
  'Kalimantan Timur': {
    provinsi: 'Kalimantan Timur', ibuKota: 'Samarinda',
    kota: ['Samarinda', 'Balikpapan', 'Bontang'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas'], cabang: 3
  },
  'Kalimantan Utara': {
    provinsi: 'Kalimantan Utara', ibuKota: 'Tanjung Selor',
    kota: ['Tarakan'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Sulawesi Utara': {
    provinsi: 'Sulawesi Utara', ibuKota: 'Manado',
    kota: ['Manado', 'Bitung', 'Tomohon', 'Kotamobagu'],
    layanan: ['Bank Sampah', 'Edukasi'], cabang: 2
  },
  'Sulawesi Tengah': {
    provinsi: 'Sulawesi Tengah', ibuKota: 'Palu',
    kota: ['Palu'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Sulawesi Selatan': {
    provinsi: 'Sulawesi Selatan', ibuKota: 'Makassar',
    kota: ['Makassar', 'Parepare', 'Palopo'],
    layanan: ['Bank Sampah', 'Edukasi', 'Komunitas'], cabang: 3
  },
  'Sulawesi Tenggara': {
    provinsi: 'Sulawesi Tenggara', ibuKota: 'Kendari',
    kota: ['Kendari', 'Baubau'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Gorontalo': {
    provinsi: 'Gorontalo', ibuKota: 'Gorontalo',
    kota: ['Gorontalo'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Sulawesi Barat': {
    provinsi: 'Sulawesi Barat', ibuKota: 'Mamuju',
    kota: ['Mamuju'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Maluku': {
    provinsi: 'Maluku', ibuKota: 'Ambon',
    kota: ['Ambon', 'Tual'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Maluku Utara': {
    provinsi: 'Maluku Utara', ibuKota: 'Sofifi',
    kota: ['Ternate', 'Tidore Kepulauan'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Papua': {
    provinsi: 'Papua', ibuKota: 'Jayapura',
    kota: ['Jayapura'],
    layanan: ['Bank Sampah'], cabang: 1
  },
  'Papua Barat': {
    provinsi: 'Papua Barat', ibuKota: 'Manokwari',
    kota: ['Manokwari'],
    layanan: ['Bank Sampah'], cabang: 1
  }
}

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
  'Pelatihan': FaGraduationCap,
  'Pengaduan': FaExclamationCircle
}

const LayananWilayah = () => {
  const [selectedProvinsi, setSelectedProvinsi] = useState(null)
  const [selectedKota, setSelectedKota] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showDetail, setShowDetail] = useState(false)

  const provinsiList = Object.keys(dataWilayah).map(key => ({
    ...dataWilayah[key], id: key
  }))

  const filteredProvinsi = provinsiList.filter(prov =>
    prov.provinsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prov.kota.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const handleProvinsiClick = (provinsi) => {
    setSelectedProvinsi(provinsi)
    setSelectedKota(null)
    setShowDetail(true)
  }

  const handleBack = () => {
    setShowDetail(false)
    setSelectedProvinsi(null)
    setSelectedKota(null)
  }

  const getDetailKota = (namaKota) => {
    return detailKota[namaKota] || detailKota['default']
  }

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
          {showDetail ? (
            <>
              <button onClick={handleBack} className="hover:text-green-600 cursor-pointer">Wilayah</button>
              <span>/</span>
              <span className="text-green-600 font-medium">{selectedProvinsi?.provinsi}</span>
            </>
          ) : (
            <span className="text-green-600 font-medium">Wilayah</span>
          )}
        </div>

        {/* Header */}
        <div className="mb-5 text-center">
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
            Temukan cabang dan layanan PilahPintar di 34 provinsi seluruh Indonesia
          </p>
        </div>

        {/* Search — hanya di halaman daftar */}
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

        <AnimatePresence mode="wait">
          {!showDetail ? (
            /* ===== DAFTAR PROVINSI ===== */
            <motion.div
              key="provinsi-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {filteredProvinsi.map((prov, idx) => (
                <motion.div
                  key={prov.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.02 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  onClick={() => handleProvinsiClick(prov)}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md 
                           transition-all cursor-pointer border border-gray-100
                           flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <FaCity className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-gray-800">{prov.provinsi}</h3>
                      <p className="text-[10px] text-gray-500">
                        {prov.kota.length} kota · {prov.cabang} cabang
                      </p>
                      <div className="flex flex-wrap gap-0.5 mt-1">
                        {prov.layanan.map((l, i) => (
                          <span key={i} className={`text-[8px] px-1.5 py-0.5 rounded-full font-medium ${layananColors[l]}`}>
                            {l}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <FaChevronRight className="text-gray-300 text-xs group-hover:text-green-600 transition-colors flex-shrink-0 ml-2" />
                </motion.div>
              ))}

              {filteredProvinsi.length === 0 && (
                <div className="col-span-full text-center py-8">
                  <FaCity className="text-4xl text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Tidak ada provinsi yang ditemukan</p>
                </div>
              )}
            </motion.div>
          ) : (
            /* ===== DETAIL PROVINSI ===== */
            <motion.div
              key="provinsi-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {/* Banner Provinsi */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <FaCity className="text-white text-xl" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">{selectedProvinsi.provinsi}</h2>
                      <p className="text-xs opacity-90">Ibu Kota: {selectedProvinsi.ibuKota}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleBack}
                    className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition"
                  >
                    ← Semua Provinsi
                  </button>
                </div>
              </div>

              {/* Statistik Provinsi */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                  <div className="text-lg font-bold text-green-600">{selectedProvinsi.kota.length}</div>
                  <div className="text-[10px] text-gray-500">Kota/Kab</div>
                </div>
                <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                  <div className="text-lg font-bold text-green-600">{selectedProvinsi.cabang}</div>
                  <div className="text-[10px] text-gray-500">Cabang Aktif</div>
                </div>
                <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                  <div className="text-lg font-bold text-green-600">{selectedProvinsi.layanan.length}</div>
                  <div className="text-[10px] text-gray-500">Jenis Layanan</div>
                </div>
              </div>

              {/* Layanan Tersedia */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Layanan di Provinsi Ini</h3>
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
                <p className="text-[10px] text-gray-400 mt-2">
                  * Tidak semua layanan tersedia di setiap kota. Klik kota di bawah untuk detail.
                </p>
              </div>

              {/* Pilih Kota */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Pilih Kota / Kabupaten</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {selectedProvinsi.kota.map((kota, idx) => {
                    const detail = getDetailKota(kota)
                    const isSelected = selectedKota === kota
                    return (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.02 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedKota(isSelected ? null : kota)}
                        className={`p-2.5 rounded-lg text-left transition-all text-xs border
                                  ${isSelected 
                                    ? 'bg-green-600 text-white border-green-600 shadow-md' 
                                    : 'bg-gray-50 hover:bg-green-50 text-gray-700 border-gray-100'}`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <FaMapMarkerAlt className={`text-[10px] ${isSelected ? 'text-white' : 'text-green-600'}`} />
                          <span className="font-semibold">{kota}</span>
                        </div>
                        <div className={`text-[9px] ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                          {detail.layananAktif.length} layanan
                          {detail.nasabah && ` · ${detail.nasabah} nasabah`}
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* ===== DETAIL KOTA ===== */}
              <AnimatePresence>
                {selectedKota && (() => {
                  const detail = getDetailKota(selectedKota)
                  return (
                    <motion.div
                      key={selectedKota}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3"
                    >
                      {/* Header Kota */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                        <div className="flex items-center gap-2 mb-3">
                          <FaCheckCircle className="text-green-600 text-base" />
                          <h4 className="text-sm font-bold text-gray-800">Cabang {selectedKota}</h4>
                          <span className="ml-auto text-[9px] bg-green-600 text-white px-2 py-0.5 rounded-full">● Aktif</span>
                        </div>

                        {/* Statistik Kota */}
                        {detail.nasabah && (
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            <div className="bg-white rounded-lg p-2 text-center">
                              <div className="text-sm font-bold text-green-600">{detail.nasabah}</div>
                              <div className="text-[9px] text-gray-500">Nasabah</div>
                            </div>
                            <div className="bg-white rounded-lg p-2 text-center">
                              <div className="text-sm font-bold text-green-600">{detail.sampahBulan}</div>
                              <div className="text-[9px] text-gray-500">Sampah/Bulan</div>
                            </div>
                            <div className="bg-white rounded-lg p-2 text-center">
                              <div className="text-sm font-bold text-green-600">{detail.layananAktif.length}</div>
                              <div className="text-[9px] text-gray-500">Layanan</div>
                            </div>
                          </div>
                        )}

                        {/* Layanan aktif di kota ini */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {detail.layananAktif.map((l, i) => {
                            const Icon = layananIcons[l] || FaMapMarkerAlt
                            return (
                              <span key={i} className={`text-[10px] px-2 py-1 rounded-full font-semibold flex items-center gap-1 ${layananColors[l]}`}>
                                <Icon className="text-[8px]" />{l}
                              </span>
                            )
                          })}
                        </div>

                        {/* Info kontak */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[10px] text-gray-600">
                          <div className="bg-white rounded-lg p-2.5 space-y-1.5">
                            <p className="flex items-start gap-1.5">
                              <FaMapMarkerAlt className="text-green-600 mt-0.5 flex-shrink-0" />
                              {detail.alamat}
                            </p>
                            <p className="flex items-center gap-1.5">
                              <FaPhone className="text-green-600 flex-shrink-0" />
                              {detail.telepon}
                            </p>
                            <p className="flex items-center gap-1.5">
                              <FaEnvelope className="text-green-600 flex-shrink-0" />
                              {detail.email}
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-2.5 space-y-1.5">
                            <p className="flex items-center gap-1.5">
                              <FaClock className="text-green-600 flex-shrink-0" />
                              {detail.jam}
                            </p>
                            {detail.jadwalEdukasi && (
                              <p className="flex items-center gap-1.5">
                                <FaCalendarAlt className="text-green-600 flex-shrink-0" />
                                Edukasi: {detail.jadwalEdukasi}
                              </p>
                            )}
                            <p className="flex items-center gap-1.5">
                              <FaWhatsapp className="text-green-600 flex-shrink-0" />
                              {detail.whatsapp}
                            </p>
                          </div>
                        </div>

                        {/* Tombol Aksi */}
                        <div className="flex gap-2 mt-3">
                          <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-xs font-semibold
                                           hover:bg-green-700 transition flex items-center justify-center gap-1">
                            <FaWhatsapp className="text-xs" /> Chat WhatsApp
                          </button>
                          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-xs font-semibold
                                           hover:bg-blue-700 transition flex items-center justify-center gap-1">
                            <FaMapMarkerAlt className="text-xs" /> Buka Maps
                          </button>
                          <button className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition flex-shrink-0">
                            <FaPhone className="text-xs" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )
                })()}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 rounded-xl p-3 flex items-start gap-2">
          <FaInfoCircle className="text-blue-500 text-xs mt-0.5 flex-shrink-0" />
          <p className="text-[10px] text-blue-700">
            PilahPintar hadir di 34 provinsi dan 100+ kota di seluruh Indonesia. 
            Klik provinsi → pilih kota untuk melihat alamat, layanan, jadwal edukasi, dan kontak cabang.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default LayananWilayah