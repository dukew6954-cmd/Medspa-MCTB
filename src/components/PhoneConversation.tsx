import { motion } from 'framer-motion'
import { Phone, PhoneMissed, MessageCircle, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'

const PhoneConversation = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { icon: PhoneMissed, text: 'Missed Call', color: 'bg-red-100 text-red-600' },
    { icon: MessageCircle, text: 'Instant Text', color: 'bg-primary-100 text-primary-600' },
    { icon: MessageCircle, text: 'Follow-up', color: 'bg-purple-100 text-purple-600' },
    { icon: Calendar, text: 'Booking Link', color: 'bg-green-100 text-green-600' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-sm">
      {/* Phone Frame */}
      <motion.div
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-6 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>

        {/* Screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden h-[600px] flex flex-col">
          {/* Status Bar */}
          <div className="bg-gradient-to-r from-primary-500 to-purple-500 px-6 py-3 text-white text-sm font-medium flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>SignalVia</span>
            </div>
            <div className="text-xs">9:41 AM</div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
            {/* Missed Call Notification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: currentStep >= 0 ? 1 : 0.3, y: 0 }}
              className="bg-red-50 border border-red-200 rounded-2xl p-4"
            >
              <div className="flex items-center space-x-3 mb-2">
                <PhoneMissed className="w-5 h-5 text-red-600" />
                <span className="font-semibold text-red-900">Missed Call</span>
              </div>
              <p className="text-sm text-red-700">Sarah M. called at 2:15 PM</p>
            </motion.div>

            {/* Instant Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: currentStep >= 1 ? 1 : 0.3, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-start"
            >
              <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[80%] border border-gray-200">
                <p className="text-sm text-gray-800 mb-2">
                  Hi Sarah! We missed your call. How can we help you today?
                </p>
                <p className="text-xs text-gray-500">2:15 PM</p>
              </div>
            </motion.div>

            {/* No Response - Follow-up */}
            {currentStep >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-start"
              >
                <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[80%] border border-gray-200">
                  <p className="text-sm text-gray-800 mb-2">
                    Just checking in! We'd love to help you with any questions about our services.
                  </p>
                  <p className="text-xs text-gray-500">2:20 PM</p>
                </div>
              </motion.div>
            )}

            {/* Booking Link */}
            {currentStep >= 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex justify-start"
              >
                <div className="bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl rounded-tl-sm p-4 shadow-lg max-w-[80%]">
                  <p className="text-sm text-white mb-3">
                    Ready to get started? Click below to connect with us:
                  </p>
                  <motion.button
                    className="bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold text-sm w-full flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Get Started</span>
                  </motion.button>
                  <p className="text-xs text-primary-100 mt-2">2:25 PM</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Step Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {steps.map((_step, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentStep >= index ? 'bg-primary-600' : 'bg-gray-300'
            }`}
            animate={{
              scale: currentStep >= index ? 1.2 : 1,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default PhoneConversation


