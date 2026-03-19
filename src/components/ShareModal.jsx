import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaTimes, FaShareAlt, FaFacebook, FaTwitter, 
  FaWhatsapp, FaTelegram, FaEnvelope, FaCopy, FaCheckCircle
} from 'react-icons/fa'

const ShareModal = ({ showShareModal, selectedArticle, closeShareModal, handleShare }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!selectedArticle) return null

  return (
    <AnimatePresence>
      {showShareModal && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeShareModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 
                     md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg w-full z-50"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <FaShareAlt /> Bagikan Artikel
                  </h2>
                  <button
                    onClick={closeShareModal}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center 
                             justify-center hover:bg-white/30 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
                <p className="text-sm opacity-90 mt-2 line-clamp-1">{selectedArticle.title}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Share Buttons */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button
                    onClick={() => handleShare('facebook', selectedArticle)}
                    className="flex items-center gap-3 p-4 bg-blue-600 text-white 
                             rounded-xl hover:bg-blue-700 transition-all hover:scale-105"
                  >
                    <FaFacebook className="text-xl" />
                    <span className="font-semibold">Facebook</span>
                  </button>
                  
                  <button
                    onClick={() => handleShare('twitter', selectedArticle)}
                    className="flex items-center gap-3 p-4 bg-blue-400 text-white 
                             rounded-xl hover:bg-blue-500 transition-all hover:scale-105"
                  >
                    <FaTwitter className="text-xl" />
                    <span className="font-semibold">Twitter</span>
                  </button>
                  
                  <button
                    onClick={() => handleShare('whatsapp', selectedArticle)}
                    className="flex items-center gap-3 p-4 bg-green-500 text-white 
                             rounded-xl hover:bg-green-600 transition-all hover:scale-105"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span className="font-semibold">WhatsApp</span>
                  </button>
                  
                  <button
                    onClick={() => handleShare('telegram', selectedArticle)}
                    className="flex items-center gap-3 p-4 bg-blue-500 text-white 
                             rounded-xl hover:bg-blue-600 transition-all hover:scale-105"
                  >
                    <FaTelegram className="text-xl" />
                    <span className="font-semibold">Telegram</span>
                  </button>
                  
                  <button
                    onClick={() => handleShare('email', selectedArticle)}
                    className="col-span-2 flex items-center justify-center gap-3 p-4 
                             bg-gray-600 text-white rounded-xl hover:bg-gray-700 
                             transition-all hover:scale-105"
                  >
                    <FaEnvelope className="text-xl" />
                    <span className="font-semibold">Email</span>
                  </button>
                </div>

                {/* Copy Link */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 mb-2">Atau salin link artikel:</p>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-sm 
                                  text-gray-600 truncate">
                      https://ecocare.id/artikel/{selectedArticle.id}
                    </div>
                    <button
                      onClick={() => copyToClipboard(`https://ecocare.id/artikel/${selectedArticle.id}`)}
                      className="px-4 py-3 bg-green-600 text-white rounded-xl 
                               hover:bg-green-700 transition-colors flex items-center gap-2"
                    >
                      {copied ? <FaCheckCircle /> : <FaCopy />}
                      <span className="hidden md:inline">{copied ? 'Tersalin!' : 'Salin'}</span>
                    </button>
                  </div>
                  {copied && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-600 text-sm mt-2 text-center"
                    >
                      ✓ Link berhasil disalin!
                    </motion.p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ShareModal