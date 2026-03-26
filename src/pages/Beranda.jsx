import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import EducationCards from '../components/EducationCards'


const Beranda = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-20 pb-20"
    >
      <Hero />
      <Stats />
      <EducationCards />
    </motion.div>
  )
}

export default Beranda