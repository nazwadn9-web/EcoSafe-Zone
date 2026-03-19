import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaArrowLeft, FaSchool, FaChalkboardTeacher, FaUsers, 
  FaBook, FaAward, FaCalendarAlt, FaClock,
  FaMapMarkerAlt, FaUserGraduate, FaStar,
  FaLeaf, FaHandsHelping, FaRecycle, FaWhatsapp,
  FaEnvelope, FaChevronDown, FaChevronUp
} from 'react-icons/fa'
import { GiTeacher, GiSchoolBag } from 'react-icons/gi'

const Edukasi = () => {
  const [activeTab, setActiveTab] = useState('program')
  const [expandedProgram, setExpandedProgram] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)

  const programs = [
    {
      id: 1,
      title: 'Edukasi SD',
      desc: 'Pengenalan lingkungan untuk siswa SD dengan metode bermain sambil belajar.',
      icon: FaSchool,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-200',
      duration: '2 jam',
      peserta: '30-40 siswa',
      level: 'SD Kelas 4-6',
      harga: 'Gratis',
      materi: [
        'Pengenalan jenis sampah',
        'Cara memilah sampah',
        'Game pilah sampah interaktif',
        'Pembuatan kompos sederhana',
        'Kegiatan menanam pohon'
      ],
      jadwal: ['Senin', 'Rabu', 'Jumat'],
      gambar: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format'
    },
    {
      id: 2,
      title: 'Edukasi SMP/SMA',
      desc: 'Program mendalam tentang isu lingkungan dan aksi nyata untuk remaja.',
      icon: FaUserGraduate,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      duration: '3 jam',
      peserta: '25-35 siswa',
      level: 'SMP/SMA',
      harga: 'Rp 25.000',
      materi: [
        'Isu lingkungan global',
        'Dampak plastik sekali pakai',
        'Workshop daur ulang kreatif',
        'Proyek lingkungan sekolah',
        'Pengelolaan bank sampah'
      ],
      jadwal: ['Selasa', 'Kamis', 'Sabtu'],
      gambar: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format'
    },
    {
      id: 3,
      title: 'Pelatihan Guru',
      desc: 'Workshop integrasi pendidikan lingkungan dalam kurikulum.',
      icon: GiTeacher,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      duration: '6 jam',
      peserta: '20-30 guru',
      level: 'Guru',
      harga: 'Rp 150.000',
      materi: [
        'Integrasi lingkungan dalam kurikulum',
        'Metode pembelajaran kreatif',
        'Praktek pembuatan kompos',
        'Perancangan proyek sekolah',
        'Sistem evaluasi & monitoring'
      ],
      jadwal: ['Sabtu', 'Minggu'],
      gambar: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format'
    },
    {
      id: 4,
      title: 'Edukasi Masyarakat',
      desc: 'Penyuluhan pengelolaan sampah rumah tangga untuk umum.',
      icon: FaUsers,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      duration: '2 jam',
      peserta: '50+ peserta',
      level: 'Masyarakat Umum',
      harga: 'Gratis',
      materi: [
        'Pemilahan sampah rumah tangga',
        'Pembuatan kompos rumahan',
        'Pengenalan bank sampah',
        'Pembuatan ecobrick',
        'Tips hemat energi'
      ],
      jadwal: ['Minggu', 'Libur nasional'],
      gambar: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format'
    }
  ]

  const testimonials = [
    {
      name: 'Ibu Sri Wahyuni',
      role: 'Guru SD Negeri 1',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Program edukasinya sangat bermanfaat. Siswa-siswi jadi lebih paham cara memilah sampah dengan benar.',
      rating: 5,
      program: 'Edukasi SD'
    },
    {
      name: 'Bapak Ahmad Fauzi',
      role: 'Kepala SMP Negeri 2',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Materi yang disampaikan relevan dan mudah dipahami. Anak-anak sangat antusias mengikuti kegiatan.',
      rating: 5,
      program: 'Edukasi SMP'
    },
    {
      name: 'Ibu Maria Santoso',
      role: 'Guru IPA SMA',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'Pelatihan untuk guru sangat komprehensif. Banyak praktik baik yang bisa langsung diterapkan di kelas.',
      rating: 4,
      program: 'Pelatihan Guru'
    }
  ]

  const fasilitas = [
    { icon: FaAward, title: 'Sertifikat Resmi', desc: 'Berlaku nasional' },
    { icon: FaBook, title: 'Modul Lengkap', desc: 'Materi cetak & digital' },
    { icon: FaUsers, title: 'Pengajar Ahli', desc: 'Berpengalaman' },
    { icon: FaHandsHelping, title: 'Pendampingan', desc: 'Konsultasi gratis' }
  ]

  const faqs = [
    { 
      q: 'Apakah programnya gratis?', 
      a: 'Ya, ada program gratis untuk Edukasi SD dan Edukasi Masyarakat. Untuk program lainnya dikenakan biaya yang terjangkau.' 
    },
    { 
      q: 'Bagaimana cara mendaftar?', 
      a: 'Anda bisa mendaftar melalui tombol "Daftar" di setiap program atau menghubungi kami via WhatsApp.' 
    },
    { 
      q: 'Apakah mendapatkan sertifikat?', 
      a: 'Ya, semua peserta akan mendapatkan sertifikat resmi yang dapat digunakan untuk berbagai keperluan.' 
    },
    { 
      q: 'Bisa request jadwal khusus?', 
      a: 'Tentu, kami bisa menyesuaikan jadwal dengan kebutuhan sekolah atau instansi Anda.' 
    }
  ]

  const stats = [
    { icon: FaUsers, label: 'Peserta', value: '5.200+' },
    { icon: FaSchool, label: 'Sekolah', value: '127' },
    { icon: FaChalkboardTeacher, label: 'Pengajar', value: '28' },
    { icon: FaCalendarAlt, label: 'Program', value: '245' }
  ]

  const toggleProgram = (id) => {
    setExpandedProgram(expandedProgram === id ? null : id)
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-white via-green-50/20 to-white pt-6 pb-12"
    >
      <div className="container-custom max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-xs text-gray-500 mb-4">
          <Link to="/" className="hover:text-green-600 transition-colors">Beranda</Link>
          <span>/</span>
          <Link to="/layanan" className="hover:text-green-600 transition-colors">Layanan</Link>
          <span>/</span>
          <span className="text-green-600 font-medium">Edukasi</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 
                       rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg"
            >
              <GiSchoolBag className="text-2xl text-white" />
            </motion.div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
              Layanan <span className="text-green-600">Edukasi</span>
            </h1>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Program edukasi lingkungan untuk semua kalangan, dari anak-anak hingga masyarakat umum
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <stat.icon className="text-lg text-green-600 mx-auto mb-1" />
              <div className="text-base font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-6">
          {[
            { id: 'program', label: '📋 Program', icon: FaBook },
            { id: 'testimonial', label: '⭐ Testimoni', icon: FaStar },
            { id: 'faq', label: '❓ FAQ', icon: FaLeaf }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1
                        ${activeTab === tab.id 
                          ? 'bg-green-600 text-white shadow-md' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              <tab.icon className="text-xs" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Program Tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'program' && (
            <motion.div
              key="program"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              {programs.map((program, index) => {
                const Icon = program.icon
                const isExpanded = expandedProgram === program.id

                return (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all
                              border ${program.borderColor} overflow-hidden`}
                  >
                    <div className="p-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Image */}
                        <div className="sm:w-32 md:w-40 flex-shrink-0">
                          <div className="relative h-24 sm:h-full rounded-lg overflow-hidden">
                            <img 
                              src={program.gambar} 
                              alt={program.title}
                              className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-20`} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <div className={`w-8 h-8 rounded-lg ${program.bgColor} flex items-center justify-center ${program.textColor}`}>
                                <Icon className="text-sm" />
                              </div>
                              <h2 className="text-base font-bold text-gray-800">{program.title}</h2>
                            </div>
                            <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${program.bgColor} ${program.textColor}`}>
                              {program.harga}
                            </span>
                          </div>
                          
                          <p className="text-xs text-gray-600 mb-2 line-clamp-2">{program.desc}</p>

                          <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
                            <span className="flex items-center gap-0.5">
                              <FaUsers className="text-[10px]" /> {program.peserta}
                            </span>
                            <span className="flex items-center gap-0.5">
                              <FaUserGraduate className="text-[10px]" /> {program.level}
                            </span>
                            <span className="flex items-center gap-0.5">
                              <FaClock className="text-[10px]" /> {program.duration}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-2">
                            {program.materi.slice(0, 2).map((item, idx) => (
                              <span key={idx} className="px-2 py-0.5 bg-gray-100 rounded-full text-[10px] text-gray-600">
                                {item}
                              </span>
                            ))}
                            {program.materi.length > 2 && (
                              <span className="px-2 py-0.5 bg-gray-100 rounded-full text-[10px] text-gray-600">
                                +{program.materi.length - 2} materi
                              </span>
                            )}
                          </div>

                          <div className="flex gap-2">
                            <button 
                              onClick={() => toggleProgram(program.id)}
                              className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all
                                       bg-gradient-to-r ${program.color} text-white hover:shadow-md
                                       flex items-center justify-center gap-1`}
                            >
                              {isExpanded ? 'Tutup Detail' : 'Lihat Detail'}
                              {isExpanded ? <FaChevronUp className="text-[10px]" /> : <FaChevronDown className="text-[10px]" />}
                            </button>
                            <button className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                              <FaWhatsapp className="text-sm" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-gray-100"
                          >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                              <div>
                                <h3 className="font-bold text-gray-700 mb-2 flex items-center gap-1">
                                  <FaBook className="text-green-600" /> Materi Lengkap:
                                </h3>
                                <ul className="space-y-1.5">
                                  {program.materi.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5 text-gray-600">
                                      <FaLeaf className="text-green-500 mt-0.5 text-[10px] flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-700 mb-2 flex items-center gap-1">
                                  <FaCalendarAlt className="text-green-600" /> Jadwal Tersedia:
                                </h3>
                                <div className="flex flex-wrap gap-1 mb-4">
                                  {program.jadwal.map((day, idx) => (
                                    <span key={idx} className={`px-2 py-1 rounded-lg text-[10px] ${program.bgColor} ${program.textColor}`}>
                                      {day}
                                    </span>
                                  ))}
                                </div>
                                <h3 className="font-bold text-gray-700 mb-2 flex items-center gap-1">
                                  <FaAward className="text-green-600" /> Benefit:
                                </h3>
                                <ul className="space-y-1">
                                  <li className="flex items-start gap-1.5 text-gray-600">
                                    <FaStar className="text-yellow-500 mt-0.5 text-[10px]" /> 
                                    Sertifikat resmi
                                  </li>
                                  <li className="flex items-start gap-1.5 text-gray-600">
                                    <FaStar className="text-yellow-500 mt-0.5 text-[10px]" /> 
                                    Modul pembelajaran
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* Testimonial Tab */}
          {activeTab === 'testimonial' && (
            <motion.div
              key="testimonial"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {testimonials.map((testi, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={testi.image} 
                      alt={testi.name} 
                      className="w-10 h-10 rounded-full object-cover border-2 border-green-200"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm text-gray-800 truncate">{testi.name}</h3>
                      <p className="text-xs text-gray-500">{testi.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-yellow-400 text-xs mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < testi.rating ? 'text-yellow-400' : 'text-gray-200'} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 italic leading-relaxed">"{testi.text}"</p>
                  <div className="mt-2">
                    <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      {testi.program}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-2"
            >
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-4 py-3 flex items-center justify-between text-left"
                  >
                    <span className="text-sm font-medium text-gray-800">{faq.q}</span>
                    {openFaq === idx ? (
                      <FaChevronUp className="text-xs text-green-600" />
                    ) : (
                      <FaChevronDown className="text-xs text-gray-400" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 pb-3"
                      >
                        <p className="text-xs text-gray-600 border-t border-gray-100 pt-2">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fasilitas */}
        <div className="mt-10">
          <h2 className="text-base font-bold text-gray-800 text-center mb-4">
            Fasilitas yang Didapatkan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fasilitas.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <item.icon className="text-lg text-green-600" />
                </div>
                <h3 className="font-bold text-xs text-gray-800">{item.title}</h3>
                <p className="text-[10px] text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-center text-white"
        >
          <h2 className="text-base font-bold mb-1">Siap Menjadi Agen Perubahan?</h2>
          <p className="text-xs mb-4 opacity-90">Mulai perjalanan edukasi lingkungan Anda bersama kami</p>
          <div className="flex justify-center gap-3">
            <button className="bg-white text-green-600 px-5 py-2 rounded-full text-xs font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all">
              Daftar Sekarang
            </button>
            <button className="border border-white text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-white/10 hover:scale-105 transition-all flex items-center gap-1">
              <FaWhatsapp className="text-xs" />
              Hubungi Kami
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Edukasi