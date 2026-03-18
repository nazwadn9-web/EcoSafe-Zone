import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { 
  FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaLeaf,
  FaRecycle, FaGoogle, FaFacebook, FaPhone, FaMapMarkerAlt,
  FaArrowLeft, FaCheckCircle, FaRegCircle, FaTree
} from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    receiveUpdates: true
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.name) {
      newErrors.name = 'Nama lengkap wajib diisi'
    } else if (formData.name.length < 3) {
      newErrors.name = 'Nama minimal 3 karakter'
    }
    if (!formData.email) {
      newErrors.email = 'Email wajib diisi'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email tidak valid'
    }
    if (!formData.phone) {
      newErrors.phone = 'Nomor telepon wajib diisi'
    } else if (!/^[0-9]{10,13}$/.test(formData.phone)) {
      newErrors.phone = 'Nomor telepon tidak valid (10-13 angka)'
    }
    return newErrors
  }

  const validateStep2 = () => {
    const newErrors = {}
    if (!formData.location) {
      newErrors.location = 'Lokasi wajib diisi'
    }
    if (!formData.password) {
      newErrors.password = 'Password wajib diisi'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password minimal 8 karakter'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(formData.password)) {
      newErrors.password = 'Password harus mengandung huruf besar, kecil, dan angka'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak cocok'
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Anda harus menyetujui syarat dan ketentuan'
    }
    return newErrors
  }

  const handleNextStep = () => {
    const stepErrors = validateStep1()
    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep(2)
    } else {
      setErrors(stepErrors)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const stepErrors = validateStep2()
    if (Object.keys(stepErrors).length === 0) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('userEmail', formData.email)
        localStorage.setItem('userName', formData.name)
        navigate('/')
      }, 1500)
    } else {
      setErrors(stepErrors)
    }
  }

  const passwordStrength = () => {
    const password = formData.password
    let strength = 0
    if (password.length >= 8) strength++
    if (/(?=.*[a-z])/.test(password)) strength++
    if (/(?=.*[A-Z])/.test(password)) strength++
    if (/(?=.*[0-9])/.test(password)) strength++
    if (/(?=.*[!@#$%^&*])/.test(password)) strength++
    return strength
  }

  const getStrengthColor = () => {
    const strength = passwordStrength()
    if (strength <= 2) return 'bg-red-500'
    if (strength <= 3) return 'bg-yellow-500'
    if (strength <= 4) return 'bg-green-500'
    return 'bg-green-600'
  }

  const getStrengthText = () => {
    const strength = passwordStrength()
    if (strength <= 2) return 'Lemah'
    if (strength <= 3) return 'Sedang'
    if (strength <= 4) return 'Kuat'
    return 'Sangat Kuat'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block sticky top-24"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 
                            rounded-3xl flex items-center justify-center mb-4 shadow-xl">
                  <GiEarthAmerica className="text-white text-5xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Bergabunglah dengan Komunitas</h2>
                <p className="text-gray-500 text-sm mt-2">Dapatkan akses ke berbagai fitur menarik</p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: FaRecycle, title: 'Bank Sampah Digital', desc: 'Kelola tabungan sampah Anda secara online' },
                  { icon: FaLeaf, title: 'Edukasi Lingkungan', desc: 'Akses materi dan artikel eksklusif' },
                  { icon: FaTree, title: 'Komunitas Peduli', desc: 'Bergabung dengan ribuan pecinta lingkungan' },
                  { icon: FaUser, title: 'Profil Personal', desc: 'Pantau kontribusi dan pencapaian Anda' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">5K+</div>
                    <div className="text-xs text-gray-500">Anggota Aktif</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">45T</div>
                    <div className="text-xs text-gray-500">Sampah Terkelola</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">120+</div>
                    <div className="text-xs text-gray-500">Komunitas</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Sign Up Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              {/* Back Button (Mobile) */}
              <Link 
                to="/" 
                className="md:hidden inline-flex items-center gap-2 text-green-600 mb-4"
              >
                <FaArrowLeft /> Kembali
              </Link>

              {/* Header */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 
                           rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                >
                  <FaLeaf className="text-4xl text-white" />
                </motion.div>
                <h1 className="text-2xl font-bold text-gray-800">Buat Akun Baru</h1>
                <p className="text-gray-500 text-sm mt-1">Isi data Anda untuk memulai</p>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                    ${currentStep >= 1 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-200 text-gray-600'}`}>
                    1
                  </div>
                  <div className={`w-16 h-1 mx-2 ${currentStep >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                    ${currentStep >= 2 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-200 text-gray-600'}`}>
                    2
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal Info */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-4"
                    >
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nama Lengkap
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaUser className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${
                              errors.name ? 'border-red-500' : 'border-gray-200'
                            } focus:border-green-500 focus:outline-none transition-colors bg-gray-50`}
                            placeholder="Masukkan nama lengkap"
                          />
                        </div>
                        {errors.name && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaEnvelope className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${
                              errors.email ? 'border-red-500' : 'border-gray-200'
                            } focus:border-green-500 focus:outline-none transition-colors bg-gray-50`}
                            placeholder="nama@email.com"
                          />
                        </div>
                        {errors.email && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nomor Telepon
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaPhone className="text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${
                              errors.phone ? 'border-red-500' : 'border-gray-200'
                            } focus:border-green-500 focus:outline-none transition-colors bg-gray-50`}
                            placeholder="081234567890"
                          />
                        </div>
                        {errors.phone && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.phone}
                          </motion.p>
                        )}
                      </div>

                      {/* Next Button */}
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 
                                 text-white py-3.5 rounded-xl font-bold text-lg
                                 hover:from-green-700 hover:to-emerald-700 
                                 transition-all transform hover:scale-[1.02]
                                 shadow-lg mt-4"
                      >
                        Selanjutnya
                      </button>
                    </motion.div>
                  )}

                  {/* Step 2: Account Info */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      {/* Location */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Lokasi
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaMapMarkerAlt className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${
                              errors.location ? 'border-red-500' : 'border-gray-200'
                            } focus:border-green-500 focus:outline-none transition-colors bg-gray-50`}
                            placeholder="Kota, Provinsi"
                          />
                        </div>
                        {errors.location && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.location}
                          </motion.p>
                        )}
                      </div>

                      {/* Password */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaLock className="text-gray-400" />
                          </div>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full pl-11 pr-12 py-3.5 rounded-xl border-2 ${
                              errors.password ? 'border-red-500' : 'border-gray-200'
                            } focus:border-green-500 focus:outline-none transition-colors bg-gray-50`}
                            placeholder="Minimal 8 karakter"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center"
                          >
                            {showPassword ? (
                              <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                            ) : (
                              <FaEye className="text-gray-400 hover:text-gray-600" />
                            )}
                          </button>
                        </div>
                        
                        {/* Password Strength */}
                        {formData.password && (
                          <div className="mt-2">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full ${getStrengthColor()} transition-all duration-300`}
                                  style={{ width: `${(passwordStrength() / 5) * 100}%` }}
                                ></div>
                              </div>
                              <span className="text-xs font-semibold text-gray-600">
                                {getStrengthText()}
                              </span>
                            </div>
                          </div>
                        )}
                        
                        {errors.password && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.password}
                          </motion.p>
                        )}
                      </div>

                      {/* Confirm Password */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Konfirmasi Password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaLock className="text-gray-400" />
                          </div>
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full pl-11 pr-12 py-3.5 rounded-xl border-2 ${
                              errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
                            } focus:border-green-500 focus:outline-none transition-colors bg-gray-50`}
                            placeholder="Ketik ulang password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center"
                          >
                            {showConfirmPassword ? (
                              <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                            ) : (
                              <FaEye className="text-gray-400 hover:text-gray-600" />
                            )}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.confirmPassword}
                          </motion.p>
                        )}
                      </div>

                      {/* Terms & Conditions */}
                      <div className="space-y-3">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <span className="text-sm text-gray-600">
                            Saya menyetujui{' '}
                            <Link to="/syarat-ketentuan" className="text-green-600 hover:underline">
                              Syarat & Ketentuan
                            </Link>{' '}
                            dan{' '}
                            <Link to="/kebijakan-privasi" className="text-green-600 hover:underline">
                              Kebijakan Privasi
                            </Link>
                          </span>
                        </label>
                        
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="receiveUpdates"
                            checked={formData.receiveUpdates}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <span className="text-sm text-gray-600">
                            Saya ingin menerima update dan informasi terbaru dari EcoCare
                          </span>
                        </label>
                        
                        {errors.agreeTerms && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm"
                          >
                            {errors.agreeTerms}
                          </motion.p>
                        )}
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="flex-1 bg-gray-200 text-gray-700 py-3.5 rounded-xl font-bold
                                   hover:bg-gray-300 transition-all"
                        >
                          Kembali
                        </button>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 
                                   text-white py-3.5 rounded-xl font-bold
                                   hover:from-green-700 hover:to-emerald-700 
                                   transition-all disabled:opacity-50 shadow-lg
                                   flex items-center justify-center gap-2"
                        >
                          {isLoading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Memproses...</span>
                            </>
                          ) : (
                            'Daftar'
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              {/* Social Sign Up */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Atau daftar dengan
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => window.location.href = '/auth/google'}
                    className="flex items-center justify-center gap-2 py-3 px-4 
                             border-2 border-gray-200 rounded-xl text-gray-700 
                             hover:bg-gray-50 hover:border-gray-300 
                             transition-all transform hover:scale-105"
                  >
                    <FaGoogle className="text-red-500 text-lg" />
                    <span className="font-medium">Google</span>
                  </button>
                  <button
                    onClick={() => window.location.href = '/auth/facebook'}
                    className="flex items-center justify-center gap-2 py-3 px-4 
                             border-2 border-gray-200 rounded-xl text-gray-700 
                             hover:bg-gray-50 hover:border-gray-300 
                             transition-all transform hover:scale-105"
                  >
                    <FaFacebook className="text-blue-600 text-lg" />
                    <span className="font-medium">Facebook</span>
                  </button>
                </div>
              </div>

              {/* Login Link */}
              <p className="text-center mt-6 text-gray-600">
                Sudah punya akun?{' '}
                <Link 
                  to="/login" 
                  className="text-green-600 font-bold hover:text-green-700"
                >
                  Login di sini
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default SignUp