import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone, Terminal } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loadingLinks, setLoadingLinks] = useState<{ [key: string]: boolean }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLinkClick = (url: string, linkType: string) => {
    setLoadingLinks(prev => ({ ...prev, [linkType]: true }));
    
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setTimeout(() => {
        setLoadingLinks(prev => ({ ...prev, [linkType]: false }));
      }, 1000);
    }, 100);
  };

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
    <section id="contact" className="py-20 terminal-bg">
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
                <span className="text-green-400 text-sm font-mono">contact.sh</span>
              </div>
              <div className="p-6 text-left">
                <div className="command-line mb-4">
                  <span className="text-green-400">$</span> ./initiate_connection.sh
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## Get In Touch
                </h2>
                <p className="text-green-200 font-mono">
                  # Always open to discussing DevOps, cloud technologies, and collaboration opportunities
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">connection_info.txt</span>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-green-300 font-mono">
                    # Let's Connect
                  </h3>
                  <p className="text-green-200 leading-relaxed font-mono text-sm">
                    Whether you're looking to collaborate on a project, need DevOps consultation, 
                    or want to discuss the latest in cloud technologies, I'd love to hear from you.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <motion.button
                  onClick={() => handleLinkClick('mailto:vaibhavi.sugandhi@email.com', 'email')}
                  disabled={loadingLinks['email']}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" }}
                  className="flex items-center space-x-4 p-4 terminal-glass rounded neon-border transition-all duration-300 w-full text-left disabled:opacity-50"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded flex items-center justify-center">
                    <Mail className="text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 font-mono">$ mail</h4>
                    <p className="text-green-200 font-mono text-sm">
                      {loadingLinks['email'] ? 'Opening email client...' : 'vaibhavi.sugandhi@email.com'}
                    </p>
                  </div>
                </motion.button>

                <motion.button
                  onClick={() => handleLinkClick('https://github.com/VaibhaviSugandhi1733', 'github')}
                  disabled={loadingLinks['github']}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" }}
                  className="flex items-center space-x-4 p-4 terminal-glass rounded neon-border transition-all duration-300 w-full text-left disabled:opacity-50"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded flex items-center justify-center">
                    <Github className="text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 font-mono">$ git remote</h4>
                    <p className="text-green-200 font-mono text-sm">
                      {loadingLinks['github'] ? 'Opening GitHub...' : '@VaibhaviSugandhi1733'}
                    </p>
                  </div>
                </motion.button>

                <motion.button
                  onClick={() => handleLinkClick('https://linkedin.com/in/vaibhavi-sugandhi', 'linkedin')}
                  disabled={loadingLinks['linkedin']}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" }}
                  className="flex items-center space-x-4 p-4 terminal-glass rounded neon-border transition-all duration-300 w-full text-left disabled:opacity-50"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded flex items-center justify-center">
                    <Linkedin className="text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 font-mono">$ ssh linkedin</h4>
                    <p className="text-green-200 font-mono text-sm">
                      {loadingLinks['linkedin'] ? 'Opening LinkedIn...' : 'Vaibhavi Sugandhi'}
                    </p>
                  </div>
                </motion.button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">message_form.py</span>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-green-300 mb-2 font-mono">
                      # Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 terminal-input rounded font-mono transition-all duration-300"
                      placeholder="Enter your name..."
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-green-300 mb-2 font-mono">
                      # Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 terminal-input rounded font-mono transition-all duration-300"
                      placeholder="your.email@domain.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-green-300 mb-2 font-mono">
                      # Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 terminal-input rounded font-mono transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full min-w-0 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-400 text-black rounded font-semibold neon-border transition-all duration-300 flex items-center justify-center space-x-2 font-mono text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                  >
                    <Send size={20} />
                    <span className="truncate">./send_message.sh</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="terminal-window max-w-2xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-green-400 text-sm font-mono">footer.sh</span>
            </div>
            <div className="p-6 text-center space-y-2">
              <div className="command-line">
                <span className="text-green-400">$</span> echo "© 2024 Vaibhavi Sugandhi"
              </div>
              <p className="text-green-200 font-mono text-sm">
                Built with React & Tailwind CSS
              </p>
              <div className="command-line">
                <span className="text-green-400">$</span> echo "Designed with ❤️ for the DevOps community"
              </div>
              <div className="command-line mt-4">
                <span className="text-green-400">$</span> echo "Thank you for visiting! Let's connect and build something awesome."
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;