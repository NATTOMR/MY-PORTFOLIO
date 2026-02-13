import { Button } from "@/components/ui/button";
import { Shield, ExternalLink, Mail, Github, Linkedin, Terminal, Menu, X, Lock, Eye, Database, Code, Globe, Server } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2 text-2xl font-bold font-mono tracking-tighter hover:text-primary transition-colors">
            <Shield className="w-8 h-8 text-primary" />
            <span>CSume</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">
                {link.name}
              </a>
            ))}
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Hire Me
            </Button>
          </div>

          {/* Mobile Nav Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border p-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium font-mono">
              Available for Freelance
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hello I'm <br />
              <span className="text-primary gradient-text">Jason Beaudry</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg">
              Cyber Security Expert specialized in penetration testing and secure infrastructure.
            </p>
            <p className="text-muted-foreground max-w-md">
              I'm ready to protect your data from hacker. Protect your website, server, service, & application against the increasing sophistication of hacker threats.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[150px]">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 min-w-[150px]">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up [animation-delay:200ms]">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl border border-primary/20 box-glow bg-card/50">
              <img 
                src={heroImage}
                alt="Jason Beaudry - Cyber Security Expert" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/4 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute -z-10 bottom-1/4 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Lock className="w-10 h-10 text-primary" />,
      title: "Network Security",
      description: "Securing internal networks from unauthorized access and potential breaches."
    },
    {
      icon: <Eye className="w-10 h-10 text-primary" />,
      title: "Vulnerability Assessment",
      description: "Identifying and quantifying security vulnerabilities in your environment."
    },
    {
      icon: <Database className="w-10 h-10 text-primary" />,
      title: "Database Protection",
      description: "Implementing robust security measures to protect sensitive data storage."
    },
    {
      icon: <Terminal className="w-10 h-10 text-primary" />,
      title: "Penetration Testing",
      description: "Simulating cyber attacks to identify exploitable vulnerabilities."
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Web App Security",
      description: "Protecting web applications from common attacks like SQL injection and XSS."
    },
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: "Server Hardening",
      description: "Securing servers by reducing their surface of vulnerability."
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">My Services</h2>
          <p className="text-muted-foreground">Comprehensive security solutions tailored to protect your digital assets against evolving threats.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 group">
              <div className="mb-6 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/40 transition-colors">
                <Terminal className="w-16 h-16 text-primary animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
              <div className="p-8 h-full flex items-end">
                <div className="font-mono text-sm text-primary-foreground/80">
                  <p>&gt; initializing security protocols...</p>
                  <p>&gt; scanning for vulnerabilities...</p>
                  <p>&gt; system secured.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <h3 className="text-xl text-primary font-medium">Certified Ethical Hacker & Security Analyst</h3>
            <p className="text-muted-foreground">
              With over 8 years of experience in cybersecurity, I specialize in identifying vulnerabilities before malicious actors can exploit them. My approach combines automated tools with manual testing techniques to ensure comprehensive coverage.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <h4 className="font-bold text-2xl text-primary">150+</h4>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-2xl text-primary">50+</h4>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-2xl text-primary">100%</h4>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-2xl text-primary">24/7</h4>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Latest Projects</h2>
            <p className="text-muted-foreground">Recent security audits and implementations.</p>
          </div>
          <Button variant="outline" className="hidden md:flex">View All Projects</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" /> View Case Study
                  </Button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">FinTech Security Audit</h3>
                    <p className="text-sm text-primary mt-1">Banking & Finance</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Complete infrastructure penetration testing and security hardening for a major fintech startup.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Let's Secure Your Digital Assets</h2>
              <p className="text-muted-foreground">
                Ready to enhance your cybersecurity posture? Reach out for a consultation or security assessment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Me</p>
                  <p className="font-medium">contact@jasonbeaudry.sec</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/jasonbeaudry</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium">github.com/jasonbeaudry</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6 p-8 rounded-2xl bg-card border border-border box-glow">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <input className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <input className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all min-h-[120px]" placeholder="How can I help you?" />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      
      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2024 CSume. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
