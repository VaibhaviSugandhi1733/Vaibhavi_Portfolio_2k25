import React from 'react';
import { Github, ExternalLink, Code, Container, FileText, Terminal } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Test function to verify links work
  const testLink = (url: string, projectName: string) => {
    console.log(`Testing link for ${projectName}: ${url}`);
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) {
        console.log(`✅ Successfully opened ${projectName} in new tab`);
      } else {
        console.log(`❌ Failed to open ${projectName} - popup blocked?`);
        // Fallback: try to navigate directly
        window.location.href = url;
      }
    } catch (error) {
      console.error(`❌ Error opening ${projectName}:`, error);
    }
  };

  // Simple test function
  const simpleTest = (url: string, name: string) => {
    alert(`Testing ${name} link: ${url}`);
    console.log(`🧪 Testing ${name}: ${url}`);
    window.open(url, '_blank');
  };

  const projects = [
    {
      title: "Web Scraper using Python & Docker",
      description: "A scalable web scraping solution built with Python, featuring CSV export capabilities, robust error handling, and containerized deployment with Docker.",
      icon: <Code className="text-green-400" size={32} />,
      github: "https://github.com/VaibhaviSugandhi1733/Web-Scrapper-project",
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
      github: "https://github.com/VaibhaviSugandhi1733/AnsibleClusterSetup",
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
      github: "https://github.com/VaibhaviSugandhi1733/File-Management",
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
      {/* SUPER SIMPLE TEST */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="terminal-window p-4">
          <h3 className="text-red-400 font-mono mb-4">🚨 BASIC TEST - Click this button:</h3>
          <button
            onClick={() => alert('React is working!')}
            className="block w-full text-white bg-red-500 hover:bg-red-600 font-mono text-sm p-4 border border-red-500 rounded"
          >
            🧪 CLICK ME - Basic React Test
          </button>
        </div>
      </div>

      {/* Debug Test Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="terminal-window p-4">
          <h3 className="text-red-400 font-mono mb-4">🔧 DEBUG: Test Links (Click these first):</h3>
          <div className="space-y-2">
            <button
              onClick={() => simpleTest("https://github.com/VaibhaviSugandhi1733/Web-Scrapper-project", "Web Scraper")}
              className="block w-full text-green-400 hover:text-green-300 font-mono text-sm p-2 border border-green-500 rounded hover:bg-green-900/20 text-left"
            >
              🧪 TEST 1: Web Scraper Project (JS Button)
            </button>
            <button
              onClick={() => simpleTest("https://github.com/VaibhaviSugandhi1733/AnsibleClusterSetup", "Ansible Cluster")}
              className="block w-full text-green-400 hover:text-green-300 font-mono text-sm p-2 border border-green-500 rounded hover:bg-green-900/20 text-left"
            >
              🧪 TEST 2: Ansible Cluster Setup (JS Button)
            </button>
            <button
              onClick={() => simpleTest("https://github.com/VaibhaviSugandhi1733/File-Management", "File Management")}
              className="block w-full text-green-400 hover:text-green-300 font-mono text-sm p-2 border border-green-500 rounded hover:bg-green-900/20 text-left"
            >
              🧪 TEST 3: File Management Tool (JS Button)
            </button>
          </div>
          
          <h4 className="text-yellow-400 font-mono mt-4 mb-2">🔗 Simple HTML Links (Backup):</h4>
          <div className="space-y-2">
            <a 
              href="https://github.com/VaibhaviSugandhi1733/Web-Scrapper-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-blue-300 font-mono text-sm p-2 border border-blue-500 rounded hover:bg-blue-900/20"
            >
              🔗 HTML LINK 1: Web Scraper Project
            </a>
            <a 
              href="https://github.com/VaibhaviSugandhi1733/AnsibleClusterSetup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-blue-300 font-mono text-sm p-2 border border-blue-500 rounded hover:bg-blue-900/20"
            >
              🔗 HTML LINK 2: Ansible Cluster Setup
            </a>
            <a 
              href="https://github.com/VaibhaviSugandhi1733/File-Management" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-blue-300 font-mono text-sm p-2 border border-blue-500 rounded hover:bg-blue-900/20"
            >
              🔗 HTML LINK 3: File Management Tool
            </a>
          </div>
        </div>
      </div>

      {/* Test Section - Remove after testing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="terminal-window p-4">
          <h3 className="text-green-300 font-mono mb-4">Test GitHub Links:</h3>
          <div className="space-y-2">
            <a 
              href="https://github.com/VaibhaviSugandhi1733/Web-Scrapper-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-green-400 hover:text-green-300 font-mono text-sm p-2 border border-green-500 rounded hover:bg-green-900/20"
            >
              1. Web Scraper Project
            </a>
            <a 
              href="https://github.com/VaibhaviSugandhi1733/AnsibleClusterSetup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-green-400 hover:text-green-300 font-mono text-sm p-2 border border-green-500 rounded hover:bg-green-900/20"
            >
              2. Ansible Cluster Setup
            </a>
            <a 
              href="https://github.com/VaibhaviSugandhi1733/File-Management" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-green-400 hover:text-green-300 font-mono text-sm p-2 border border-green-500 rounded hover:bg-green-900/20"
            >
              3. File Management Tool
            </a>
          </div>
        </div>
      </div>
      
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="project-card terminal-window h-full"
              >
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">project_{index + 1}.md</span>
                </div>
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 rounded bg-black/50 neon-border flex-shrink-0">
                      {project.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-green-300 font-mono leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-green-200 leading-relaxed font-mono text-xs sm:text-sm">
                    {project.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-semibold text-green-300 font-mono text-sm"># Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs sm:text-sm text-green-200 flex items-start font-mono">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 sm:mt-1 flex-shrink-0"></span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-semibold text-green-300 font-mono text-sm"># Usage:</h4>
                    <div className="bg-black/50 p-2 sm:p-3 rounded text-xs font-mono space-y-1">
                      {project.commands.map((command, cmdIndex) => (
                        <div key={cmdIndex} className="text-green-400 break-all">
                          $ {command}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-badge px-2 sm:px-3 py-1 text-green-300 text-xs font-medium rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3 sm:space-x-4 pt-3 sm:pt-4 border-t border-green-500/30">
                    <div className="flex-1">
                      <div className="text-xs text-green-400 font-mono mb-2 opacity-80">
                        Repository: {project.github.split('/').pop()}
                      </div>
                      <div className="flex space-x-2">
                        {/* Simple anchor tag - most reliable */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-all duration-300 font-mono text-xs sm:text-sm neon-border px-3 sm:px-4 py-2 sm:py-3 rounded cursor-pointer bg-black/20 hover:bg-black/40 hover:scale-105 active:scale-95"
                          title={`Click to open ${project.title} repository`}
                        >
                          <Github size={16} className="sm:w-5 sm:h-5" />
                          <span className="font-semibold">git clone</span>
                        </a>
                        
                        {/* Backup link - always works */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-all duration-300 font-mono text-xs px-2 py-2 rounded cursor-pointer bg-green-900/20 hover:bg-green-900/40 border border-green-500/50 hover:scale-105 active:scale-95"
                          title={`Backup: Click to open ${project.title} repository`}
                        >
                          <span className="text-xs">🔗</span>
                        </a>
                      </div>
                    </div>
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