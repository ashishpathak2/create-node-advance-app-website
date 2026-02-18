export function TechStack() {
  const technologies = [
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <path fill="#539E43" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0zm0 240c-61.856 0-112-50.144-112-112S66.144 16 128 16s112 50.144 112 112-50.144 112-112 112z"/>
          <path fill="#539E43" d="M128 48c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm0 144c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64z"/>
        </svg>
      ),
    },
    {
      name: "Express",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <rect fill="#000000" width="256" height="256" rx="28"/>
          <text fill="#FFFFFF" x="128" y="160" fontSize="100" fontWeight="bold" textAnchor="middle" fontFamily="Arial">E</text>
        </svg>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <path fill="#47A248" d="M128 28L44 72v112l84 44 84-44V72z"/>
          <path fill="#3FA037" d="M128 28v200l84-44V72z"/>
          <ellipse fill="#FFFFFF" cx="128" cy="128" rx="40" ry="60"/>
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <path fill="#336791" d="M128 20c-59.647 0-108 48.353-108 108s48.353 108 108 108 108-48.353 108-108S187.647 20 128 20zm0 200c-50.813 0-92-41.187-92-92s41.187-92 92-92 92 41.187 92 92-41.187 92-92 92z"/>
          <circle fill="#336791" cx="128" cy="128" r="50"/>
        </svg>
      ),
    },
    {
      name: "MySQL",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <path fill="#00758F" d="M128 20c-59.647 0-108 48.353-108 108s48.353 108 108 108 108-48.353 108-108S187.647 20 128 20z"/>
          <path fill="#F29111" d="M128 60c-37.555 0-68 30.445-68 68s30.445 68 68 68 68-30.445 68-68-30.445-68-68-68z"/>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <rect fill="#3178C6" width="256" height="256" rx="28"/>
          <path fill="#FFFFFF" d="M128 80h48v16h-16v80h-16V96h-16V80zm-40 0h48v16h-16v80h-16V96H72V80z"/>
        </svg>
      ),
    },
    {
      name: "Docker",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <circle fill="#2496ED" cx="128" cy="128" r="108"/>
          <rect fill="#FFFFFF" x="80" y="100" width="28" height="24" rx="2"/>
          <rect fill="#FFFFFF" x="116" y="100" width="28" height="24" rx="2"/>
          <rect fill="#FFFFFF" x="152" y="100" width="28" height="24" rx="2"/>
          <rect fill="#FFFFFF" x="80" y="132" width="28" height="24" rx="2"/>
          <rect fill="#FFFFFF" x="116" y="132" width="28" height="24" rx="2"/>
          <rect fill="#FFFFFF" x="152" y="132" width="28" height="24" rx="2"/>
        </svg>
      ),
    },
    {
      name: "JWT",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <rect fill="#000000" width="256" height="256" rx="28"/>
          <circle fill="#D63AFF" cx="128" cy="80" r="20"/>
          <circle fill="#D63AFF" cx="128" cy="128" r="20"/>
          <circle fill="#D63AFF" cx="128" cy="176" r="20"/>
        </svg>
      ),
    },
    {
      name: "Zod",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <rect fill="#3B82F6" width="256" height="256" rx="28"/>
          <text fill="#FFFFFF" x="128" y="170" fontSize="120" fontWeight="bold" textAnchor="middle" fontFamily="Arial">Z</text>
        </svg>
      ),
    },
    {
      name: "Winston",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <rect fill="#1E293B" width="256" height="256" rx="28"/>
          <text fill="#10B981" x="128" y="170" fontSize="120" fontWeight="bold" textAnchor="middle" fontFamily="monospace">W</text>
        </svg>
      ),
    },
    {
      name: "Joi",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <rect fill="#F97316" width="256" height="256" rx="28"/>
          <text fill="#FFFFFF" x="128" y="170" fontSize="120" fontWeight="bold" textAnchor="middle" fontFamily="Arial">J</text>
        </svg>
      ),
    },
    {
      name: "Sequelize",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <rect fill="#52B0E7" width="256" height="256" rx="28"/>
          <text fill="#FFFFFF" x="128" y="170" fontSize="100" fontWeight="bold" textAnchor="middle" fontFamily="Arial">S</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">TECHNOLOGY_STACK</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with industry-standard tools and frameworks. Production-ready out of the box.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-5 gap-8 items-center justify-items-center">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative"
              style={{
                animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="relative transition-all duration-300 hover:scale-110">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-4 bg-secondary/50 backdrop-blur-sm border border-border rounded-xl group-hover:border-primary transition-all duration-300">
                  <div className="grayscale group-hover:grayscale-0 transition-all duration-300">
                    {tech.icon}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <span className="text-xs font-medium">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="md:hidden relative">
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="flex-none snap-center"
                style={{
                  animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-4 bg-secondary/50 backdrop-blur-sm border border-border rounded-xl">
                    <div className="grayscale">
                      {tech.icon}
                    </div>
                  </div>
                  <span className="text-xs font-medium">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
