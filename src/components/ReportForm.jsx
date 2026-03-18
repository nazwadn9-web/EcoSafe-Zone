import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExclamationTriangle, FaLeaf, FaPen, FaUser, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { MdEmail, MdDescription } from 'react-icons/md'

const ReportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    description: '',
    type: 'pencemaran',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="card p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block p-4 bg-red-100 rounded-full mb-4"
            >
              <FaExclamationTriangle className="text-4xl text-red-600" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              FORMULIR PENGADUAN
            </h2>
            <p className="text-xl text-gray-600">
              Pencemaran dan/atau Perusakan Lingkungan Hidup
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg mb-8">
            <p className="text-green-800 font-medium flex items-center gap-2">
              <FaLeaf className="text-green-600" />
              Mari Bersama Kita Jaga Lingkungan, karena Alam yang Sehat adalah 
              Warisan Berharga bagi Anak Cucu Kita.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <FaUser className="text-green-600" /> Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 
                           focus:outline-none transition-colors"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <MdEmail className="text-green-600" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 
                           focus:outline-none transition-colors"
                  placeholder="email@contoh.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <FaPhone className="text-green-600" /> Nomor Telepon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 
                           focus:outline-none transition-colors"
                  placeholder="08xxxxxxxxxx"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-green-600" /> Lokasi Kejadian
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 
                           focus:outline-none transition-colors"
                  placeholder="Alamat lengkap lokasi"
                />
              </div>
            </div>

            {/* Type of Report */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Jenis Pengaduan</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 
                         focus:outline-none transition-colors"
              >
                <option value="pencemaran">Pencemaran Lingkungan</option>
                <option value="perusakan">Perusakan Lingkungan</option>
                <option value="hutan">Perusakan Hutan</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <MdDescription className="text-green-600" /> Deskripsi Kejadian
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 
                         focus:outline-none transition-colors resize-none"
                placeholder="Jelaskan secara detail kejadian yang Anda laporkan..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white 
                       py-4 rounded-xl font-bold text-lg shadow-lg
                       hover:from-green-700 hover:to-emerald-700 transition-all
                       flex items-center justify-center gap-2"
            >
              <FaPen /> LAPORKAN SEKARANG
            </motion.button>

            {/* Success Message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-center"
                >
                  Terima kasih! Laporan Anda telah diterima.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ReportForm