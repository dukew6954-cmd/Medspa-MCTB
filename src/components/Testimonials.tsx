import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Owner, Aura Med Spa',
      content: 'We were losing leads left and right during peak hours. Now every missed call gets a text within seconds, and our booking rate has improved significantly. The AI FAQ feature is a game-changer.',
      metric: 'More recovered leads',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Operations Manager, Glow Clinic',
      content: 'The win-back campaigns have been incredible. We\'ve reactivated clients we hadn\'t seen in over a year. The ROI is clear, and our front desk team loves having less pressure during busy times.',
      metric: 'Higher rebooking rate',
    },
    {
      name: 'Jennifer Park',
      role: 'Founder, Serenity Spa',
      content: 'Setup was seamless, and the team trained the AI on all our services and pricing. Now it handles questions accurately even when we\'re swamped. This pays for itself in recovered appointments.',
      metric: 'Less front desk stress',
    },
  ]

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Clinics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how med spas like yours are turning missed calls into booked appointments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-100 pt-6">
                <div className="font-bold text-gray-900 mb-1">{testimonial.name}</div>
                <div className="text-sm text-gray-600 mb-3">{testimonial.role}</div>
                <div className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          className="text-center mt-12 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>
            *Results vary by clinic. Testimonials represent individual experiences and may not be typical.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

