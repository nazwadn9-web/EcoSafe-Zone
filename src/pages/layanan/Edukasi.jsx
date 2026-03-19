import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaArrowLeft, FaSchool, FaChalkboardTeacher, FaUsers, 
  FaBook, FaAward, FaCalendarAlt, FaClock,
  FaMapMarkerAlt, FaUserGraduate, FaStar,
  FaLeaf, FaHandsHelping, FaRecycle
} from 'react-icons/fa'
import { GiTeacher, GiSchoolBag } from 'react-icons/gi'

const Edukasi = () => {
  const [activeTab, setActiveTab] = useState('program')
  const [selectedProgram, setSelectedProgram] = useState(null)

  const programs = [
    {
      id: 1,
      title: 'Edukasi SD',
      desc: 'Pengenalan lingkungan untuk siswa SD dengan metode bermain sambil belajar.',
      icon: FaSchool,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      duration: '2 jam',
      peserta: '30-40',
      level: 'SD Kelas 4-6',
      harga: 'Gratis',
      materi: ['Pengenalan sampah', 'Cara memilah', 'Game pilah', 'Kompos sederhana', 'Menanam pohon'],
      jadwal: ['Senin', 'Rabu', 'Jumat'],
      gambar: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b'
    },
    {
      id: 2,
      title: 'Edukasi SMP/SMA',
      desc: 'Program mendalam tentang isu lingkungan dan aksi nyata untuk remaja.',
      icon: FaUserGraduate,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      duration: '3 jam',
      peserta: '25-35',
      level: 'SMP/SMA',
      harga: 'Rp 25K',
      materi: ['Isu lingkungan', 'Dampak plastik', 'Workshop daur ulang', 'Proyek sekolah', 'Bank sampah'],
      jadwal: ['Selasa', 'Kamis', 'Sabtu'],
      gambar: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1'
    },
    {
      id: 3,
      title: 'Pelatihan Guru',
      desc: 'Workshop integrasi pendidikan lingkungan dalam kurikulum.',
      icon: GiTeacher,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      duration: '6 jam',
      peserta: '20-30',
      level: 'Guru',
      harga: 'Rp 150K',
      materi: ['Kurikulum', 'Metode kreatif', 'Praktek kompos', 'Proyek sekolah', 'Evaluasi'],
      jadwal: ['Sabtu', 'Minggu'],
      gambar: 'https://images.unsplash.com/photo-1577896851231-70ef18881754'
    },
    {
      id: 4,
      title: 'Edukasi Masyarakat',
      desc: 'Penyuluhan pengelolaan sampah rumah tangga untuk umum.',
      icon: FaUsers,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      duration: '2 jam',
      peserta: '50+',
      level: 'Umum',
      harga: 'Gratis',
      materi: ['Pilah sampah', 'Kompos rumahan', 'Bank sampah', 'Ecobrick', 'Hemat energi'],
      jadwal: ['Minggu', 'Libur'],
      gambar: 'https://images.unsplash.com/photo-1531482615713-2afd69097998'
    }
  ]

  const testimonials = [
    {
      name: 'Ibu Sri',
      role: 'Guru SD',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Programnya sangat bermanfaat. Siswa jadi paham memilah sampah.',
      rating: 5
    },
    {
      name: 'Bapak Ahmad',
      role: 'Kepala SMP',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Materi relevan, anak-anak antusias!',
      rating: 5
    },
    {
      name: 'Ibu Maria',
      role: 'Guru IPA',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'Pelatihan guru sangat komprehensif.',
      rating: 4
    }
  ]

  const fasilitas = [
    { icon: FaAward, title: 'Sertifikat', desc: 'Resmi' },
    { icon: FaBook, title: 'Modul', desc: 'Lengkap' },
    { icon: FaUsers, title: 'Pengajar', desc: 'Berpengalaman' },
    { icon: FaHandsHelping, title: 'Pendampingan', desc: 'Konsultasi' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-12"
    >
      <div className="container-custom max-w-6xl px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
          <Link to="/" className="hover:text-green-600">Beranda</Link>
          <span>/</span>
          <Link to="/layanan" className="hover:text-green-600">Layanan</Link>
          <span>/</span>
          <span className="text-green-600">Edukasi</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <Link to="/layanan" className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 mb-4 text-sm">
            <FaArrowLeft size={12} /> Kembali
          </Link>
          
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
              Program edukasi lingkungan untuk semua kalangan
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {[
            { icon: FaUsers, label: 'Peserta', value: '5rb+' },
            { icon: FaSchool, label: 'Sekolah', value: '120+' },
            { icon: FaChalkboardTeacher, label: 'Pengajar', value: '25+' },
            { icon: FaCalendarAlt, label: 'Program', value: '200+' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-xl p-3 text-center shadow-sm"
            >
              <stat.icon className="text-lg text-green-600 mx-auto mb-1" />
              <div className="text-base font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-6">
          {['program', 'testimonial', 'faq'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all
                        ${activeTab === tab 
                          ? 'bg-green-600 text-white shadow' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {tab === 'program' ? '📋 Program' : tab === 'testimonial' ? '⭐ Testi' : '❓ FAQ'}
            </button>
          ))}
        </div>

        {/* Program Tab */}
        {activeTab === 'program' && (
          <div className="space-y-4">
            {programs.map((program, index) => {
              const Icon = program.icon
              const isSelected = selectedProgram === program.id

              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-white rounded-xl shadow-md overflow-hidden
                            ${isSelected ? 'ring-2 ring-green-500' : ''}`}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image - Mobile: height 32, Desktop: width 1/3 */}
                    <div className="relative h-32 md:h-auto md:w-1/3 overflow-hidden">
                      <img 
                        src={program.gambar} 
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-60`}></div>
                      <div className="absolute top-2 left-2">
                        <div className={`w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm 
                                      flex items-center justify-center ${program.textColor}`}>
                          <Icon className="text-sm" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <span className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-0.5 text-xs">
                          ⏱️ {program.duration}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:w-2/3">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-base font-bold text-gray-800">{program.title}</h2>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${program.bgColor} ${program.textColor} font-bold`}>
                          {program.harga}
                        </span>
                      </div>
                      
                      <p className="text-xs text-gray-500 mb-2">{program.desc}</p>

                      <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
                        <span>👥 {program.peserta}</span>
                        <span>🎓 {program.level}</span>
                        <span>⏱️ {program.duration}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-2">
                        {program.materi.slice(0, 3).map((item, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-gray-100 rounded-full text-[10px] text-gray-600">
                            {item}
                          </span>
                        ))}
                        {program.materi.length > 3 && (
                          <span className="px-2 py-0.5 bg-gray-100 rounded-full text-[10px] text-gray-600">
                            +{program.materi.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <button 
                          onClick={() => setSelectedProgram(isSelected ? null : program.id)}
                          className={`flex-1 py-2 text-xs rounded-lg font-semibold transition-all
                                    bg-gradient-to-r ${program.color} text-white`}
                        >
                          {isSelected ? 'Tutup' : 'Detail'}
                        </button>
                        <button className="px-3 py-2 bg-gray-100 rounded-lg text-xs font-semibold text-gray-600">
                          📞
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="border-t border-gray-100 p-4 bg-gray-50"
                    >
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <h3 className="font-bold text-gray-700 mb-2">📚 Materi:</h3>
                          <ul className="space-y-1">
                            {program.materi.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-1 text-gray-600">
                                <FaLeaf className="text-green-500 mt-0.5 text-[10px]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-700 mb-2">📅 Jadwal:</h3>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {program.jadwal.map((day, idx) => (
                              <span key={idx} className={`px-2 py-0.5 rounded-full text-[10px] ${program.bgColor} ${program.textColor}`}>
                                {day}
                              </span>
                            ))}
                          </div>
                          <h3 className="font-bold text-gray-700 mb-2">🎯 Benefit:</h3>
                          <ul className="space-y-1">
                            <li className="flex items-start gap-1 text-gray-600">
                              <FaStar className="text-yellow-500 mt-0.5 text-[10px]" /> Sertifikat
                            </li>
                            <li className="flex items-start gap-1 text-gray-600">
                              <FaStar className="text-yellow-500 mt-0.5 text-[10px]" /> Modul
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        )}

        {/* Testimonial Tab */}
        {activeTab === 'testimonial' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {testimonials.map((testi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={testi.image} alt={testi.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-sm text-gray-800">{testi.name}</h3>
                    <p className="text-xs text-gray-500">{testi.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 text-yellow-400 text-xs mb-2">
                  {[...Array(testi.rating)].map((_, i) => (<FaStar key={i} />))}
                </div>
                <p className="text-xs text-gray-600 italic">"{testi.text}"</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="space-y-2">
            {[
              { q: 'Gratis?', a: 'Ada program gratis (SD & Masyarakat)' },
              { q: 'Cara daftar?', a: 'Klik Konsultasi atau hubungi WA' },
              { q: 'Dapat sertifikat?', a: 'Ya, sertifikat resmi' },
              { q: 'Jadwal khusus?', a: 'Bisa request' }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <h3 className="font-bold text-sm text-gray-800 mb-1">{faq.q}</h3>
                <p className="text-xs text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Fasilitas */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-4">Fasilitas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-5 text-center text-white"
        >
          <h2 className="text-lg font-bold mb-2">Siap Belajar?</h2>
          <p className="text-xs mb-3 opacity-90">Mulai jadi agen perubahan</p>
          <div className="flex justify-center gap-2">
            <button className="bg-white text-green-600 px-4 py-2 rounded-full text-xs font-bold shadow hover:scale-105 transition">
              Daftar
            </button>
            <button className="border border-white text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-white/10 transition">
              Hubungi
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Edukasi