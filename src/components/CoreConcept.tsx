import { motion } from "framer-motion";

export const CoreConcept = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            A Journey Beyond Earth, Toward Universal Consciousness
          </h2>
          <p className="text-lg text-secondary/70 mb-12">
            X-Titan: Project Genesis is a transformative space mission to seed life
            and expand human consciousness on Titan. This multi-dimensional project
            combines breakthroughs in consciousness technology, space colonization,
            and cosmic wisdom to create a future where humanity thrives as a cosmic
            species.
          </p>
          <button className="px-8 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors">
            Learn More About Project Genesis
          </button>
        </motion.div>
      </div>
    </section>
  );
};