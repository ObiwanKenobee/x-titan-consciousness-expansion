import { motion } from "framer-motion";
import { Brain, Rocket, Network, Star } from "lucide-react";

const elements = [
  {
    icon: Brain,
    title: "Projected Consciousness",
    description:
      "Consciousness projection technology allows humans to explore and shape Titan through robotic avatars before physical colonization.",
  },
  {
    icon: Rocket,
    title: "Quantum Leap Propulsion",
    description:
      "Advanced propulsion systems reduce travel time to Titan, powered by quantum physics and ancient navigation principles.",
  },
  {
    icon: Network,
    title: "Consciousness Network",
    description:
      "A quantum network uniting human knowledge and consciousness across the solar system, enabling instantaneous communication and collaboration.",
  },
  {
    icon: Star,
    title: "Cosmic Awakening",
    description:
      "AR/VR and Neuralink technologies elevate human consciousness, preparing explorers for life beyond Earth.",
  },
];

export const KeyElements = () => {
  return (
    <section className="py-24 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pillars of a Conscious Cosmic Expansion
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {elements.map((element, index) => (
            <motion.div
              key={element.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <element.icon className="w-12 h-12 mb-4 mx-auto text-accent" />
              <h3 className="text-xl font-semibold mb-4">{element.title}</h3>
              <p className="text-white/70">{element.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};