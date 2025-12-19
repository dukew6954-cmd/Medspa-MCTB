import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PhoneMissed, MessageSquare, Calendar } from 'lucide-react'

const DemoShowcase = () => {
  const [activeTab, setActiveTab] = useState<'missed-call' | 'follow-up' | 'ai-faq'>('missed-call')

  const demos = {
    'missed-call': {
      title: 'Missed Call Recovery',
      messages: [
        { type: 'system', text: 'Missed call from Sarah M. at 2:15 PM', icon: PhoneMissed },
        { type: 'outbound', text: 'Hi Sarah! We missed your call. How can we help you today?', time: '2:15 PM' },
        { type: 'inbound', text: 'Hi! I was calling about your services', time: '2:16 PM' },
        { type: 'outbound', text: 'Great! We\'d love to help. Would you like to schedule a consultation or get more information?', time: '2:16 PM' },
        { type: 'action', text: 'Get Started', icon: Calendar },
      ],
    },
    'follow-up': {
      title: 'No Response Follow-Up',
      messages: [
        { type: 'outbound', text: 'Hi Sarah! We missed your call. How can we help you today?', time: '2:15 PM' },
        { type: 'system', text: 'No response after 5 minutes', icon: MessageSquare },
        { type: 'outbound', text: "Just checking in! We'd love to help with any questions about our services.", time: '2:20 PM' },
        { type: 'inbound', text: 'Thanks! What are your hours?', time: '2:22 PM' },
        { type: 'outbound', text: "We're open Mon-Fri 9am-7pm, Sat 10am-4pm. Would you like to get started?", time: '2:22 PM' },
        { type: 'action', text: 'Get Started', icon: Calendar },
      ],
    },
    'ai-faq': {
      title: 'AI FAQ Assistant',
      messages: [
        { type: 'inbound', text: 'What services do you offer?', time: '2:15 PM' },
        { type: 'outbound', text: 'We offer a full range of services tailored to your needs. Which area interests you most?', time: '2:15 PM' },
        { type: 'inbound', text: 'What are your prices?', time: '2:16 PM' },
        { type: 'outbound', text: 'Our pricing varies based on your specific needs. Would you like to schedule a consultation to discuss options?', time: '2:16 PM' },
        { type: 'action', text: 'Get Started', icon: Calendar },
      ],
    },
  }

  const currentDemo = demos[activeTab]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              Live Demo
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our automation handles different scenarios in real-time
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 bg-gray-100 p-2 rounded-2xl">
            {(['missed-call', 'follow-up', 'ai-faq'] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all relative ${
                  activeTab === tab
                    ? 'bg-white text-primary-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {demos[tab].title}
                {activeTab === tab && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Chat Simulator */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 px-6 py-5 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"></div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ring-2 ring-white/30">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">SignalVia</div>
                    <div className="text-xs opacity-90 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                      Online • Responds instantly
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white min-h-[450px] max-h-[550px] overflow-y-auto">
              <AnimatePresence mode="wait">
                {currentDemo.messages.map((message, index) => (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                    className={`flex ${message.type === 'inbound' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.type === 'system' ? (
                      <div className="w-full flex items-center justify-center my-3">
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="bg-yellow-50 border-2 border-yellow-200 rounded-xl px-4 py-2.5 flex items-center space-x-2 shadow-sm"
                        >
                          {message.icon && <message.icon className="w-4 h-4 text-yellow-600" />}
                          <span className="text-sm font-medium text-yellow-800">{message.text}</span>
                        </motion.div>
                      </div>
                    ) : message.type === 'action' ? (
                      <div className="w-full mt-2">
                        <motion.button
                          className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold w-full flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transition-all"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {message.icon && <message.icon className="w-6 h-6" />}
                          <span className="text-base">{message.text}</span>
                        </motion.button>
                      </div>
                    ) : (
                      <motion.div
                        className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                          message.type === 'inbound'
                            ? 'bg-white border-2 border-gray-200 rounded-tr-sm'
                            : 'bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-tl-sm shadow-md'
                        }`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className={`text-sm leading-relaxed ${message.type === 'inbound' ? 'text-gray-800' : 'text-white'}`}>
                          {message.text}
                        </p>
                        {message.time && (
                          <p className={`text-xs mt-2 ${message.type === 'inbound' ? 'text-gray-500' : 'text-primary-100'}`}>
                            {message.time}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            className="mt-8 grid md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">60s</div>
              <div className="text-sm text-gray-600">Average response time</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Always available</div>
            </div>
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Automated</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DemoShowcase

