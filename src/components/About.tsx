import React from "react";
import { motion } from "framer-motion";
import {
  Gamepad,
  Rocket,
  Code2,
  Brain,
  Globe,
  MapPin,
  Database,
} from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
            About Me
          </h2>

          <div className="grid grid-cols-1 gap-8 mb-12">
            <motion.div
              className="p-8 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-indigo-500/10"
              whileHover={{ scale: 1.01 }}
            >
              <p className="text-gray-300 leading-relaxed mb-6">
                So here&apos;s my story - I actually studied Surveying and
                Geo-Informatics in school, which might sound pretty different
                from what I do now! But honestly, it gave me a really cool way
                of looking at problems and working with data, which comes in
                handy more than you&apos;d think in blockchain stuff.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                These days, I&apos;m all about web3 and blockchain. I love
                building stuff - from making websites look nice and work
                smoothly, to getting the backend all set up, and especially
                working with smart contracts. It&apos;s pretty awesome because I
                get to work on all parts of a project. Like, one day I might be
                designing how something looks, and the next day I&apos;m deep in
                the code making sure the smart contracts work just right.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                What really gets me excited right now is mixing AI with
                blockchain and DeFi. There&apos;s so much cool stuff we can do
                when we combine these technologies! I&apos;m always playing
                around with new ideas and trying to figure out how to make
                blockchain easier for everyone to use. It&apos;s like putting
                together a puzzle, but a really fun one!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  className="p-6 bg-slate-800/80 rounded-lg border border-indigo-500/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300 flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    What I Work On
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span>
                        Making websites that look good and work even better
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span>
                        Setting up the behind-the-scenes stuff that makes
                        everything run
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span>
                        Writing smart contracts and connecting them to websites
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span>Making DeFi smarter with AI</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="p-6 bg-slate-800/80 rounded-lg border border-indigo-500/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    What I&apos;m Into Right Now
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span>Finding cool ways to use AI in DeFi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span>Making it easier for people to get into web3</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span>
                        Building trading systems that work on their own
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span>Helping others learn about web3</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                className="p-6 bg-slate-800/80 rounded-lg border border-indigo-500/10"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-indigo-300 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  When I&apos;m Not Coding
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-slate-700/30 rounded-lg">
                    <Gamepad className="w-6 h-6 text-indigo-400 mb-2" />
                    <span className="text-gray-300 text-sm text-center">
                      Love playing FIFA
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-slate-700/30 rounded-lg">
                    <MapPin className="w-6 h-6 text-indigo-400 mb-2" />
                    <span className="text-gray-300 text-sm text-center">
                      Surveying grad
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-slate-700/30 rounded-lg">
                    <Globe className="w-6 h-6 text-indigo-400 mb-2" />
                    <span className="text-gray-300 text-sm text-center">
                      Web3 explorer
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-slate-700/30 rounded-lg">
                    <Database className="w-6 h-6 text-indigo-400 mb-2" />
                    <span className="text-gray-300 text-sm text-center">
                      DeFi builder
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
