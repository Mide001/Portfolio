"use client";
import { motion } from "framer-motion";
import { Users, Code2 } from "lucide-react";

export default function Community() {
  return (
    <section className="py-20 bg-indigo-950/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
            Community Involvement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-indigo-500/10"
              whileHover={{ scale: 1.02 }}
            >
              <Users className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                Base Africa Builders
              </h3>
              <p className="text-gray-300">
                Supporting builders in the Base ecosystem by providing technical
                guidance and mentorship. Helping teams improve their products
                and achieve their goals.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-indigo-500/10"
              whileHover={{ scale: 1.02 }}
            >
              <Code2 className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                Pair Programming
              </h3>
              <p className="text-gray-300">
                Engaging in regular collaborative coding sessions, sharing
                knowledge, and solving complex blockchain challenges with fellow
                developers.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
