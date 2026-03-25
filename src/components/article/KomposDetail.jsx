import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaLeaf, FaTint, FaSun, FaBug, FaRecycle, FaClock, FaBoxOpen,
  FaShare
} from 'react-icons/fa'
import { GiPlantRoots, GiEarthAmerica, GiGrowth } from 'react-icons/gi'
import ShareModal from './ShareModal'

const KomposDetail = ({ article, onClose }) => {
  const [activeTab, setActiveTab] = useState('manfaat')
  const [showShareModal, setShowShareModal] = useState(false)

  const handleShare = (platform, articleData) => {
    console.log('Sharing to:', platform, articleData)
  }

  return (
    <>
      <div className="space-y-6 sm:space-y-8">

        {/* Header — hanya tombol share */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setShowShareModal(true)}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full
                       flex items-center justify-center text-green-600
                       hover:bg-white shadow-lg border border-green-200 transition-all"
          >
            <FaShare className="text-sm" />
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-600 to-emerald-700
                       rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute"
                style={{ left: `${(i * 23) % 100}%`, top: `${(i * 37) % 100}%` }}>
                <FaLeaf className="text-white text-2xl sm:text-3xl" />
              </div>
            ))}
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 sm:gap-7">
            <div className="flex-1 text-center md:text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full
                             flex items-center justify-center mx-auto md:mx-0 mb-3">
                <GiPlantRoots className="text-white text-3xl sm:text-4xl" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5">
                {article?.title || 'Panduan Kompos'}
              </h2>
              <p className="text-white/80 text-sm sm:text-base">
                Ubah sampah organik menjadi pupuk berkualitas
              </p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-3">
              {[
                { icon: GiGrowth, value: '100%', label: 'Organik',      color: 'text-yellow-300' },
                { icon: FaTint,   value: '70%',  label: 'Retensi Air',  color: 'text-blue-300'   },
                { icon: FaSun,    value: '+50%', label: 'Nutrisi',      color: 'text-yellow-300' },
                { icon: FaBug,    value: '+80%', label: 'Bioaktivitas', color: 'text-green-300'  },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <s.icon className={`text-xl sm:text-2xl mx-auto mb-1 ${s.color}`} />
                  <div className="text-lg sm:text-xl font-bold">{s.value}</div>
                  <div className="text-[10px] sm:text-xs opacity-80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-3">
          {[
            { id: 'manfaat', label: '🌱 Manfaat' },
            { id: 'cara',    label: '📝 Cara Membuat' },
            { id: 'tips',    label: '💡 Tips' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-sm transition-all
                         ${activeTab === tab.id
                           ? 'bg-green-600 text-white shadow-md'
                           : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === 'manfaat' && <ManfaatTab key="manfaat" />}
          {activeTab === 'cara'    && <CaraTab    key="cara"    />}
          {activeTab === 'tips'    && <TipsTab    key="tips"    />}
        </AnimatePresence>

        <ProgressionVisual />
      </div>

      <ShareModal
        showShareModal={showShareModal}
        selectedArticle={article}
        closeShareModal={() => setShowShareModal(false)}
        handleShare={handleShare}
      />
    </>
  )
}

const ManfaatTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    className="grid sm:grid-cols-2 gap-4"
  >
    {[
      { icon: FaLeaf,        title: 'Menyuburkan Tanah',       iconBg: 'bg-green-500',
        text: 'Kompos meningkatkan kandungan bahan organik tanah, memperbaiki struktur tanah, dan meningkatkan kemampuan tanah menyimpan air hingga 70%.' },
      { icon: GiEarthAmerica, title: 'Nutrisi Lengkap',         iconBg: 'bg-blue-500',
        text: 'Mengandung unsur hara makro (N, P, K) dan mikro yang dibutuhkan tanaman secara lengkap dan seimbang.' },
      { icon: FaBug,         title: 'Aktivitas Mikroorganisme', iconBg: 'bg-yellow-500',
        text: 'Menjadi makanan bagi mikroorganisme tanah yang membantu proses dekomposisi dan menyuburkan tanah.' },
      { icon: FaRecycle,     title: 'Ramah Lingkungan',         iconBg: 'bg-purple-500',
        text: 'Mengurangi ketergantungan pada pupuk kimia yang dapat merusak lingkungan dalam jangka panjang.' },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.08 }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-5 border border-green-100"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-10 h-10 sm:w-11 sm:h-11 ${item.iconBg} rounded-xl flex items-center justify-center`}>
            <item.icon className="text-white text-lg sm:text-xl" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-gray-800">{item.title}</h3>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.text}</p>
      </motion.div>
    ))}
  </motion.div>
)

const CaraTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    className="space-y-3"
  >
    {[
      { step: 1, title: 'Siapkan Wadah',  desc: 'Siapkan wadah atau lubang di tanah dengan ukuran yang sesuai', icon: FaBoxOpen  },
      { step: 2, title: 'Masukkan Bahan', desc: 'Masukkan sampah organik bergantian dengan tanah',              icon: FaLeaf     },
      { step: 3, title: 'Siram Air',      desc: 'Siram dengan air secukupnya agar tetap lembab',               icon: FaTint     },
      { step: 4, title: 'Aduk Rutin',     desc: 'Aduk setiap 1 minggu sekali untuk menjaga aerasi',            icon: FaRecycle  },
      { step: 5, title: 'Tunggu Matang',  desc: 'Tunggu 1–2 bulan hingga kompos siap digunakan',               icon: FaClock    },
    ].map((step) => (
      <div key={step.step} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700 text-sm">
          {step.step}
        </div>
        <step.icon className="text-green-500 text-xl sm:text-2xl" />
        <div>
          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{step.title}</h4>
          <p className="text-xs sm:text-sm text-gray-500">{step.desc}</p>
        </div>
      </div>
    ))}
  </motion.div>
)

const TipsTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    className="grid grid-cols-2 sm:grid-cols-3 gap-3"
  >
    {[
      { tip: 'Jangan gunakan daging atau tulang',    icon: '🚫' },
      { tip: 'Pastikan kelembaban terjaga',           icon: '💧' },
      { tip: 'Potong bahan menjadi kecil-kecil',     icon: '✂️' },
      { tip: 'Campur bahan kering dan basah bergantian', icon: '🔄' },
      { tip: 'Tutup wadah untuk menghindari hama',   icon: '🔒' },
      { tip: 'Aduk secara teratur tiap minggu',      icon: '🌿' },
    ].map((item, i) => (
      <div key={i} className="bg-gradient-to-br from-yellow-50 to-orange-50 p-3 sm:p-4 rounded-xl border border-yellow-200">
        <span className="text-xl sm:text-2xl mb-2 block">{item.icon}</span>
        <p className="text-xs sm:text-sm text-gray-700 font-medium leading-snug">{item.tip}</p>
      </div>
    ))}
  </motion.div>
)

const ProgressionVisual = () => (
  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-5 border border-green-100">
    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-4 text-center">
      🌱 Proses Pembuatan Kompos
    </h3>
    <div className="grid grid-cols-4 gap-2 mb-4">
      {[
        { week: 'Minggu 1', label: 'Mulai',  color: 'bg-gray-200'   },
        { week: 'Minggu 2', label: 'Aktif',  color: 'bg-green-300'  },
        { week: 'Minggu 4', label: 'Proses', color: 'bg-green-400'  },
        { week: 'Minggu 8', label: 'Matang', color: 'bg-green-600'  },
      ].map((stage, i) => (
        <div key={i} className="text-center">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-1.5 shadow-sm`}>
            <GiGrowth className="text-white text-lg sm:text-xl" />
          </div>
          <div className="text-[9px] sm:text-[10px] font-semibold text-gray-600">{stage.week}</div>
          <div className="text-[8px] sm:text-[9px] text-gray-400">{stage.label}</div>
        </div>
      ))}
    </div>
    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
      <div className="absolute h-full bg-gradient-to-r from-green-400 to-emerald-600 rounded-full w-full" />
    </div>
  </div>
)

export default KomposDetail