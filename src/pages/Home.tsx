import { useState } from "react";
import { 
  Database, Zap, Shield, Globe, 
  Cpu, Layers, GitBranch, ArrowRight,
  Download, Star, Box, BookOpen
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TerminalDemo, CopySnippet } from "@/components/TerminalDemo";
import { FeatureCard } from "@/components/FeatureCard";
import { DocsSidebar } from "@/components/DocsSidebar";

export default function Home() {
  const [docsOpen, setDocsOpen] = useState(false);

  const handleDocsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDocsOpen(true);
  };

function updateYear() {
  return new Date().getFullYear();
}

  return (
    <div className="min-h-screen bg-background font-mono selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border h-16 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="w-4 h-4 bg-primary" />
          <span>CREATE-NODE-ADVANCE</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="hover:text-primary transition-colors duration-300">FEATURES</a>
          <a href="#docs" onClick={handleDocsClick} className="hover:text-primary transition-colors duration-300 flex items-center gap-2">
            DOCS
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://github.com/ashishpathak2/create-node-advance-app" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 text-sm hover:text-primary">
            <GitBranch className="w-4 h-4" />
            <span className="hidden lg:inline">v2.1.0</span>
          </a>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 border-b border-border overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="absolute inset-0 bg-grid" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary border border-border text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              PACKAGE ONLINE
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9]">
              NODE.JS BACKEND <br />
              <span className="text-primary">IN SECONDS</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Production-ready Express.js backend generator with TypeScript, database, authentication, and Docker support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-1/2">
              <div className="flex-1">
                <CopySnippet code="npm install -g create-node-advance-app" />
              </div>
              <button
                onClick={() => setDocsOpen(true)}
                className="group px-6 py-3 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
              >
                Quick Start
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs">
              <a 
                href="https://www.npmjs.com/package/create-node-advance-app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <Box className="w-4 h-4" />
                <span>VIEW ON NPM</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
    
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="w-4 h-4" />
                <span>MIT LICENSE</span>
              </div>
            </div>
          </div>

         <div className="relative">
  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-50 -z-10 hidden lg:block"></div>
  <div className="absolute -inset-4 border border-primary/20 -z-10 translate-x-4 translate-y-4 hidden lg:block"></div>

  {/* Cycling logo strip above terminal */}
  <div className="absolute py-1 -top-10 left-0 right-0 z-0 overflow-hidden h-10">
    <div className="flex w-max gap-2 items-center animate-scroll hover:[animation-play-state:paused]">
      {[
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", rotate: "-4deg", tint: "59,130,246" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", rotate: "4deg", tint: "234,179,8" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express.js", rotate: "-5deg", tint: "156,163,175", invert: true },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", rotate: "3deg", tint: "34,197,94" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", alt: "MySQL", rotate: "-6deg", tint: "14,165,233" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", rotate: "5deg", tint: "99,102,241" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker", rotate: "-3deg", tint: "56,189,248" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg", alt: "Sequelize", rotate: "6deg", tint: "79,70,229" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg", alt: "Mongoose", rotate: "-5deg", tint: "239,68,68" },
        { src: "https://zod.dev/logo.svg", alt: "Zod", rotate: "4deg", tint: "96,165,250" },
        { src: "https://jwt.io/img/pic_logo.svg", alt: "JWT", rotate: "-4deg", tint: "168,85,247" },
        // duplicate set for seamless loop
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", rotate: "3deg", tint: "59,130,246" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", rotate: "-5deg", tint: "234,179,8" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express.js", rotate: "6deg", tint: "156,163,175", invert: true },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", rotate: "-3deg", tint: "34,197,94" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", alt: "MySQL", rotate: "5deg", tint: "14,165,233" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", rotate: "-6deg", tint: "99,102,241" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker", rotate: "4deg", tint: "56,189,248" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg", alt: "Sequelize", rotate: "-7deg", tint: "79,70,229" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg", alt: "Mongoose", rotate: "3deg", tint: "239,68,68" },
        { src: "https://zod.dev/logo.svg", alt: "Zod", rotate: "-5deg", tint: "96,165,250" },
        { src: "https://jwt.io/img/pic_logo.svg", alt: "JWT", rotate: "5deg", tint: "168,85,247" },
      ].map((logo, i) => (
        <div
          key={i}
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            transform: `rotate(${logo.rotate})`,
            background: `linear-gradient(135deg, rgba(${logo.tint},0.18) 0%, rgba(255,255,255,0.05) 50%, rgba(${logo.tint},0.08) 100%)`,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: `0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.25), 0 0 0 1px rgba(${logo.tint},0.25)`,
          }}
          title={logo.alt}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className={`w-5 h-5 object-contain drop-shadow-sm ${logo.invert ? "invert opacity-80" : ""}`}
            onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = "none"; }}
          />
        </div>
      ))}
    </div>
  </div>

  {/* Terminal on top */}
  <div className="relative z-10">
    <TerminalDemo />
  </div>
