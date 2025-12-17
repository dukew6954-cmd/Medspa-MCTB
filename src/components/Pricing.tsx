import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const Pricing = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const basicFeatures = [
    'Missed call text-back (automatic text sent when call is missed)',
    'Booking link in the text (direct link for them to book on their own)',
    '24/7 coverage (works during business hours and after hours)',
    'Branded message (business name included)',
  ]

  const package1Features = [
    '24/7 missed call text-back',
    'Works during business hours and after hours',
    'After-hours lead capture (nights, weekends, holidays)',
    'Automated follow-up sequences that stop once they reply',
    'Appointment booking push with existing scheduler',
    'FAQ text replies (keyword-based: hours, location, services, pricing ranges)',
    'Monthly win-back SMS campaigns written & scheduled for them',
    'Fully managed service (no software, logins, or staff training)',
  ]

  const package2Features = [
    'Everything in Base Plan',
    'AI text concierge for natural, open-ended conversations',
    'AI-powered FAQ handling trained on services, policies, and tone',
    'Smarter booking conversations that guide leads to book',
    'Reduced front desk load and fewer manual texts',
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600">
            Start simple with Starter, or get full automation with our managed packages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Starter Plan */}
          <motion.div
            className="border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md bg-white flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center text-lg font-semibold">
                S
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Starter Plan
              </h3>
            </div>

            <p className="text-sm font-medium text-gray-600 mb-6">
              Simple missed call recovery
            </p>

            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                $97<span className="text-lg md:text-xl font-normal text-gray-700">/month</span>
              </div>
              <div className="text-sm text-gray-600">
                No setup fee
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Includes
              </h4>
              <div className="space-y-3">
                {basicFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 border-t border-gray-200 pt-4 mt-auto">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Best for</h4>
              <p className="text-sm text-gray-700">
                Small clinics just getting started with text automation who need basic missed call recovery.
              </p>
            </div>

            <motion.button
              onClick={scrollToDemo}
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition-shadow mt-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Starter Plan
            </motion.button>
          </motion.div>

          {/* Base Plan */}
          <motion.div
            className="border-2 border-primary-500 rounded-3xl p-6 md:p-8 shadow-lg bg-gradient-to-b from-white to-primary-50 flex flex-col relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="absolute top-4 right-4 bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div className="mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center text-lg">
                B
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Base Plan
              </h3>
            </div>

            <p className="text-sm font-medium text-primary-700 mb-4">
              Complete automation solution. Everything you need to recover leads and reactivate past clients.
            </p>

            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                $297<span className="text-lg md:text-xl font-normal text-gray-700">/month</span>
              </div>
              <div className="text-sm text-gray-700">
                $499 <span className="font-semibold">one-time setup</span>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Includes
              </h4>
              <div className="space-y-3">
                {package1Features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 border-t border-gray-200 pt-4 mt-auto">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Best for</h4>
              <p className="text-sm text-gray-700">
                Most med spas, clinics missing calls after hours, and owners who want simple, reliable automation.
              </p>
            </div>

            <motion.button
              onClick={scrollToDemo}
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition-shadow mt-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Base Plan
            </motion.button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="border-2 border-purple-500 rounded-3xl p-6 md:p-8 shadow-xl bg-gradient-to-b from-purple-600 to-indigo-700 text-white relative overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="absolute top-4 right-4 bg-white/15 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
              Most Advanced
            </div>

            <div className="mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-lg">
                P
              </div>
              <h3 className="text-xl md:text-2xl font-bold">
                Premium Plan
              </h3>
            </div>

            <p className="text-sm font-medium text-white/90 mb-4">
              Includes everything in Base Plan, plus advanced AI handling.
            </p>

            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold mb-1">
                $497<span className="text-lg md:text-xl font-normal text-white/80">/month</span>
              </div>
              <div className="text-sm text-white/90">
                $499 <span className="font-semibold">one-time setup</span>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <h4 className="text-sm font-semibold mb-3">
                Everything in Base Plan, plus
              </h4>
              <div className="space-y-3">
                {package2Features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-white/90">
                    <Check className="w-4 h-4 text-emerald-300 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Reputation Management - Special Highlight */}
            <div className="mb-6 bg-white/20 backdrop-blur-sm rounded-xl p-5 border-2 border-yellow-400/50 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-400 text-purple-900 p-2 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-yellow-300 uppercase tracking-wide">Premium Exclusive</span>
                  </div>
                  <h5 className="font-bold text-white text-base mb-1">Review Reputation Management</h5>
                  <p className="text-sm text-white/90">
                    Automatic post-visit texts asking happy clients to leave a Google review. Build your reputation automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 border-t border-white/20 pt-4 mt-auto">
              <h4 className="text-sm font-semibold mb-2">Best for</h4>
              <p className="text-sm text-white/90">
                High-volume med spas, clinics with lots of inbound texts, and owners who want maximum automation.
              </p>
            </div>

            <motion.button
              onClick={scrollToDemo}
              className="w-full bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition-shadow mt-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Premium Plan
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

