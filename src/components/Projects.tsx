import React, { useState } from 'react';
import { Github, ExternalLink, Code, Container, FileText, Terminal } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [loadingLinks, setLoadingLinks] = useState<{ [key: string]: boolean }>({});

  const handleLinkClick = (url: string, projectTitle: string) => {
    // Set loading state for this specific link
    setLoadingLinks(prev => ({ ...prev, [projectTitle]: true }));
    
    // Add a small delay to show loading state, then open link
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      // Reset loading state after a short delay
      setTimeout(() => {
        setLoadingLinks(prev => ({ ...prev, [projectTitle]: false }));
      }, 1000);
    }, 100);
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

  return (
    <section id="projects" className="py-20 terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="space-y-12">
          <div className="text-center">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
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
                        <button
                          onClick={() => handleLinkClick(project.github, project.title)}
                          disabled={loadingLinks[project.title]}
                          className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-all duration-300 font-mono text-xs sm:text-sm neon-border px-3 sm:px-4 py-2 sm:py-3 rounded cursor-pointer bg-black/20 hover:bg-black/40 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                          title={`Click to open ${project.title} repository`}
                        >
                          <Github size={16} className="sm:w-5 sm:h-5" />
                          <span className="font-semibold">
                            {loadingLinks[project.title] ? 'Opening...' : 'git clone'}
                          </span>
                        </button>
                        <button
                          onClick={() => handleLinkClick(project.github, project.title)}
                          disabled={loadingLinks[project.title]}
                          className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-all duration-300 font-mono text-xs px-2 py-2 rounded cursor-pointer bg-green-900/20 hover:bg-green-900/40 border border-green-500/50 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                          title={`Backup: Click to open ${project.title} repository`}
                        >
                          <span className="text-xs">
                            {loadingLinks[project.title] ? '⏳' : '🔗'}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://github.com/VaibhaviSugandhi1733"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-400 text-black rounded font-semibold neon-border transition-all duration-300 font-mono"
            >
              <Terminal size={20} />
              <span>cd ~/github && ls -la</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;