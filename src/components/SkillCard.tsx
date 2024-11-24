import React from 'react'
import { motion } from 'framer-motion'
import { FaCog } from 'react-icons/fa'

interface SkillCardProps {
  name: string
  level: string
  icon: string
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon }) => {
  const levelPercentage = level === 'Expert' ? 100 : level === 'Advanced' ? 75 : 50

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{level}</p>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-orange-500 dark:bg-orange-400 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${levelPercentage}%` }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
    </motion.div>
  )
}

