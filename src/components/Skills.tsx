import React from 'react';
import { 
  Terminal, 
  Globe, 
  Code, 
  GitBranch, 
  Cloud, 
  Settings, 
  Workflow, 
  Container,
  Cpu,
  Database
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      category: "OS",
      icon: <Terminal className="text-green-400" size={24} />,
      skills: [
        { name: "Linux", level: 85, command: "uname -a" }
      ]
    },
    {
      category: "Languages",
      icon: <Code className="text-green-300" size={24} />,
      skills: [
        { name: "Python", level: 80, command: "python3 --version" },
        { name: "Bash", level: 75, command: "bash --version" }
      ]
    },
    {
      category: "Frontend",
      icon: <Globe className="text-green-500" size={24} />,
      skills: [
        { name: "HTML", level: 85, command: "<!DOCTYPE html>" },
        { name: "CSS", level: 80, command: "body { color: #22c55e; }" },
        { name: "JavaScript", level: 75, command: "console.log('Hello');" }
      ]
    },
    {
      category: "Version Control",
      icon: <GitBranch className="text-green-400" size={24} />,
      skills: [
        { name: "Git", level: 85, command: "git status" },
        { name: "GitHub", level: 80, command: "gh repo list" }
      ]
    },
    {
      category: "Cloud",
      icon: <Cloud className="text-green-300" size={24} />,
      skills: [
        { name: "AWS", level: 70, command: "aws s3 ls" }
      ]
    },
    {
      category: "Config Mgmt",
      icon: <Settings className="text-green-500" size={24} />,
      skills: [
        { name: "Ansible", level: 75, command: "ansible-playbook deploy.yml" }
      ]
    },
    {
      category: "CI/CD",
      icon: <Workflow className="text-green-400" size={24} />,
      skills: [
        { name: "Jenkins", level: 70, command: "jenkins --version" },
        { name: "Argo CD", level: 65, command: "argocd app list" }
      ]
    },
    {
      category: "Containers",
      icon: <Container className="text-green-300" size={24} />,
      skills: [
        { name: "Docker", level: 80, command: "docker ps -a" }
      ]
    },
    {
      category: "Orchestration",
      icon: <Cpu className="text-green-500" size={24} />,
      skills: [
        { name: "Kubernetes", level: 70, command: "kubectl get pods" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 terminal-bg">
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
                <span className="text-green-400 text-sm font-mono">skills.sh</span>
              </div>
              <div className="p-6 text-left">
                <div className="command-line mb-4">
                  <span className="text-green-400">$</span> ./list_skills.sh --verbose
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## Technical Arsenal
                </h2>
                <p className="text-green-200 font-mono">
                  # Comprehensive toolkit for modern DevOps practices
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="skill-card terminal-window"
              >
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">{category.category.toLowerCase()}.conf</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <h3 className="font-semibold text-green-300 text-lg font-mono">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-green-200 font-mono">
                            {skill.name}
                          </span>
                          <span className="text-sm text-green-400 font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2 neon-border">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            className="progress-bar h-2 rounded-full"
                            style={{ '--progress': `${skill.level}%` } as any}
                          />
                        </div>
                        <div className="text-xs text-green-400 font-mono bg-black/50 p-2 rounded">
                          $ {skill.command}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="terminal-window max-w-2xl mx-auto">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-green-400 text-sm font-mono">learning_path.log</span>
              </div>
              <div className="p-6 text-left space-y-2 font-mono text-sm">
                <div className="text-green-400"># Continuous Learning Pipeline</div>
                <div className="text-green-200">while true; do</div>
                <div className="text-green-200 ml-4">learn_new_technology()</div>
                <div className="text-green-200 ml-4">practice_hands_on()</div>
                <div className="text-green-200 ml-4">contribute_to_community()</div>
                <div className="text-green-200">done</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;