import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-primary to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm bg-accent/10 text-accent rounded-full">
            Welcome to X-Titan
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary">
            Project Genesis
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary/80 max-w-2xl mx-auto">
            Expanding Humanity's Consciousness Across the Universe
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
              Join the Genesis Mission
            </button>
            <button className="px-8 py-3 border border-secondary/20 text-secondary rounded-lg hover:bg-secondary/5 transition-colors">
              Explore the Vision
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};