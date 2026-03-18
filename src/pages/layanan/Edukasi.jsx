import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaArrowLeft, FaSchool, FaChalkboardTeacher, FaUsers, 
  FaBook, FaGraduationCap, FaCalendarAlt, FaClock,
  FaMapMarkerAlt, FaUserGraduate, FaAward, FaStar,
  FaPlay, FaDownload, FaShare, FaHeart, FaLeaf,
  FaHandsHelping, FaTree, FaRecycle, FaGlobeAsia
} from 'react-icons/fa'
import { GiTeacher, GiSchoolBag, GiEarthAfricaEurope } from 'react-icons/gi'

const Edukasi = () => {
  const [activeTab, setActiveTab] = useState('program')
  const [selectedProgram, setSelectedProgram] = useState(null)

  const programs = [
    {
      id: 1,
      title: 'Edukasi Sekolah Dasar',
      description: 'Program pengenalan lingkungan untuk siswa SD dengan metode bermain sambil belajar.',
      icon: FaSchool,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      duration: '2 jam',
      peserta: '30-40 siswa',
      level: 'SD Kelas 4-6',
      materi: [
        'Pengenalan jenis sampah',
        'Cara memilah sampah',
        'Game pilah sampah',
        'Membuat kompos sederhana',
        'Menanam pohon'
      ],
      jadwal: ['Senin', 'Rabu', 'Jumat'],
      harga: 'Gratis',
      fasilitas: ['Modul belajar', 'Sertifikat', 'Snack sehat', 'Goodie bag'],
      gambar: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b'
    },
    {
      id: 2,
      title: 'Edukasi SMP & SMA',
      description: 'Program lebih mendalam tentang isu lingkungan dan aksi nyata untuk remaja.',
      icon: FaUserGraduate,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      duration: '3 jam',
      peserta: '25-35 siswa',
      level: 'SMP/SMA',
      materi: [
        'Isu lingkungan global',
        'Dampak sampah plastik',
        'Workshop daur ulang',
        'Proyek lingkungan sekolah',
        'Kunjungan bank sampah'
      ],
      jadwal: ['Selasa', 'Kamis', 'Sabtu'],
      harga: 'Rp 25.000/siswa',
      fasilitas: ['Modul digital', 'Sertifikat', 'Alat workshop', 'Makan siang'],
      gambar: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1'
    },
    {
      id: 3,
      title: 'Pelatihan Guru',
      description: 'Workshop untuk guru tentang integrasi pendidikan lingkungan dalam kurikulum.',
      icon: GiTeacher,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      duration: '6 jam',
      peserta: '20-30 guru',
      level: 'Guru SD/SMP/SMA',
      materi: [
        'Kurikulum lingkungan',
        'Metode pengajaran kreatif',
        'Praktek membuat kompos',
        'Proyek lingkungan sekolah',
        'Evaluasi program'
      ],
      jadwal: ['Sabtu', 'Minggu'],
      harga: 'Rp 150.000/guru',
      fasilitas: ['Modul lengkap', 'Sertifikat 32 JP', 'Alat peraga', 'Lunch', 'Jaringan alumni'],
      gambar: 'https://images.unsplash.com/photo-1577896851231-70ef18881754'
    },
    {
      id: 4,
      title: 'Edukasi Masyarakat',
      description: 'Program penyuluhan untuk masyarakat umum tentang pengelolaan sampah rumah tangga.',
      icon: FaUsers,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      duration: '2 jam',
      peserta: '50+ peserta',
      level: 'Masyarakat Umum',
      materi: [
        'Pilah sampah dari rumah',
        'Membuat kompos rumahan',
        'Bank sampah kelurahan',
        'Ecobrick untuk pemula',
        'Hemat energi & air'
      ],
      jadwal: ['Minggu', 'Libur nasional'],
      harga: 'Gratis',
      fasilitas: ['Doorprize', 'Praktek langsung', 'Konsultasi', 'Snack'],
      gambar: 'https://images.unsplash.com/photo-1531482615713-2afd69097998'
    }
  ]

  const testimonials = [
    {
      name: 'Ibu Sri Wahyuni',
      role: 'Guru SDN 01 Jakarta',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Program edukasinya sangat bermanfaat. Siswa-siswi jadi lebih paham tentang memilah sampah.',
      rating: 5,
      program: 'Edukasi Sekolah Dasar'
    },
    {
      name: 'Bapak Ahmad Fauzi',
      role: 'Kepala Sekolah SMP 02 Bandung',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Materi yang disampaikan sangat relevan dengan kondisi saat ini. Anak-anak antusias!',
      rating: 5,
      program: 'Edukasi SMP & SMA'
    },
    {
      name: 'Ibu Maria Simanjuntak',
      role: 'Guru IPA',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'Pelatihan gurunya sangat komprehensif. Saya langsung bisa mengaplikasikan di kelas.',
      rating: 4,
      program: 'Pelatihan Guru'
    }
  ]

  const fasilitasUmum = [
    { icon: FaAward, title: 'Sertifikat Resmi', desc: 'Mendapatkan sertifikat kelulusan' },
    { icon: FaBook, title: 'Modul Belajar', desc: 'Materi lengkap bisa diunduh' },
    { icon: FaUsers, title: 'Pengajar Berpengalaman', desc: 'Tim ahli di bidangnya' },
    { icon: FaHandsHelping, title: 'Pendampingan', desc: 'Konsultasi setelah program' }
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
          <span className="text-green-600 font-semibold">Edukasi</span>
        </div>

        {/* Header */}
        <div className="relative mb-12">
          {/* Back Button */}
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
              <GiSchoolBag className="text-4xl text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Layanan <span className="text-green-600">Edukasi</span>
            </h1>
            <p className="text-xl text-gray-600">
              Program edukasi lingkungan untuk semua kalangan, dari anak-anak hingga masyarakat umum
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: FaUsers, label: 'Peserta', value: '5.000+' },
            { icon: FaSchool, label: 'Sekolah', value: '120+' },
            { icon: FaChalkboardTeacher, label: 'Pengajar', value: '25+' },
            { icon: FaCalendarAlt, label: 'Program', value: '200+' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-4 text-center shadow-lg"
            >
              <stat.icon className="text-2xl text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {['program', 'testimonial', 'faq'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold capitalize transition-all
                        ${activeTab === tab 
                          ? 'bg-green-600 text-white shadow-lg' 
                          : 'bg-white text-gray-600 hover:bg-green-50'}`}
            >
              {tab === 'program' ? '📋 Program' : tab === 'testimonial' ? '⭐ Testimonial' : '❓ FAQ'}
            </button>
          ))}
        </div>

        {/* Program Tab */}
        {activeTab === 'program' && (
          <div className="space-y-8">
            {/* Program Cards */}
            {programs.map((program, index) => {
              const Icon = program.icon
              const isSelected = selectedProgram === program.id

              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden
                            hover:shadow-2xl transition-all duration-300
                            ${isSelected ? 'ring-4 ring-green-500' : ''}`}
                >
                  <div className="grid md:grid-cols-3">
                    {/* Image Section */}
                    <div className="relative h-48 md:h-full overflow-hidden">
                      <img 
                        src={program.gambar} 
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-60`}></div>
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm 
                                      flex items-center justify-center ${program.textColor}`}>
                          <Icon className="text-2xl" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 inline-block text-sm font-semibold">
                          ⏱️ {program.duration}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="col-span-2 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h2>
                          <p className="text-gray-600 mb-4">{program.description}</p>
                        </div>
                        <div className={`px-4 py-2 ${program.bgColor} rounded-full ${program.textColor} font-bold`}>
                          {program.harga}
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm">
                        <span className="flex items-center gap-1 text-gray-600">
                          <FaUsers /> {program.peserta}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                          <FaUserGraduate /> {program.level}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                          <FaClock /> {program.duration}
                        </span>
                      </div>

                      {/* Materi */}
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-700 mb-2">Materi:</h3>
                        <div className="flex flex-wrap gap-2">
                          {program.materi.map((item, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Jadwal */}
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-700 mb-2">Jadwal Tersedia:</h3>
                        <div className="flex gap-2">
                          {program.jadwal.map((day, idx) => (
                            <span 
                              key={idx}
                              className={`px-4 py-1 ${program.bgColor} ${program.textColor} rounded-full text-sm`}
                            >
                              {day}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Fasilitas */}
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-700 mb-2">Fasilitas:</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {program.fasilitas.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className={`w-1.5 h-1.5 rounded-full ${program.textColor}`}></div>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-4">
                        <button 
                          onClick={() => setSelectedProgram(isSelected ? null : program.id)}
                          className={`flex-1 py-3 rounded-xl font-semibold transition-all
                                    ${program.color} text-white bg-gradient-to-r
                                    hover:shadow-lg hover:scale-105`}
                        >
                          {isSelected ? 'Tutup Detail' : 'Lihat Detail Program'}
                        </button>
                        <button className="px-6 py-3 bg-gray-100 rounded-xl font-semibold text-gray-600
                                         hover:bg-gray-200 transition-colors">
                          📞 Konsultasi
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-200 p-6 bg-gray-50"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-bold text-gray-800 mb-3">📚 Silabus Lengkap:</h3>
                          <ul className="space-y-2">
                            {program.materi.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <FaLeaf className="text-green-500 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 mb-3">🎯 Yang Akan Didapatkan:</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-gray-600">
                              <FaStar className="text-yellow-500 mt-1" />
                              <span>Pemahaman tentang lingkungan</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-600">
                              <FaStar className="text-yellow-500 mt-1" />
                              <span>Keterampilan memilah sampah</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-600">
                              <FaStar className="text-yellow-500 mt-1" />
                              <span>Sertifikat resmi</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-600">
                              <FaStar className="text-yellow-500 mt-1" />
                              <span>Relasi dengan pegiat lingkungan</span>
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
          <div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {testimonials.map((testi, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={testi.image} 
                      alt={testi.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">{testi.name}</h3>
                      <p className="text-sm text-gray-600">{testi.role}</p>
                      <p className="text-xs text-green-600 mt-1">{testi.program}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-yellow-400 mb-3">
                    {[...Array(testi.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testi.text}"</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold
                               border-2 border-green-600 hover:bg-green-50 transition-colors">
                Lihat Semua Testimonial
              </button>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="max-w-3xl mx-auto">
            {[
              {
                q: 'Apakah program ini gratis?',
                a: 'Beberapa program kami gratis (Edukasi SD dan Masyarakat), sementara program lain dikenakan biaya untuk operasional dan fasilitas.'
              },
              {
                q: 'Bagaimana cara mendaftar?',
                a: 'Anda bisa mendaftar melalui website ini dengan mengklik tombol "Konsultasi" atau menghubungi kami di WhatsApp.'
              },
              {
                q: 'Apakah mendapatkan sertifikat?',
                a: 'Ya, setiap peserta akan mendapatkan sertifikat resmi dari EcoCare.'
              },
              {
                q: 'Bisa request jadwal khusus?',
                a: 'Tentu, kami bisa menyesuaikan jadwal dengan kebutuhan sekolah/instansi Anda.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 mb-4 shadow-lg"
              >
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Fasilitas Umum */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Fasilitas yang Didapatkan
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {fasilitasUmum.map((item, idx) => (
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
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 
                   rounded-3xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Siap untuk Belajar?</h2>
          <p className="text-xl mb-6 opacity-90">
            Mulai perjalananmu menjadi agen perubahan untuk lingkungan
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-bold
                             hover:shadow-xl transform hover:scale-105 transition-all">
              Daftar Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold
                             hover:bg-white hover:text-green-600 transition-all">
              Hubungi Kami
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Edukasi