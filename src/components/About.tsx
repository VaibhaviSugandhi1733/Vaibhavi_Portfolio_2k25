import React from 'react';
import { Heart, Target, Zap, Users, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const values = [
    {
      icon: <Heart className="text-red-400" size={24} />,
      title: "Passionate Learning",
      description: "Constantly exploring new technologies and methodologies in the DevOps ecosystem",
      command: "sudo apt update && apt upgrade knowledge"
    },
    {
      icon: <Target className="text-blue-400" size={24} />,
      title: "Goal-Oriented",
      description: "Focused on delivering reliable, scalable, and automated solutions",
      command: "kubectl apply -f reliable-solutions.yaml"
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Innovation",
      description: "Embracing cutting-edge tools and practices to optimize workflows",
      command: "docker run --rm innovation:latest"
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "Collaboration",
      description: "Believing in the power of teamwork and open-source contributions",
      command: "git push origin collaboration"
    }
  ];

  return (
    <section id="about" className="py-20 terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="terminal-window max-w-2xl mx-auto mb-8">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-green-400 text-sm font-mono">about.sh</span>
              </div>
              <div className="p-6">
                <div className="command-line text-left mb-4">
                  <span className="text-green-400">$</span> cat about_me.txt
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## About Me
                </h2>
              </div>
            </div>
            <p className="text-lg text-green-200 max-w-3xl mx-auto font-mono">
              Passionate DevOps enthusiast with a strong foundation in cloud technologies, 
              automation, and modern software delivery practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">bio.md</span>
                </div>
                <div className="p-6 space-y-4 text-green-100 font-mono text-sm leading-relaxed">
                  <div className="command-prompt">
                    I'm a DevOps enthusiast who thrives on the intersection of development and operations.
                  </div>
                  <div className="command-prompt">
                    My journey began with a fascination for automation and has evolved into a deep passion 
                    for building robust, scalable infrastructure.
                  </div>
                  <div className="command-prompt">
                    Currently focused on mastering cloud technologies, containerization, and CI/CD pipelines.
                  </div>
                  <div className="command-prompt">
                    When I'm not working on infrastructure as code, you'll find me contributing to 
                    open-source projects and exploring cloud-native technologies.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)" }}
                  className="terminal-glass p-6 rounded-xl text-center space-y-3 neon-border transition-all duration-300"
                >
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="font-semibold text-green-300 font-mono">{value.title}</h3>
                  <p className="text-sm text-green-200 font-mono">{value.description}</p>
                  <div className="text-xs text-green-400 font-mono bg-black/30 p-2 rounded">
                    $ {value.command}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;