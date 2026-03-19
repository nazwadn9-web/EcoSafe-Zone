import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaTimes, FaShareAlt, FaFacebook, FaTwitter, 
  FaWhatsapp, FaTelegram, FaEnvelope, FaCopy, FaCheckCircle,
  FaLink, FaQrcode, FaInstagram, FaLinkedin
} from 'react-icons/fa'

const ShareModal = ({ showShareModal, selectedArticle, closeShareModal, handleShare }) => {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('share') // 'share' atau 'qrcode'

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareUrl = `https://ecocare.id/artikel/${selectedArticle?.id}`
  const shareTitle = selectedArticle?.title || 'Artikel EcoCare'

  if (!selectedArticle) return null

  return (
    <AnimatePresence>
      {showShareModal && (
        <>
          {/* Backdrop dengan blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeShareModal}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          
          {/* Modal - Tengah sempurna di semua layar */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 
                          w-full max-w-md mx-auto">
              
              {/* Handle untuk drag (hanya di mobile) - Opsional */}
              <div className="md:hidden w-12 h-1 bg-gray-300 rounded-full mx-auto mt-2"></div>

              {/* Header */}
              <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-800">Bagikan</h3>
                <button
                  onClick={closeShareModal}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center 
                           justify-center text-gray-500 hover:bg-gray-200 
                           transition-colors"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => setActiveTab('share')}
                  className={`flex-1 py-3 text-sm font-medium transition-colors relative
                            ${activeTab === 'share' 
                              ? 'text-green-600' 
                              : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaShareAlt className="text-xs" />
                    Bagikan
                  </span>
                  {activeTab === 'share' && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('qrcode')}
                  className={`flex-1 py-3 text-sm font-medium transition-colors relative
                            ${activeTab === 'qrcode' 
                              ? 'text-green-600' 
                              : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaQrcode className="text-xs" />
                    QR Code
                  </span>
                  {activeTab === 'qrcode' && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                    />
                  )}
                </button>
              </div>

              {/* Content */}
              <div className="p-4 max-h-[70vh] overflow-y-auto">
                {activeTab === 'share' ? (
                  <>
                    {/* Preview Artikel */}
                    <div className="flex items-center gap-3 mb-4 p-2 bg-gray-50 rounded-lg">
                      <img 
                        src={selectedArticle.image} 
                        alt={selectedArticle.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-800 truncate">
                          {selectedArticle.title}
                        </p>
                        <p className="text-[10px] text-gray-500 mt-0.5">
                          {selectedArticle.category}
                        </p>
                      </div>
                    </div>

                    {/* Share Buttons Grid */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {/* WhatsApp */}
                      <button
                        onClick={() => handleShare('whatsapp', selectedArticle)}
                        className="flex flex-col items-center gap-1 p-2 rounded-lg 
                                 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-green-500 rounded-full 
                                      flex items-center justify-center text-white
                                      group-hover:scale-110 transition-transform">
                          <FaWhatsapp className="text-lg" />
                        </div>
                        <span className="text-[10px] text-gray-600">WA</span>
                      </button>

                      {/* Facebook */}
                      <button
                        onClick={() => handleShare('facebook', selectedArticle)}
                        className="flex flex-col items-center gap-1 p-2 rounded-lg 
                                 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-blue-600 rounded-full 
                                      flex items-center justify-center text-white
                                      group-hover:scale-110 transition-transform">
                          <FaFacebook className="text-lg" />
                        </div>
                        <span className="text-[10px] text-gray-600">FB</span>
                      </button>

                      {/* Twitter */}
                      <button
                        onClick={() => handleShare('twitter', selectedArticle)}
                        className="flex flex-col items-center gap-1 p-2 rounded-lg 
                                 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-blue-400 rounded-full 
                                      flex items-center justify-center text-white
                                      group-hover:scale-110 transition-transform">
                          <FaTwitter className="text-lg" />
                        </div>
                        <span className="text-[10px] text-gray-600">X</span>
                      </button>

                      {/* Telegram */}
                      <button
                        onClick={() => handleShare('telegram', selectedArticle)}
                        className="flex flex-col items-center gap-1 p-2 rounded-lg 
                                 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-blue-500 rounded-full 
                                      flex items-center justify-center text-white
                                      group-hover:scale-110 transition-transform">
                          <FaTelegram className="text-lg" />
                        </div>
                        <span className="text-[10px] text-gray-600">Tele</span>
                      </button>

                      {/* Instagram */}
                      <button
                        onClick={() => handleShare('instagram', selectedArticle)}
                        className="flex flex-col items-center gap-1 p-2 rounded-lg 
                                 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 
                                      via-pink-500 to-orange-500 rounded-full 
                                      flex items-center justify-center text-white
                                      group-hover:scale-110 transition-transform">
                          <FaInstagram className="text-lg" />
                        </div>
                        <span className="text-[10px] text-gray-600">IG</span>
                      </button>

                      {/* LinkedIn */}
                      <button
                        onClick={() => handleShare('linkedin', selectedArticle)}
                        className="flex flex-col items-center gap-1 p-2 rounded-lg 
                                 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-blue-700 rounded-full 
                                      flex items-center justify-center text-white
                                      group-hover:scale-110 transition-transform">
                          <FaLinkedin className="text-lg" />
                        </div>
                        <span className="text-[10px] text-gray-600">In</span>
                      </button>

                      {/* Email */}
                      <button
                        onClick={() => handleShare('email', selectedArticle)}
                        className="flex flex-col items-center gap-1 p-2 rounded-lg 
                                 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gray-600 rounded-full 
                                      flex items-center justify-center text-white
                                      group-hover:scale-110 transition-transform">
                          <FaEnvelope className="text-lg" />
                        </div>
                        <span className="text-[10px] text-gray-600">Email</span>
                      </button>

                      {/* More - Bisa ditambah sesuai kebutuhan */}
                      <button
                        className="flex flex-col items-center gap-1 p-2 rounded-lg 
                                 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gray-200 rounded-full 
                                      flex items-center justify-center text-gray-600
                                      group-hover:scale-110 transition-transform">
                          <span className="text-lg font-bold">+3</span>
                        </div>
                        <span className="text-[10px] text-gray-600">Lainnya</span>
                      </button>
                    </div>

                    {/* Copy Link */}
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-xs text-gray-500 mb-2">Salin link</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 flex items-center gap-2 bg-gray-50 
                                      rounded-lg px-3 py-2 border border-gray-200">
                          <FaLink className="text-gray-400 text-xs" />
                          <span className="text-xs text-gray-600 truncate">
                            ecocare.id/artikel/{selectedArticle.id}
                          </span>
                        </div>
                        <button
                          onClick={() => copyToClipboard(shareUrl)}
                          className="px-3 py-2 bg-green-600 text-white rounded-lg 
                                   hover:bg-green-700 transition-colors flex items-center gap-1
                                   text-xs font-medium"
                        >
                          {copied ? <FaCheckCircle /> : <FaCopy />}
                          <span className="hidden sm:inline">{copied ? 'Tersalin' : 'Salin'}</span>
                        </button>
                      </div>
                      {copied && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-green-600 text-[10px] mt-1 text-center"
                        >
                          ✓ Link tersalin ke clipboard
                        </motion.p>
                      )}
                    </div>
                  </>
                ) : (
                  /* QR Code Tab */
                  <div className="py-4 text-center">
                    <div className="w-48 h-48 mx-auto bg-gray-100 rounded-xl 
                                  flex items-center justify-center mb-3 border-2 border-gray-200">
                      {/* Placeholder QR Code - Ganti dengan komponen QR code asli */}
                      <div className="text-center">
                        <FaQrcode className="text-6xl text-gray-400 mx-auto mb-2" />
                        <p className="text-xs text-gray-500">QR Code Placeholder</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">
                      Scan untuk membaca artikel di perangkat lain
                    </p>
                    <button
                      onClick={() => copyToClipboard(shareUrl)}
                      className="mt-3 text-xs text-green-600 font-medium 
                               hover:text-green-700 transition-colors"
                    >
                      Atau salin link
                    </button>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 
                            flex items-center justify-between text-[10px] text-gray-500">
                <span>Bagikan ke temanmu</span>
                <span className="flex items-center gap-1">
                  <FaShareAlt className="text-[8px]" />
                  EcoCare
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ShareModal