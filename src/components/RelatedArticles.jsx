import React from 'react'
import { motion } from 'framer-motion'

const RelatedArticles = ({ articles, relatedIds, openArticle }) => {
  const relatedArticles = articles.filter(a => relatedIds.includes(a.id))

  if (relatedArticles.length === 0) return null

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Artikel Terkait</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {relatedArticles.map((article) => (
          <motion.div
            key={article.id}
            whileHover={{ y: -5 }}
            onClick={() => openArticle(article)}
            className="bg-gray-50 rounded-xl p-4 cursor-pointer group"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <h4 className="font-semibold text-gray-800 group-hover:text-green-600 
                       transition-colors line-clamp-2">
              {article.title}
            </h4>
            <p className="text-xs text-gray-500 mt-1">{article.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RelatedArticles