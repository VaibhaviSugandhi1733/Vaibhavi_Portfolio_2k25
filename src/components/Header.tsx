import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loadingLinks, setLoadingLinks] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (url: string, linkType: string) => {
    setLoadingLinks(prev => ({ ...prev, [linkType]: true }));
    
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setTimeout(() => {
        setLoadingLinks(prev => ({ ...prev, [linkType]: false }));
      }, 1000);
    }, 100);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'terminal-glass shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 rounded bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center neon-border">
              <Terminal className="text-black" size={16} />
            </div>
            <span className="text-xl font-bold gradient-text font-mono">~/vaibhavi</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-green-300 hover:text-green-400 transition-colors duration-200 font-mono command-prompt"
              >
                {item.name.toLowerCase()}
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={() => handleLinkClick('https://github.com/VaibhaviSugandhi1733', 'header-github')}
              disabled={loadingLinks['header-github']}
              whileHover={{ scale: 1.1 }}
              className="text-green-300 hover:text-green-400 transition-colors duration-200 glow-effect p-2 rounded disabled:opacity-50"
              title={loadingLinks['header-github'] ? 'Opening GitHub...' : 'Visit GitHub Profile'}
            >
              <Github size={20} />
            </motion.button>
            <motion.button
              onClick={() => handleLinkClick('https://linkedin.com/in/vaibhavi-sugandhi', 'header-linkedin')}
              disabled={loadingLinks['header-linkedin']}
              whileHover={{ scale: 1.1 }}
              className="text-green-300 hover:text-green-400 transition-colors duration-200 glow-effect p-2 rounded disabled:opacity-50"
              title={loadingLinks['header-linkedin'] ? 'Opening LinkedIn...' : 'Visit LinkedIn Profile'}
            >
              <Linkedin size={20} />
            </motion.button>
            <motion.button
              onClick={() => handleLinkClick('mailto:vaibhavi.sugandhi@email.com', 'header-email')}
              disabled={loadingLinks['header-email']}
              whileHover={{ scale: 1.1 }}
              className="text-green-300 hover:text-green-400 transition-colors duration-200 glow-effect p-2 rounded disabled:opacity-50"
              title={loadingLinks['header-email'] ? 'Opening email client...' : 'Send Email'}
            >
              <Mail size={20} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-300 hover:text-green-400 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden terminal-window mt-2 p-4"
          >
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-green-400 text-sm font-mono">mobile-nav</span>
            </div>
            <nav className="flex flex-col space-y-3 p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-green-300 hover:text-green-400 transition-colors duration-200 font-mono command-prompt py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name.toLowerCase()}
                </a>
              ))}
              <div className="flex space-x-4 pt-3 border-t border-green-500/30">
                <button
                  onClick={() => handleLinkClick('https://github.com/VaibhaviSugandhi1733', 'mobile-github')}
                  disabled={loadingLinks['mobile-github']}
                  className="text-green-300 hover:text-green-400 transition-colors duration-200 disabled:opacity-50"
                  title={loadingLinks['mobile-github'] ? 'Opening GitHub...' : 'Visit GitHub Profile'}
                >
                  <Github size={20} />
                </button>
                <button
                  onClick={() => handleLinkClick('https://linkedin.com/in/vaibhavi-sugandhi', 'mobile-linkedin')}
                  disabled={loadingLinks['mobile-linkedin']}
                  className="text-green-300 hover:text-green-400 transition-colors duration-200 disabled:opacity-50"
                  title={loadingLinks['mobile-linkedin'] ? 'Opening LinkedIn...' : 'Visit LinkedIn Profile'}
                >
                  <Linkedin size={20} />
                </button>
                <button
                  onClick={() => handleLinkClick('mailto:vaibhavi.sugandhi@email.com', 'mobile-email')}
                  disabled={loadingLinks['mobile-email']}
                  className="text-green-300 hover:text-green-400 transition-colors duration-200 disabled:opacity-50"
                  title={loadingLinks['mobile-email'] ? 'Opening email client...' : 'Send Email'}
                >
                  <Mail size={20} />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;