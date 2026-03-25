import {
  FaLeaf, FaRecycle, FaSeedling, FaBookOpen, FaTree, FaGlobeAsia
} from 'react-icons/fa'

export const getCategoryIcon = (category) => {
  const map = {
    'Tips':       FaLeaf,
    'Edukasi':    FaBookOpen,
    'Gaya Hidup': FaSeedling,
    'Kreatif':    FaRecycle,
    'Lingkungan': FaTree,
  }
  return map[category] || FaGlobeAsia
}

export const getCategoryColor = (category) => {
  const map = {
    'Tips':       'bg-emerald-100 text-emerald-700',
    'Edukasi':    'bg-blue-100 text-blue-700',
    'Gaya Hidup': 'bg-teal-100 text-teal-700',
    'Kreatif':    'bg-orange-100 text-orange-700',
    'Lingkungan': 'bg-green-100 text-green-700',
  }
  return map[category] || 'bg-gray-100 text-gray-700'
}