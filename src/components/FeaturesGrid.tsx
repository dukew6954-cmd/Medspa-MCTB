import { motion } from 'framer-motion'
import { Phone, RefreshCw, Brain, Users, Calendar, BarChart3 } from 'lucide-react'

const FeaturesGrid = () => {
  const features = [
    {
      icon: Phone,
      title: 'Missed Call Text-Back',
      description: 'Instant automated response to every missed call within seconds.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: RefreshCw,
      title: 'Multi-Touch Follow-Up',
      description: "Smart sequences that follow up if leads don't respond initially.",
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Brain,
      title: 'AI FAQ Assistant',
      description: 'Trained on your specific services, policies, pricing, and hours.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Win-Back Campaigns',
      description: 'Monthly SMS campaigns to reactivate past customers automatically.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Calendar,
      title: 'Booking Link Routing',
      description: 'Seamlessly integrates with your existing booking system.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart3,
      title: 'Reporting Dashboard',
      description: 'Track recovered leads, bookings, and campaign performance.',
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Never Miss a Lead
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for businesses that want to maximize every opportunity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className={`bg-gradient-to-r ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid

