import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTimes, FaShareAlt, FaFacebook, FaTwitter,
  FaWhatsapp, FaTelegram, FaEnvelope, FaCopy,
  FaCheckCircle, FaLink, FaQrcode
} from 'react-icons/fa'

const ShareModal = ({ showShareModal, selectedArticle, closeShareModal, handleShare }) => {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('share')

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch(() => {
      // Fallback for older browsers
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    })
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!selectedArticle) return null

  const shareUrl = `${window.location.origin}/artikel/${selectedArticle.id}`

  const platforms = [
    { key: 'whatsapp',  label: 'WA',       icon: FaWhatsapp, bg: 'bg-green-500'  },
    { key: 'facebook',  label: 'Facebook',  icon: FaFacebook, bg: 'bg-blue-600'   },
    { key: 'twitter',   label: 'X',         icon: FaTwitter,  bg: 'bg-gray-900'   },
    { key: 'telegram',  label: 'Telegram',  icon: FaTelegram, bg: 'bg-sky-500'    },
    { key: 'email',     label: 'Email',     icon: FaEnvelope, bg: 'bg-gray-600'   },
  ]

  return (
    <AnimatePresence>
      {showShareModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeShareModal}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-end sm:items-center justify-center
                       p-0 sm:p-4 z-[56]"
          >
            <div className="bg-white w-full sm:max-w-sm rounded-t-3xl sm:rounded-2xl
                           shadow-2xl overflow-hidden border border-gray-100">

              {/* Drag handle (mobile) */}
              <div className="sm:hidden flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 bg-gray-300 rounded-full" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">Bagikan Artikel</h3>
                <button
                  onClick={closeShareModal}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center
                             text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  <FaTimes className="text-xs" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-100">
                {[
                  { id: 'share', icon: FaShareAlt, label: 'Bagikan' },
                  { id: 'qrcode', icon: FaQrcode, label: 'QR Code' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2.5 text-xs sm:text-sm font-medium flex items-center
                               justify-center gap-1.5 relative transition-colors
                               ${activeTab === tab.id ? 'text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    <tab.icon className="text-xs" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-4 max-h-[60vh] overflow-y-auto">
                {activeTab === 'share' ? (
                  <>
                    {/* Article preview */}
                    <div className="flex items-center gap-3 mb-4 p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                      <img
                        src={selectedArticle.image}
                        alt={selectedArticle.title}
                        className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-800 line-clamp-2 leading-snug">
                          {selectedArticle.title}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1">{selectedArticle.category}</p>
                      </div>
                    </div>

                    {/* Platform buttons */}
                    <div className="grid grid-cols-5 gap-2 mb-4">
                      {platforms.map((p) => (
                        <button
                          key={p.key}
                          onClick={() => handleShare(p.key, selectedArticle)}
                          className="flex flex-col items-center gap-1 group"
                        >
                          <div className={`w-10 h-10 sm:w-11 sm:h-11 ${p.bg} rounded-full
                                         flex items-center justify-center text-white
                                         group-hover:scale-110 group-active:scale-95
                                         transition-transform shadow-sm`}>
                            <p.icon className="text-base sm:text-lg" />
                          </div>
                          <span className="text-[9px] sm:text-[10px] text-gray-500 font-medium">{p.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Copy link */}
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-[10px] text-gray-400 mb-2 font-medium uppercase tracking-wide">Salin Tautan</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-lg
                                       px-3 py-2 border border-gray-200 min-w-0">
                          <FaLink className="text-gray-400 text-[10px] flex-shrink-0" />
                          <span className="text-[10px] sm:text-xs text-gray-600 truncate">
                            {shareUrl}
                          </span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => copyToClipboard(shareUrl)}
                          className={`flex-shrink-0 px-3 py-2 rounded-lg text-white text-xs font-medium
                                     flex items-center gap-1.5 transition-colors
                                     ${copied ? 'bg-emerald-500' : 'bg-green-600 hover:bg-green-700'}`}
                        >
                          {copied ? <FaCheckCircle className="text-xs" /> : <FaCopy className="text-xs" />}
                          <span className="hidden sm:inline">{copied ? 'Tersalin' : 'Salin'}</span>
                        </motion.button>
                      </div>
                      <AnimatePresence>
                        {copied && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-emerald-600 text-[10px] mt-1.5 text-center font-medium"
                          >
                            ✓ Tautan berhasil disalin
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </>
                ) : (
                  /* QR Code Tab */
                  <div className="py-4 text-center">
                    <div className="w-44 h-44 mx-auto bg-gray-50 rounded-2xl
                                   flex items-center justify-center mb-3
                                   border-2 border-dashed border-gray-200">
                      <div className="text-center">
                        <FaQrcode className="text-5xl text-gray-300 mx-auto mb-2" />
                        <p className="text-[10px] text-gray-400">QR Code akan muncul di sini</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">
                      Scan untuk membuka artikel di perangkat lain
                    </p>
                    <button
                      onClick={() => copyToClipboard(shareUrl)}
                      className="text-xs text-green-600 font-semibold hover:underline"
                    >
                      Atau salin tautannya
                    </button>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100
                             flex items-center justify-between">
                <span className="text-[10px] text-gray-400">Bagikan ke temanmu yuk!</span>
                <span className="text-[10px] text-green-600 font-semibold flex items-center gap-1">
                  <FaShareAlt className="text-[8px]" /> EcoCare
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