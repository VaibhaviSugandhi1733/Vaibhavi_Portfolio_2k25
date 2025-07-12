import React from 'react';
import { Github, ExternalLink, Code, Container, Settings, FileText, Terminal } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Web Scraper using Python & Docker",
      description: "A scalable web scraping solution built with Python, featuring CSV export capabilities, robust error handling, and containerized deployment with Docker.",
      icon: <Code className="text-green-400" size={32} />,
      github: "https://github.com/VaibhaviSugandhi1733/Web-Scrapper-project.git",
      technologies: ["Python", "Docker", "BeautifulSoup", "Requests", "CSV"],
      features: [
        "Automated web data extraction",
        "CSV export functionality", 
        "Error handling and logging",
        "Containerized deployment",
        "Scalable scraping logic"
      ],
      commands: [
        "docker build -t web-scraper .",
        "docker run -v $(pwd)/data:/app/data web-scraper",
        "python scraper.py --output data.csv"
      ]
    },
    {
      title: "Custom Ansible Cluster in Docker + Kubernetes",
      description: "Manual setup of Ansible master and managed nodes using Red Hat-based Docker containers deployed in Kubernetes Pods with SSH configuration.",
      icon: <Container className="text-green-300" size={32} />,
      github: "https://github.com/VaibhaviSugandhi1733/AnsibleClusterSetup.git",
      technologies: ["Ansible", "Docker", "Kubernetes", "SSH", "Red Hat"],
      features: [
        "Custom Ansible cluster configuration",
        "Kubernetes Pod deployment",
        "SSH key management", 
        "Red Hat container images",
        "Automated provisioning"
      ],
      commands: [
        "kubectl apply -f ansible-cluster.yaml",
        "ansible-playbook -i inventory site.yml",
        "ssh ansible-master 'ansible all -m ping'"
      ]
    },
    {
      title: "File Management using Python",
      description: "A command-line interface tool for organizing and managing local files efficiently with various sorting and categorization options.",
      icon: <FileText className="text-green-500" size={32} />,
      github: "https://github.com/VaibhaviSugandhi1733/File-Management.git",
      technologies: ["Python", "CLI", "OS Module", "File System"],
      features: [
        "File organization automation",
        "Multiple sorting options",
        "Command-line interface",
        "Batch file operations",
        "Safe file handling"
      ],
      commands: [
        "python file_manager.py --organize ~/Downloads",
        "python file_manager.py --sort-by date",
        "./file_manager.py --help"
      ]
    }
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
        ease: easeOut
      }
    }
  };

  return (
    <section id="projects" className="py-20 terminal-bg">
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
                <span className="text-green-400 text-sm font-mono">projects.sh</span>
              </div>
              <div className="p-6 text-left">
                <div className="command-line mb-4">
                  <span className="text-green-400">$</span> ls -la ~/projects/
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## Featured Projects
                </h2>
                <p className="text-green-200 font-mono">
                  # Showcase of DevOps automation and infrastructure projects
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="project-card terminal-window"
              >
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">project_{index + 1}.md</span>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded bg-black/50 neon-border">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-bold text-green-300 font-mono">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-green-200 leading-relaxed font-mono text-sm">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-300 font-mono"># Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-green-200 flex items-center font-mono">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-300 font-mono"># Usage:</h4>
                    <div className="bg-black/50 p-3 rounded text-xs font-mono space-y-1">
                      {project.commands.map((command, cmdIndex) => (
                        <div key={cmdIndex} className="text-green-400">
                          $ {command}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-badge px-3 py-1 text-green-300 text-xs font-medium rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 pt-4 border-t border-green-500/30">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(34, 197, 94, 0.5)" }}
                      className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-colors duration-200 font-mono text-sm neon-border px-3 py-2 rounded"
                    >
                      <Github size={16} />
                      <span>git clone</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="https://github.com/VaibhaviSugandhi1733"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)" }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-400 text-black rounded font-semibold neon-border transition-all duration-300 font-mono"
            >
              <Terminal size={20} />
              <span>cd ~/github && ls -la</span>
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;