import React from 'react';
import { Award, ExternalLink, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
    {
      title: "AWS Cloud Practitioner Foundations",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: "☁️",
      status: "verified",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology",
      command: "aws configure list"
    }
  ];

  const plannedCerts = [
    { name: "CKA", status: "in_progress", command: "kubectl version --client" },
    { name: "AWS Solutions Architect", status: "planned", command: "aws sts get-caller-identity" },
    { name: "Docker Certified Associate", status: "planned", command: "docker --version" }
  ];

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

  return (
    <section id="certifications" className="py-20 terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="terminal-window max-w-3xl mx-auto mb-8">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-green-400 text-sm font-mono">certifications.json</span>
              </div>
              <div className="p-6 text-left">
                <div className="command-line mb-4">
                  <span className="text-green-400">$</span> cat certifications.json | jq '.'
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## Certifications
                </h2>
                <p className="text-green-200 font-mono">
                  # Validated expertise in cloud technologies and DevOps practices
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)" }}
                className="terminal-window"
              >
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">cert_{index + 1}.sh</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center text-2xl neon-border">
                      {cert.icon}
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-xs text-green-400 font-mono">VERIFIED</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-green-300 mb-2 font-mono">
                      {cert.title}
                    </h3>
                    <p className="text-green-400 font-medium mb-1 font-mono">
                      {cert.issuer}
                    </p>
                    <p className="text-green-500 text-sm mb-3 font-mono">
                      Issued: {cert.date}
                    </p>
                    <p className="text-green-200 text-sm font-mono">
                      {cert.description}
                    </p>
                  </div>
                  <div className="text-xs text-green-400 font-mono bg-black/50 p-2 rounded">
                    $ {cert.command}
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Shield className="text-green-400" size={16} />
                    <span className="text-sm text-green-300 font-mono">Certificate Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="terminal-window max-w-4xl mx-auto">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-green-400 text-sm font-mono">learning_pipeline.yml</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-300 mb-6 font-mono">
                  # Continuous Learning Pipeline
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {plannedCerts.map((cert, index) => (
                    <div key={index} className="terminal-glass p-4 rounded neon-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-green-300 font-mono">{cert.name}</span>
                        <span className={`text-xs px-2 py-1 rounded font-mono ${
                          cert.status === 'in_progress' 
                            ? 'bg-yellow-500/20 text-yellow-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {cert.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                      <div className="text-xs text-green-400 font-mono bg-black/50 p-2 rounded">
                        $ {cert.command}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-green-200 font-mono text-sm">
                  <div className="command-line">
                    <span className="text-green-400">$</span> echo "Learning never stops in DevOps!"
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;