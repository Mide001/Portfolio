import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Skills = () => {
  const technicalSkills = [
    {
      category: "Blockchain",
      items: ["Solidity", "Ether.js", "Hardhat", "EVM"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Nest.js", "Express", "PostgreSQL", "REST APIs"],
    },
    { category: "Tools", items: ["Git", "Docker", "AWS"] },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Technical Writing",
    "Project Management",
    "Communication",
    "Mentoring",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-indigo-300 mb-6">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-indigo-500/10"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-lg font-medium text-indigo-400 mb-2">
                      {skill.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-indigo-300 mb-6">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-indigo-500/10"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
