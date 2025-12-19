import { motion } from 'framer-motion'
import { Link, MessageSquare, Sparkles } from 'lucide-react'
import { useRef } from 'react'

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      icon: Link,
      title: 'Connect Your Number',
      description: 'Connect your existing phone number or set up missed call detection. No new hardware needed.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MessageSquare,
      title: 'Instant Text-Back + Follow-Up',
      description: "Every missed call gets an immediate text. If they don't respond, we follow up automatically.",
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Sparkles,
      title: 'AI FAQ + Booking Push',
      description: 'AI trained on your services answers questions and pushes booking links. Plus, monthly campaigns reactivate past clients.',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to turn missed calls into converted leads
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-primary-500 to-purple-500 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  {/* Step Number */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="hidden md:block absolute top-1/2 left-full w-1/2 h-0.5 bg-gradient-to-r from-transparent to-transparent"></div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>

                  {/* Step Number Badge */}
                  <div className="mt-6 flex items-center space-x-2">
                    <div className={`bg-gradient-to-r ${step.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      STEP {index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

