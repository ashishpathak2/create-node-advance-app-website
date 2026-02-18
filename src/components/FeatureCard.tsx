import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div 
      className="group relative p-6 border border-border hover:border-primary bg-card rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="mb-4 text-foreground group-hover:text-primary transition-all duration-300 transform group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2 tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Corner accents that appear on hover */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-bl-xl"></div>
    </div>
  );
}
