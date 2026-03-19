import { 
  FaLeaf, FaBookOpen, FaSeedling, FaRecycle, FaTree, FaGlobeAsia 
} from 'react-icons/fa'

export const getCategoryIcon = (category) => {
  switch(category) {
    case 'Edukasi': return FaBookOpen
    case 'Tips': return FaLeaf
    case 'Gaya Hidup': return FaSeedling
    case 'Kreatif': return FaRecycle
    case 'Lingkungan': return FaTree
    default: return FaGlobeAsia
  }
}

export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('id-ID', options)
}

export const calculateReadTime = (text) => {
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)
  return `${readTime} menit`
}