import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { 
  FaEnvelope, FaLock, FaEye, FaEyeSlash, FaLeaf, 
  FaRecycle, FaGoogle, FaFacebook, FaArrowLeft
} from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
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

  const validateForm = () => {
    const newErrors = {}
    if (!formData.email) {
      newErrors.email = 'Email wajib diisi'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email tidak valid'
    }
    if (!formData.password) {
      newErrors.password = 'Password wajib diisi'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('userEmail', formData.email)
        navigate('/')
      }, 1500)
    } else {
      setErrors(newErrors)
    }
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Illustration */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-[40px] rotate-12 shadow-2xl flex items-center justify-center">
                <GiEarthAmerica className="text-white text-8xl" />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-3xl -rotate-12 shadow-xl flex items-center justify-center">
                <FaLeaf className="text-white text-5xl" />
              </div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-blue-400 rounded-2xl rotate-45 shadow-lg flex items-center justify-center">
                <FaRecycle className="text-white text-4xl" />
              </div>
              
              <div className="mt-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Selamat Datang Kembali!</h2>
                <p className="text-gray-600">Akses semua fitur dan terus berkontribusi untuk lingkungan</p>
              </div>

              {/* Testimonial */}
              {/* <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <p className="text-sm text-gray-600 italic">
                  "Platform yang luar biasa! Saya jadi lebih paham tentang cara memilah sampah dan berkontribusi untuk lingkungan."
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Ibu Ratna</p>
                    <p className="text-xs text-gray-500">Nasabah Bank Sampah</p>
                  </div>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
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
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 
                           rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                >
                  <FaRecycle className="text-4xl text-white" />
                </motion.div>
                <h1 className="text-2xl font-bold text-gray-800">Login ke Akun</h1>
                <p className="text-gray-500 text-sm mt-1">Masuk untuk melanjutkan perjalanan hijau Anda</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      placeholder="••••••••"
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

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-600">Ingat saya</span>
                  </label>
                  <Link 
                    to="/lupa-password"
                    className="text-sm text-green-600 hover:text-green-700 font-semibold"
                  >
                    Lupa Password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 
                           text-white py-3.5 rounded-xl font-bold text-lg
                           hover:from-green-700 hover:to-emerald-700 
                           transition-all transform hover:scale-[1.02]
                           disabled:opacity-50 disabled:cursor-not-allowed
                           shadow-lg flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Memproses...</span>
                    </>
                  ) : (
                    'Masuk'
                  )}
                </button>
              </form>

              {/* Social Login */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Atau masuk dengan
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

              {/* Sign Up Link */}
              <p className="text-center mt-6 text-gray-600">
                Belum punya akun?{' '}
                <Link 
                  to="/signup" 
                  className="text-green-600 font-bold hover:text-green-700"
                >
                  Daftar Sekarang
                </Link>
              </p>

              {/* Terms */}
              <p className="text-center mt-4 text-xs text-gray-400">
                Dengan masuk, Anda menyetujui{' '}
                <Link to="/syarat-ketentuan" className="text-green-600 hover:underline">
                  Syarat & Ketentuan
                </Link>{' '}
                dan{' '}
                <Link to="/kebijakan-privasi" className="text-green-600 hover:underline">
                  Kebijakan Privasi
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Login