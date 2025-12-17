import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do we need new software?',
      answer: 'No! We integrate with your existing phone system and booking platform. Your staff doesn\'t need to learn anything new—everything runs automatically in the background.',
    },
    {
      question: 'What if we already have a booking system?',
      answer: 'Perfect! We work with most major booking systems (Acuity, Square, Mindbody, etc.). We simply connect to your booking link and push it in messages. No disruption to your current workflow.',
    },
    {
      question: 'Can you match our tone/brand?',
      answer: 'Absolutely. During setup, we\'ll review your existing communications and train the AI to match your brand voice. You can also approve all message templates before they go live.',
    },
    {
      question: 'How does AI learn our policies?',
      answer: 'We provide a simple onboarding form where you share your services, pricing ranges, hours, location, and policies. Our team then trains the AI specifically for your med spa. You can update this anytime.',
    },
    {
      question: 'What about compliance/consent?',
      answer: 'We\'re fully TCPA-compliant. All campaigns require opt-in consent, and we handle unsubscribe requests automatically. We also provide compliance documentation for your records.',
    },
    {
      question: 'Can we approve campaigns before they send?',
      answer: 'Yes! You have full control. You can review and approve all campaign messages before they\'re sent. For missed-call responses, you can set up auto-approval or review mode—your choice.',
    },
    {
      question: 'How fast can we launch?',
      answer: 'Typically 5-7 business days from sign-up. This includes phone number setup, AI training, message template creation, and testing. We\'ll work with you to ensure everything is perfect before going live.',
    },
    {
      question: 'Will this replace my receptionist?',
      answer: 'No—this supports them. Your receptionist can focus on in-person clients and complex questions while automation handles after-hours calls, FAQs, and follow-ups. It reduces stress, not staff.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about getting started
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

