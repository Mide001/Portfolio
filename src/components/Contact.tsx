"use client";
import { motion } from "framer-motion";
import { Mail, Github, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-300 mb-12">
            Interested in blockchain development, DeFi, or building something
            amazing together? Let&apos;s have a conversation!
          </p>

          <div className="flex justify-center space-x-8">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                label: "Email",
                href: "mailto:techwithmide@gmail.com",
              },
              {
                icon: <Github className="w-6 h-6" />,
                label: "GitHub",
                href: "https://github.com/mide001",
              },
              {
                icon: <Twitter className="w-6 h-6" />,
                label: "LinkedIn",
                href: "http://x.com/techwithmide",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="flex flex-col items-center space-y-2 text-gray-300 hover:text-indigo-400 transition-colors"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-4 bg-slate-800/50 rounded-full border border-indigo-500/10">
                  {social.icon}
                </div>
                <span className="text-sm">{social.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.button
            className="mt-12 px-8 py-3 bg-indigo-500 text-white rounded-lg font-semibold 
                       hover:bg-indigo-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
