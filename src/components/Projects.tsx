"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered DeFi Research Agent",
    description:
      "An intelligent agent for token research and trading on the Mode blockchain, enabling natural language interactions for market research and trading execution.",
    tags: ["AI", "DeFi", "Smart Contracts", "NLP"],
    highlights: [
      "Implemented natural language processing for trade commands",
      "Real-time token data integration",
      "Secure transaction processing",
      "Advanced market analytics",
    ],
    githubLink: "https://github.com/Mide001/Slooth",
    demoLink: "https://mode-slooth.vercel.app/",
  },
  {
    id: 2,
    title: "Web3 Payroll Platform",
    description:
      "A comprehensive payroll and invoicing system built on Base, featuring secure authentication and automated payment processing.",
    tags: ["Web3", "Payments", "Authentication", "Base"],
    highlights: [
      "Secure authentication system",
      "Automated email notifications",
      "Smart contract integration",
      "Transaction tracking",
    ],
    githubLink: "#",
    demoLink: "https://swiftpayfinance.vercel.app/sign-up",
  },
  {
    id: 3,
    title: "ProductFinder",
    description:
      "A platform connecting founders with potential users, featuring product listings and user acquisition tools.",
    tags: ["UI/UX", "Smart Contracts", "Web3"],
    highlights: [
      "Intuitive product listing interface",
      "User acquisition analytics",
      "Smart contract integration",
      "Founder-user matching system",
    ],
    githubLink: "https://github.com/Mide001/productfindr-frontend",
    demoLink: "https://productfindr-frontend.vercel.app",
  },
  {
    id: 4,
    title: "Solana Liquidity Pool Tracker",
    description:
      "The Solana Liquidity Pool Tracker is a tool designed to monitor and provide insights into liquidity pool activities on the Raydium decentralized exchange (DEX) on the Solana blockchain. The project leverages the Solana web3.js library to interact with the Solana blockchain, specifically targeting transactions related to liquidity pool creation.",
    tags: [
      "Solana",
      "DeFi",
      "Liquidity Pools",
      "Raydium",
      "Web3",
      "Blockchain",
    ],

    highlights: [
      "Real-time Monitoring",
      "tilizes QuickNode for enhanced Solana RPC access, ensuring fast and reliable data retrieval.",
      "Sends real-time notifications to a specified Telegram channel",
      "Advanced market analytics",
    ],
    githubLink: "https://github.com/Mide001/raydium-event-notfier",
    demoLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-indigo-500/10 
                             transform transition-all duration-300 hover:bg-slate-800/70"
              >
                <h3 className="text-2xl font-bold mb-4 text-indigo-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 flex justify-end space-x-6"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>View on GitHub</span>
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>View Demo</span>
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
