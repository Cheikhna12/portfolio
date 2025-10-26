'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

interface ToastProps {
  show: boolean
  onClose: () => void
}

const Toast = ({ show, onClose }: ToastProps) => {
  const { theme } = useTheme()

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[10002] bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Toast simple */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10003] w-full max-w-sm mx-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="relative rounded-lg p-6"
              style={{
                background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#333' : '#e5e7eb'}`,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-1 rounded hover:bg-gray-500/10 transition-colors"
                aria-label="Fermer"
              >
                <X size={16} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
              </button>

              {/* Content */}
              <div className="flex items-start gap-3 pr-6">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle 
                    className={theme === 'dark' ? 'text-green-500' : 'text-green-600'} 
                    size={20} 
                  />
                </div>

                <div>
                  <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Message envoyé
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Merci pour votre message. Je vous répondrai rapidement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Toast
