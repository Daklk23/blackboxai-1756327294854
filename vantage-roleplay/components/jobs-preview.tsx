"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

const jobCategories = [
  {
    title: 'Legalni Poslovi',
    description: 'Služi zajednici kroz legalne profesije',
    jobs: ['Policija', 'EMS', 'Mehaničar', 'Taksi'],
    color: 'bg-blue-500/10 border-blue-500/20',
    icon: '👮‍♂️',
  },
  {
    title: 'Ilegalni Poslovi',
    description: 'Rizičan put kroz podzemlje grada',
    jobs: ['Dilovanje', 'Pljačke', 'Kontrabanda', 'Bande'],
    color: 'bg-red-500/10 border-red-500/20',
    icon: '🕴️',
  },
  {
    title: 'Civilni Poslovi',
    description: 'Gradi svoju karijeru u civilnom sektoru',
    jobs: ['Trgovina', 'Transport', 'Nekretnine', 'Usluge'],
    color: 'bg-green-500/10 border-green-500/20',
    icon: '👔',
  },
]

export function JobsPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Izaberi svoj <span className="text-lime-500">put</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Od legalnih profesija do rizičnih poduhvata - svaki put ima svoju priču. 
            Koja će biti tvoja?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {jobCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`${category.color} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-foreground">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-center mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.jobs.map((job) => (
                  <span
                    key={job}
                    className="px-3 py-1 bg-background/50 rounded-full text-sm text-muted-foreground"
                  >
                    {job}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-card border border-border rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Balansiran sistem napredovanja
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Svaki posao ima svoj sistem napredovanja, zarade i odgovornosti. 
            Bez pay-to-win elemenata - uspeh zavisi samo od tvog truda i roleplay kvaliteta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/poslovi"
              className="px-6 py-3 bg-lime-500 text-black rounded-lg hover:bg-lime-400 transition-colors font-medium"
            >
              Pogledaj sve poslove
            </Link>
            <Link
              href="/kako-poceti"
              className="px-6 py-3 border border-lime-500 text-lime-500 rounded-lg hover:bg-lime-500 hover:text-black transition-colors font-medium"
            >
              Kako se prijaviti
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
