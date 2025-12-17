import { motion } from 'framer-motion'
import { PhoneOff, Clock, Users, Calculator } from 'lucide-react'
import { useState } from 'react'

const ProblemSection = () => {
  const [missedCalls, setMissedCalls] = useState(40)
  const [avgTicketPrice, setAvgTicketPrice] = useState(300)
  const [conversionRate, setConversionRate] = useState(20)

  // Calculate lost revenue
  const lostBookings = Math.round((missedCalls * conversionRate) / 100)
  const lostRevenueMonthly = lostBookings * avgTicketPrice
  const lostRevenueYearly = lostRevenueMonthly * 12
  const painPoints = [
    {
      icon: PhoneOff,
      title: "Front desk can't answer every call",
      description: 'Peak hours mean missed opportunities',
      color: 'bg-primary-100 text-primary-600',
    },
    {
      icon: Clock,
      title: 'Leads go cold fast',
      description: 'Every minute counts in lead conversion',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Users,
      title: 'Past clients forget to rebook',
      description: 'Out of sight, out of mind',
      color: 'bg-primary-100 text-primary-600',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Missed calls don't just{' '}
            <span className="text-gray-400 line-through decoration-2">disappear</span>
            {' '}— they go to the next med spa
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every unanswered call is revenue walking out the door to your competition
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Pain Points */}
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${point.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                    <point.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Calculator */}
          <motion.div
            className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold">Calculate Your Lost Revenue</h3>
            </div>
            
            {/* Input Fields */}
            <div className="space-y-5 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 opacity-90">
                  Missed calls per month
                </label>
                <input
                  type="number"
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value) || 0)}
                  className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 py-3 text-white text-base font-semibold focus:outline-none focus:border-white/50 focus:bg-white/25 transition-all placeholder-white/50"
                  min="0"
                  placeholder="40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 opacity-90">
                  Average ticket price ($)
                </label>
                <input
                  type="number"
                  value={avgTicketPrice}
                  onChange={(e) => setAvgTicketPrice(Number(e.target.value) || 0)}
                  className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 py-3 text-white text-base font-semibold focus:outline-none focus:border-white/50 focus:bg-white/25 transition-all placeholder-white/50"
                  min="0"
                  placeholder="300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 opacity-90">
                  Conversion rate (% of missed calls that would book)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    min="5"
                    max="40"
                    step="5"
                  />
                  <div className="flex justify-between text-xs mt-1 opacity-75">
                    <span>5%</span>
                    <span>40%</span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-xl font-bold">{conversionRate}%</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 mb-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span className="text-sm opacity-90">Lost bookings per month</span>
                  <span className="text-2xl font-bold">{lostBookings}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span className="text-sm opacity-90">Lost revenue per month</span>
                  <span className="text-2xl font-bold">${lostRevenueMonthly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-semibold">Lost revenue per year</span>
                  <span className="text-3xl font-bold text-yellow-200">${lostRevenueYearly.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="text-xs opacity-90 text-center">
                This is revenue you're losing every month. Let's recover it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection

