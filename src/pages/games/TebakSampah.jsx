import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaApple, FaBatteryFull, FaLeaf, FaNewspaper,
  FaWineBottle, FaLightbulb, FaTrophy, FaRedo, FaArrowLeft,
  FaCheck, FaTimes
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const TebakSampah = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [feedback, setFeedback] = useState('')

  const questions = [
    {
      id: 1,
      image: <FaApple className="text-6xl text-orange-500" />,
      item: 'Apel Busuk',
      options: ['Organik', 'Anorganik', 'B3'],
      correct: 'Organik',
      explanation: 'Apel busuk adalah sampah organik karena berasal dari makhluk hidup dan mudah terurai.',
      difficulty: 'mudah'
    },
    {
      id: 2,
      image: <FaWineBottle className="text-6xl text-blue-500" />,
      item: 'Botol Plastik',
      options: ['Organik', 'Anorganik', 'B3'],
      correct: 'Anorganik',
      explanation: 'Botol plastik adalah sampah anorganik karena tidak mudah terurai dan bisa didaur ulang.',
      difficulty: 'mudah'
    },
    {
      id: 3,
      image: <FaBatteryFull className="text-6xl text-red-500" />,
      item: 'Baterai Bekas',
      options: ['Organik', 'Anorganik', 'B3'],
      correct: 'B3',
      explanation: 'Baterai mengandung bahan berbahaya dan beracun, termasuk dalam kategori B3.',
      difficulty: 'sulit'
    },
    {
      id: 4,
      image: <FaLeaf className="text-6xl text-green-500" />,
      item: 'Daun Kering',
      options: ['Organik', 'Anorganik', 'B3'],
      correct: 'Organik',
      explanation: 'Daun kering adalah sampah organik yang bisa dijadikan kompos.',
      difficulty: 'mudah'
    },
    {
      id: 5,
      image: <FaNewspaper className="text-6xl text-yellow-600" />,
      item: 'Koran Bekas',
      options: ['Organik', 'Anorganik', 'B3'],
      correct: 'Anorganik',
      explanation: 'Koran bekas termasuk sampah anorganik karena bisa didaur ulang menjadi kertas baru.',
      difficulty: 'mudah'
    },
    {
      id: 6,
      image: <FaLightbulb className="text-6xl text-yellow-500" />,
      item: 'Lampu Neon',
      options: ['Organik', 'Anorganik', 'B3'],
      correct: 'B3',
      explanation: 'Lampu neon mengandung merkuri yang berbahaya, termasuk sampah B3.',
      difficulty: 'sulit'
    },
    {
      id: 7,
      image: <FaWineBottle className="text-6xl text-green-500" />,
      item: 'Botol Kaca',
      options: ['Organik', 'Anorganik', 'B3'],
      correct: 'Anorganik',
      explanation: 'Botol kaca adalah sampah anorganik yang bisa didaur ulang.',
      difficulty: 'mudah'
    },
  ]

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer)
    const isCorrect = answer === questions[currentQuestion].correct
    
    if (isCorrect) {
      const points = questions[currentQuestion].difficulty === 'sulit' ? 20 : 10
      setScore(prev => prev + points)
      setFeedback(`✅ Benar! +${points} poin. ${questions[currentQuestion].explanation}`)
    } else {
      setFeedback(`❌ Salah! Yang benar adalah ${questions[currentQuestion].correct}. ${questions[currentQuestion].explanation}`)
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1)
        setSelectedAnswer(null)
        setFeedback('')
      } else {
        setShowResult(true)
      }
    }, 2000)
  }

  const resetGame = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setFeedback('')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/games" className="flex items-center gap-2 text-green-600 hover:text-green-700">
            <FaArrowLeft /> Kembali
          </Link>
          <div className="bg-yellow-100 px-4 py-2 rounded-full flex items-center gap-2">
            <FaTrophy className="text-yellow-600" />
            <span className="font-bold text-yellow-700">{score} Poin</span>
          </div>
        </div>

        {/* Game Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Game <span className="text-green-600">Tebak Sampah</span>
          </h1>
          <p className="text-gray-600">Tebak jenis sampah! Dapatkan poin untuk setiap jawaban benar!</p>
        </div>

        {/* Game Area */}
        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-3xl shadow-2xl p-8"
            >
              {/* Progress */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-gray-500">
                  Pertanyaan {currentQuestion + 1} dari {questions.length}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  questions[currentQuestion].difficulty === 'sulit' 
                    ? 'bg-red-100 text-red-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {questions[currentQuestion].difficulty === 'sulit' ? '🏆 Sulit (+20)' : '✨ Mudah (+10)'}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
                <div 
                  className="h-2 bg-green-500 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-4 bg-green-50 rounded-3xl flex items-center justify-center">
                  {questions[currentQuestion].image}
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {questions[currentQuestion].item}
                </h2>
                <p className="text-gray-600">Termasuk sampah jenis apa?</p>
              </div>

              {/* Options */}
              <div className="grid gap-3 mb-6">
                {questions[currentQuestion].options.map((option, index) => {
                  const colors = {
                    'Organik': 'from-orange-400 to-orange-600',
                    'Anorganik': 'from-blue-400 to-blue-600',
                    'B3': 'from-red-400 to-red-600'
                  }
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={selectedAnswer !== null}
                      onClick={() => handleAnswer(option)}
                      className={`bg-gradient-to-r ${colors[option]} text-white py-4 px-6 rounded-xl
                                font-bold text-lg shadow-lg hover:shadow-xl transition-all
                                disabled:opacity-50 disabled:cursor-not-allowed
                                flex items-center justify-between`}
                    >
                      <span>{option}</span>
                      {selectedAnswer === option && (
                        <span className={selectedAnswer === questions[currentQuestion].correct ? 'text-green-300' : 'text-red-300'}>
                          {selectedAnswer === questions[currentQuestion].correct ? <FaCheck /> : <FaTimes />}
                        </span>
                      )}
                    </motion.button>
                  )
                })}
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`p-4 rounded-xl ${
                      feedback.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    <p className="text-sm">{feedback}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            // Result Screen
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-2xl p-8 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                <FaTrophy className="text-5xl text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Game Selesai!</h2>
              <p className="text-gray-600 mb-4">Skor akhir kamu:</p>
              <div className="text-5xl font-bold text-green-600 mb-6">{score}</div>
              
              <div className="space-y-2 mb-6 text-left">
                <p className="text-gray-700">📊 Statistik:</p>
                <p className="text-sm text-gray-600">• Total pertanyaan: {questions.length}</p>
                <p className="text-sm text-gray-600">• Jawaban benar: {Math.floor(score / 15)}</p>
                <p className="text-sm text-gray-600">• Poin perolehan: {score}</p>
              </div>

              <div className="flex gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetGame}
                  className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold
                           hover:bg-green-700 transition-colors shadow-lg flex items-center gap-2"
                >
                  <FaRedo /> Main Lagi
                </motion.button>
                <Link to="/games">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-600 text-white px-6 py-3 rounded-full font-semibold
                             hover:bg-gray-700 transition-colors shadow-lg"
                  >
                    Game Lain
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default TebakSampah