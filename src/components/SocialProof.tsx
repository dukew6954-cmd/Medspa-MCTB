import { motion } from 'framer-motion'

const SocialProof = () => {
  const logos = [
    { name: 'Spa Elite', color: 'from-blue-500 to-blue-600' },
    { name: 'Aura Med Spa', color: 'from-purple-500 to-purple-600' },
    { name: 'Glow Clinic', color: 'from-pink-500 to-pink-600' },
    { name: 'Serenity Spa', color: 'from-indigo-500 to-indigo-600' },
  ]

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-sm text-gray-500 mb-8 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by clinics like yours
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`bg-gradient-to-r ${logo.color} text-white px-6 py-3 rounded-lg font-semibold text-sm opacity-60 hover:opacity-100 transition-opacity`}>
                {logo.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof


