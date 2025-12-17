import { motion } from 'framer-motion'
import { Heart, Gift, Sparkles, Cake } from 'lucide-react'

const CampaignsSection = () => {
  const campaigns = [
    {
      icon: Heart,
      title: 'We Miss You',
      description: "Reconnect with past clients who haven't visited in 3+ months",
      example: 'Hi [Name]! We miss you at [Spa Name]. Book your next appointment and save 20% this month.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Gift,
      title: 'Last Minute Openings',
      description: 'Fill cancellations by notifying past clients of available slots',
      example: 'Quick update: We have openings this week! Reply to book your preferred time.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Sparkles,
      title: 'New Service Announcement',
      description: 'Introduce new treatments to your existing client base',
      example: 'Exciting news! We just launched [New Service]. Book your first session with 15% off.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Cake,
      title: 'Birthday / Anniversary',
      description: 'Personalized touchpoints that build loyalty and drive bookings',
      example: 'Happy Birthday, [Name]! Celebrate with a special treatment - 25% off this month.',
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Campaigns That Bring Clients Back
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Most text automation tools only handle missed calls. We go further with ongoing SMS marketing 
              that reactivates past customers and keeps your schedule full.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our monthly campaigns are designed to feel personal, not spammy. Each message is crafted to 
              drive action while respecting your brand voice.
            </p>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
              <p className="text-sm text-primary-800">
                <strong>Note:</strong> Message frequency and consent settings are fully customizable. 
                All campaigns comply with TCPA regulations.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Campaign Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={`bg-gradient-to-r ${campaign.color} w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
                  <campaign.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{campaign.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{campaign.description}</p>
                <div className="bg-gray-100 rounded-lg p-3 mt-4">
                  <p className="text-xs text-gray-700 italic">"{campaign.example}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampaignsSection

