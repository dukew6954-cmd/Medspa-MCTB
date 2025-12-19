import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const FinalCTA = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="demo-form" className="py-20 bg-gradient-to-br from-primary-600 via-purple-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop losing leads you already paid to get.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            We'll customize this to your business in days—and walk you through it over text or a quick call.
          </p>
          <motion.button
            onClick={scrollToDemo}
            className="bg-white text-primary-600 px-10 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-shadow inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get a Call or Text</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Lead Form */}
        <motion.div
          className="mt-12 bg-white rounded-2xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Request Your Text or Call Demo
          </h3>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Demo request submitted! (This is a demo form)'); }}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your Business Name"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="john@yourbusiness.com"
                />
              </div>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Text or Call Demo
            </motion.button>
            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to be contacted by text or phone about our services. We respect your privacy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA

