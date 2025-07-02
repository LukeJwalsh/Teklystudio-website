import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

interface DropDownMenuProps {
  onClose: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      className="
        w-screen
        h-screen
        absolute top-20 left-0 z-50
        bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50
        text-slate-900 flex flex-col items-center justify-center space-y-10
        rounded-t-3xl px-6
      "
      initial={{ opacity: 0, y: '-80%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/pricing" className="hover:text-gray-800 text-2xl">
        Home
      </Link>
      <Link href="/contact" className="hover:text-gray-800 text-2xl">
        Services
      </Link>
      <Link href="/book" className="hover:text-gray-800 text-2xl text-center">
        Prices
      </Link>
    </motion.div>
  )
}

export default DropDownMenu