</div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-3xl font-bold tracking-tight">CORE_MODULES</h2>
            <p className="text-sm text-muted-foreground hidden sm:block">/// ARCHITECTURE_OVERVIEW</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />}
              title="Zero Configuration"
              description="Works out of the box with interactive CLI prompts. From zero to running API in under 2 minutes."
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6" />}
              title="TypeScript & JavaScript"
              description="Choose your preferred language during setup. Full type safety with TypeScript or flexible JavaScript."
            />
            <FeatureCard 
              icon={<Database className="w-6 h-6" />}
              title="Multiple Databases"
              description="Support for MongoDB, PostgreSQL, and MySQL. Choose what fits your needs best."
            />
            <FeatureCard 
              icon={<Globe className="w-6 h-6" />}
              title="JWT Authentication"
              description="Ready-to-use authentication system with JWT tokens. Secure by default."
            />
            <FeatureCard 
              icon={<Cpu className="w-6 h-6" />}
              title="Request Validation"
              description="Built-in Zod or Joi validation. Type-safe request/response handling."
            />
            <FeatureCard 
              icon={<Layers className="w-6 h-6" />}
              title="Docker Ready"
              description="Docker and docker-compose included. Deploy anywhere with ease."
            />
          </div>
        </div>
      </section>


      {/* Quick Start Flow */}
      <section className="py-24 px-6 lg:px-12 border-b border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-16">INITIALIZATION_SEQUENCE</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="text-6xl font-bold text-border opacity-50 mb-4">01</div>
              <h3 className="text-xl font-bold mb-2">INSTALL CLI</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Global installation via npm. Requires Node.js 14+ and npm.
              </p>
              <code className="block bg-black text-white p-3 text-xs rounded-lg">npm install -g create-node-advance-app</code>
              <ArrowRight className="hidden md:block absolute top-1/2 -right-6 text-border w-6 h-6" />
            </div>

            <div className="relative">
              <div className="text-6xl font-bold text-border opacity-50 mb-4">02</div>
              <h3 className="text-xl font-bold mb-2">CREATE PROJECT</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Generate your project with interactive prompts for customization.
              </p>
              <code className="block bg-black text-white p-3 text-xs rounded-lg">create-node-advance-app my-api</code>
              <ArrowRight className="hidden md:block absolute top-1/2 -right-6 text-border w-6 h-6" />
            </div>

            <div>
              <div className="text-6xl font-bold text-border opacity-50 mb-4">03</div>
              <h3 className="text-xl font-bold mb-2">START SERVER</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Install dependencies and start your development server.
              </p>
              <code className="block bg-black text-white p-3 text-xs rounded-lg">npm install && npm run dev</code>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Features Showcase */}
      <section className="py-24 px-6 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              PRODUCTION <span className="text-primary">ARCHITECTURE</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with best practices and industry standards. Everything you need to ship fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* MVC Pattern */}
            <div className="group p-6 border border-border rounded-xl hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 bg-gradient-to-br from-blue-500/5 to-transparent">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">MVC Pattern</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Organized folder structure with routes, controllers, services, and models separation.
              </p>
            </div>

            {/* Interactive CLI */}
            <div className="group p-6 border border-border rounded-xl hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 bg-gradient-to-br from-purple-500/5 to-transparent">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Interactive CLI</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Beautiful prompts guide you through setup. Choose database, auth, validation, and more.
              </p>
            </div>

            {/* Logging System */}
            <div className="group p-6 border border-border rounded-xl hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 bg-gradient-to-br from-green-500/5 to-transparent">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Production Logging</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Winston or Pino logger with emoji-based readable output. Perfect for debugging.
              </p>
            </div>

            {/* Documentation */}
            <div className="group p-6 border border-border rounded-xl hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 bg-gradient-to-br from-pink-500/5 to-transparent">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Comprehensive Docs</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Info files in every folder with examples. Real-world usage patterns included.
              </p>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 border border-border rounded-xl bg-secondary/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Security First</h4>
                  <p className="text-sm text-muted-foreground">Helmet, CORS, and rate limiting pre-configured.</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-xl bg-secondary/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Error Handling</h4>
                  <p className="text-sm text-muted-foreground">Centralized error management with custom AppError class.</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-xl bg-secondary/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Migration Support</h4>
                  <p className="text-sm text-muted-foreground">Database migrations with Sequelize. Version control for your DB.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="https://www.npmjs.com/package/create-node-advance-app"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Install Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <button
              onClick={() => setDocsOpen(true)}
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Read Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 lg:px-12 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <div className="font-bold flex items-center gap-2">
              <div className="w-3 h-3 bg-foreground" />
              CREATE-NODE-ADVANCE-APP
            </div>
            <p className="text-muted-foreground">© {updateYear()} Open Source.</p>
          </div>
          
          <div className="flex gap-8 text-muted-foreground">
            <a href="https://www.npmjs.com/package/create-node-advance-app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">NPM</a>
            <a href="https://github.com/ashishpathak2/create-node-advance-app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GITHUB</a>
            <a href="#" onClick={handleDocsClick} className="hover:text-primary transition-colors">DOCS</a>
          </div>
        </div>
      </footer>

      {/* Documentation Sidebar */}
      <DocsSidebar isOpen={docsOpen} onClose={() => setDocsOpen(false)} />
    </div>
  );
}
