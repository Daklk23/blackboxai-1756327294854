"use client"

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Kvalitetan Roleplay',
    description: 'Fokus na autentičan i immersivan roleplay sa jasnim pravilima i aktivnim staff timom koji osigurava kvalitet.',
    icon: '🎭',
  },
  {
    title: 'Stabilna Ekonomija',
    description: 'Balansirana ekonomija koja nagrađuje trud i kreativnost, bez pay-to-win elemenata.',
    icon: '💰',
  },
  {
    title: 'Aktivna Zajednica',
    description: 'Prijateljska i aktivna zajednica igrača koji su posvećeni kvalitetnom roleplay iskustvu.',
    icon: '👥',
  },
  {
    title: 'Redovan Razvoj',
    description: 'Kontinuirani razvoj servera sa novim sadržajima, poslovima i mogućnostima za roleplay.',
    icon: '🚀',
  },
]

export function FeatureSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zašto <span className="text-lime-500">Vantage</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Otkrijte što nas čini posebnima i zašto je Vantage Roleplay pravi izbor za vaše roleplay iskustvo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Spreman si da počneš svoju priču u Vantage gradu?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kako-poceti"
              className="px-6 py-3 bg-lime-500 text-black rounded-lg hover:bg-lime-400 transition-colors font-medium"
            >
              Kako početi
            </a>
            <a
              href="/pravila"
              className="px-6 py-3 border border-lime-500 text-lime-500 rounded-lg hover:bg-lime-500 hover:text-black transition-colors font-medium"
            >
              Pročitaj pravila
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
