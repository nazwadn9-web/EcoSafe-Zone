import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaExclamationTriangle, FaLeaf, FaPen, FaUser, 
  FaMapMarkerAlt, FaPhone,FaCheckCircle,FaSmile,
  FaStar, FaHandsHelping, FaRecycle, FaTree, FaClock,
  FaShieldAlt, FaCamera, FaTimes, FaExclamationCircle,
  FaTicketAlt, FaFileAlt, FaChevronRight
} from 'react-icons/fa'
import { MdEmail, MdDescription } from 'react-icons/md'
import { GiEarthAmerica } from 'react-icons/gi'

const generateTicketNumber = () => {
  const date = new Date()
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  const rand = Math.floor(Math.random() * 9000) + 1000
  return `RPT-${y}${m}${d}-${rand}`
}

const STEPS = ['Data Diri', 'Detail Laporan', 'Konfirmasi']

const urgencyLabels = {
  rendah: { label: 'Rendah', color: 'text-green-600 bg-green-100' },
  sedang: { label: 'Sedang', color: 'text-yellow-600 bg-yellow-100' },
  tinggi: { label: 'Tinggi — Segera', color: 'text-red-600 bg-red-100' },
}

const typeLabels = {
  pencemaran: '🌊 Pencemaran Lingkungan',
  perusakan: '🌲 Perusakan Lingkungan',
  hutan: '🌳 Perusakan Hutan',
  lainnya: '📝 Lainnya'
}

const ReportForm = () => {
  const [step, setStep] = useState(0)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [ticketNumber, setTicketNumber] = useState('')
  const [photoPreview, setPhotoPreview] = useState(null)
  const [confetti, setConfetti] = useState([])
  const [showCelebration, setShowCelebration] = useState(false)
  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    location: '', description: '',
    type: 'pencemaran', urgency: 'sedang',
  })

  useEffect(() => {
    if (step === 3) {
      const colors = ['#22c55e', '#16a34a', '#eab308', '#ef4444', '#3b82f6', '#a855f7', '#ec4899']
      setConfetti(Array.from({ length: 50 }, (_, i) => ({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 0.5,
        size: Math.random() * 10 + 5,
      })))
      setShowCelebration(true)
      const t = setTimeout(() => setShowCelebration(false), 5000)
      return () => clearTimeout(t)
    }
  }, [step])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handlePhoto = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setPhotoPreview(reader.result)
      reader.readAsDataURL(file)
    }
  }

  const validateStep0 = () => {
    const e = {}
    if (!formData.name.trim()) e.name = 'Nama wajib diisi'
    if (!formData.email.trim()) e.email = 'Email wajib diisi'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Format email tidak valid'
    if (!formData.phone.trim()) e.phone = 'Nomor telepon wajib diisi'
    else if (!/^08[0-9]{8,11}$/.test(formData.phone)) e.phone = 'Format: 08xxxxxxxxxx'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep1 = () => {
    const e = {}
    if (!formData.location.trim()) e.location = 'Lokasi wajib diisi'
    if (!formData.description.trim()) e.description = 'Deskripsi wajib diisi'
    else if (formData.description.trim().length < 20) e.description = 'Deskripsi minimal 20 karakter'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const nextStep = () => {
    if (step === 0 && !validateStep0()) return
    if (step === 1) {
      if (!validateStep1()) return
      setShowConfirmModal(true)
      return
    }
    setStep(step + 1)
  }

  const handleConfirm = () => {
    setShowConfirmModal(false)
    setTicketNumber(generateTicketNumber())
    setStep(3)
  }

  const resetForm = () => {
    setStep(0)
    setFormData({ name: '', email: '', phone: '', location: '', description: '', type: 'pencemaran', urgency: 'sedang' })
    setPhotoPreview(null)
    setErrors({})
    setTicketNumber('')
    setShowCelebration(false)
  }

  return (
    <section className="relative pt-6 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <AnimatePresence>
        {showCelebration && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none">
            {confetti.map((c) => (
              <motion.div key={c.id} className="absolute rounded-full"
                style={{ backgroundColor: c.color, left: c.left, width: c.size, height: c.size, top: -20 }}
                animate={{ y: ['0vh', '100vh'], rotate: [0, 360] }}
                transition={{ duration: c.duration, repeat: Infinity, delay: c.delay, ease: 'linear' }} />
            ))}
            <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-10 left-10 text-green-500 text-4xl"><FaLeaf /></motion.div>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
              className="absolute top-20 right-20 text-emerald-500 text-5xl"><FaTree /></motion.div>
            <motion.div animate={{ y: [0, -20, 0], rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-20 left-20 text-blue-500 text-4xl"><FaRecycle /></motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showConfirmModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <motion.div initial={{ scale: 0.85, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.85, y: 30 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">

              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-5 text-white text-center">
                <FaFileAlt className="text-3xl mx-auto mb-2" />
                <h3 className="text-lg font-bold">Konfirmasi Laporan</h3>
                <p className="text-xs opacity-90">Pastikan data sudah benar sebelum mengirim</p>
              </div>

              <div className="p-5 space-y-1.5 text-sm max-h-72 overflow-y-auto">
                {[
                  { label: 'Nama', value: formData.name },
                  { label: 'Email', value: formData.email },
                  { label: 'Telepon', value: formData.phone },
                  { label: 'Jenis', value: typeLabels[formData.type] },
                  { label: 'Prioritas', value: urgencyLabels[formData.urgency].label },
                  { label: 'Lokasi', value: formData.location },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between gap-2 py-1.5 border-b border-gray-100 last:border-0">
                    <span className="text-gray-500 flex-shrink-0">{item.label}</span>
                    <span className="font-medium text-gray-800 text-right">{item.value}</span>
                  </div>
                ))}
                <div className="pt-1">
                  <span className="text-gray-500 block mb-1">Deskripsi</span>
                  <p className="text-gray-700 text-xs bg-gray-50 rounded-lg p-2 leading-relaxed">{formData.description}</p>
                </div>
                {photoPreview && (
                  <div className="pt-1">
                    <span className="text-gray-500 block mb-1">Foto Bukti</span>
                    <img src={photoPreview} alt="preview" className="w-full h-24 object-cover rounded-lg" />
                  </div>
                )}
              </div>

              <div className="mx-5 mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                <FaExclamationCircle className="text-yellow-500 text-xs mt-0.5 flex-shrink-0" />
                <p className="text-[10px] text-yellow-700">
                  Dengan mengirim laporan ini, Anda menyatakan bahwa informasi yang diberikan adalah benar dan dapat dipertanggungjawabkan.
                </p>
              </div>

              <div className="flex gap-2 p-5 pt-0">
                <button onClick={() => setShowConfirmModal(false)}
                  className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-1">
                  <FaTimes className="text-xs" /> Periksa Lagi
                </button>
                <button onClick={handleConfirm}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold hover:shadow-lg transition flex items-center justify-center gap-1">
                  <FaCheckCircle className="text-xs" /> Ya, Kirim Laporan
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container-custom max-w-2xl">
        <AnimatePresence mode="wait">

          {step < 3 && (
            <motion.div key="form"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}>

              <div className="text-center mb-5">
                <div className="inline-block p-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-full mb-3 shadow-lg">
                  <FaExclamationTriangle className="text-3xl text-red-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                  FORMULIR <span className="text-green-600">PENGADUAN</span>
                </h2>
                <p className="text-sm text-gray-500">Pencemaran dan/atau Perusakan Lingkungan Hidup</p>
              </div>

              <div className="flex items-center justify-center mb-5">
                {STEPS.map((s, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all
                        ${i < step ? 'bg-green-600 border-green-600 text-white'
                          : i === step ? 'bg-white border-green-600 text-green-600 shadow-md'
                          : 'bg-white border-gray-200 text-gray-400'}`}>
                        {i < step ? <FaCheckCircle /> : i + 1}
                      </div>
                      <span className={`text-[10px] mt-1 font-medium ${i === step ? 'text-green-600' : 'text-gray-400'}`}>{s}</span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`h-0.5 w-14 mb-4 mx-1 transition-all ${i < step ? 'bg-green-500' : 'bg-gray-200'}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-3 rounded-r-lg mb-5">
                <p className="text-green-800 font-medium flex items-center gap-2 text-xs md:text-sm">
                  <FaLeaf className="text-green-600 animate-pulse flex-shrink-0" />
                  "Mari Bersama Kita Jaga Lingkungan, karena Alam yang Sehat adalah Warisan Berharga bagi Anak Cucu Kita."
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                {step === 0 && (
                  <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                      <FaUser className="text-green-600" /> Data Diri Pelapor
                    </h3>
                    {[
                      { name: 'name', label: 'Nama Lengkap', type: 'text', placeholder: 'Masukkan nama lengkap Anda', icon: FaUser },
                      { name: 'email', label: 'Alamat Email', type: 'email', placeholder: 'email@contoh.com', icon: MdEmail },
                      { name: 'phone', label: 'Nomor Telepon', type: 'tel', placeholder: '08xxxxxxxxxx', icon: FaPhone },
                    ].map(({ name, label, type, placeholder, icon: Icon }) => (
                      <div key={name}>
                        <label className="block text-gray-700 font-semibold mb-1.5 text-sm flex items-center gap-1.5">
                          <Icon className="text-green-600 text-xs" /> {label}
                        </label>
                        <input type={type} name={name} value={formData[name]} onChange={handleChange}
                          placeholder={placeholder}
                          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all text-sm
                            ${errors[name] ? 'border-red-400 focus:border-red-400 bg-red-50' : 'border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100'}`} />
                        {errors[name] && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <FaExclamationCircle className="text-[10px]" /> {errors[name]}
                          </p>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                      <MdDescription className="text-green-600" /> Detail Laporan
                    </h3>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1.5 text-sm">Jenis Pengaduan</label>
                      <select name="type" value={formData.type} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 focus:outline-none transition-all bg-white text-sm">
                        <option value="pencemaran">🌊 Pencemaran Lingkungan</option>
                        <option value="perusakan">🌲 Perusakan Lingkungan</option>
                        <option value="hutan">🌳 Perusakan Hutan</option>
                        <option value="lainnya">📝 Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1.5 text-sm">Tingkat Urgensi</label>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(urgencyLabels).map(([val, { label, color }]) => (
                          <button key={val} type="button"
                            onClick={() => setFormData({ ...formData, urgency: val })}
                            className={`py-2 px-2 rounded-xl border-2 text-xs font-semibold transition-all
                              ${formData.urgency === val ? `${color} border-current shadow-sm` : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1.5 text-sm flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-green-600 text-xs" /> Lokasi Kejadian
                      </label>
                      <input type="text" name="location" value={formData.location} onChange={handleChange}
                        placeholder="Alamat lengkap lokasi kejadian"
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all text-sm
                          ${errors.location ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100'}`} />
                      {errors.location && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle className="text-[10px]" /> {errors.location}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1.5 text-sm flex items-center gap-1.5">
                        <MdDescription className="text-green-600" /> Deskripsi Kejadian
                      </label>
                      <textarea name="description" value={formData.description} onChange={handleChange}
                        rows="4" placeholder="Jelaskan secara detail kejadian yang Anda laporkan... (min. 20 karakter)"
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all resize-none text-sm
                          ${errors.description ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100'}`} />
                      <div className="flex justify-between mt-1">
                        {errors.description
                          ? <p className="text-red-500 text-xs flex items-center gap-1"><FaExclamationCircle className="text-[10px]" /> {errors.description}</p>
                          : <span />}
                        <span className={`text-xs ${formData.description.length < 20 ? 'text-gray-400' : 'text-green-600'}`}>
                          {formData.description.length} karakter
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1.5 text-sm flex items-center gap-1.5">
                        <FaCamera className="text-green-600 text-xs" /> Foto Bukti
                        <span className="text-gray-400 font-normal text-xs">(opsional)</span>
                      </label>
                      {photoPreview ? (
                        <div className="relative">
                          <img src={photoPreview} alt="preview" className="w-full h-32 object-cover rounded-xl border-2 border-green-200" />
                          <button onClick={() => setPhotoPreview(null)}
                            className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition">
                            <FaTimes />
                          </button>
                        </div>
                      ) : (
                        <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-400 hover:bg-green-50 transition-all">
                          <FaCamera className="text-gray-400 text-xl mb-1" />
                          <span className="text-xs text-gray-500">Klik untuk upload foto bukti</span>
                          <input type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
                        </label>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Navigation */}
                <div className="flex gap-3 mt-6">
                  {step > 0 && (
                    <button onClick={() => { setStep(step - 1); setErrors({}) }}
                      className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">
                      ← Kembali
                    </button>
                  )}
                  <motion.button onClick={nextStep} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    {step === 1
                      ? <><FaFileAlt className="text-xs" /> Pratinjau & Kirim</>
                      : <>Lanjutkan <FaChevronRight className="text-xs" /></>}
                  </motion.button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-5">
                {[
                  { icon: FaClock, title: 'Respon Cepat', desc: 'Maks. 1×24 jam' },
                  { icon: FaShieldAlt, title: 'Data Aman', desc: 'Privasi terlindungi' },
                  { icon: FaStar, title: 'Ditindaklanjuti', desc: 'Tim ahli kami' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm">
                    <item.icon className="text-xl text-green-600 mx-auto mb-1" />
                    <h4 className="font-semibold text-gray-800 text-xs">{item.title}</h4>
                    <p className="text-[10px] text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="success"
              initial={{ opacity: 0, scale: 0.85, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 15 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl">

              <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500">
                {[...Array(8)].map((_, i) => (
                  <motion.div key={i} className="absolute rounded-full bg-white/10"
                    style={{ width: Math.random() * 60 + 20, height: Math.random() * 60 + 20, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: Math.random() * 4 + 2, repeat: Infinity }} />
                ))}
              </div>

              <div className="relative z-10 p-10 text-white text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="flex justify-center mb-5">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/50 shadow-2xl">
                    <FaCheckCircle className="text-white text-4xl" />
                  </div>
                </motion.div>

                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-black mb-2">LAPORAN TERKIRIM!</motion.h2>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                  className="text-lg mb-4">
                  <FaSmile className="inline text-yellow-300 mr-1" />
                  Terima kasih, <span className="font-bold text-yellow-300">{formData.name || 'Sahabat Lingkungan'}</span>!
                </motion.p>

                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-5 max-w-xs mx-auto border border-white/30">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <FaTicketAlt className="text-yellow-300" />
                    <span className="text-xs font-semibold opacity-90">Nomor Tiket Laporan</span>
                  </div>
                  <div className="text-xl font-black tracking-widest text-yellow-300">{ticketNumber}</div>
                  <p className="text-[10px] opacity-75 mt-1">Simpan nomor ini untuk memantau status laporan Anda</p>
                </motion.div>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                  className="text-white/80 text-sm mb-6 max-w-sm mx-auto">
                  Tim kami akan menindaklanjuti dalam <span className="font-bold text-white">1×24 jam</span> kerja.
                  Konfirmasi dikirim ke <span className="font-bold text-yellow-300">{formData.email}</span>.
                </motion.p>

                <motion.div initial={{ width: 0 }} animate={{ width: '80px' }} transition={{ delay: 0.7, duration: 0.4 }}
                  className="h-0.5 bg-white/30 rounded-full mx-auto mb-6" />

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={resetForm}
                    className="px-6 py-2.5 bg-white text-green-600 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    <FaPen className="text-xs" /> Buat Laporan Baru
                  </motion.button>
                  <Link to="/">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-transparent border-2 border-white text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                      <FaRecycle className="text-xs" /> Kembali ke Beranda
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  )
}

export default ReportForm