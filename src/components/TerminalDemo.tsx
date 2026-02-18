import { useEffect, useState,  } from "react";
import { Copy, Check } from "lucide-react";

const COMMANDS = [
  { cmd: "npm install -g create-node-advance-app", output: "✓ Package installed globally" },
  { cmd: "create-node-advance-app my-api", output: "🚀 Creating your Express.js backend..." },
  { cmd: "cd my-api && npm run dev", output: "✨ Server running at http://localhost:5000" },
];

export function TerminalDemo() {
  const [step, setStep] = useState(0);
  const [text, setText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [completedLines, setCompletedLines] = useState<Array<{cmd: string, output: string}>>([]);
  
  useEffect(() => {
    if (step >= COMMANDS.length) {
      const timeout = setTimeout(() => {
        setStep(0);
        setCompletedLines([]);
        setText("");
        setShowOutput(false);
      }, 5000); // Reset after 5s
      return () => clearTimeout(timeout);
    }

    const currentCommand = COMMANDS[step].cmd;
    
    if (text.length < currentCommand.length) {
      const timeout = setTimeout(() => {
        setText(currentCommand.slice(0, text.length + 1));
      }, 50 + Math.random() * 50); // Typing effect
      return () => clearTimeout(timeout);
    } else if (!showOutput) {
      const timeout = setTimeout(() => {
        setShowOutput(true);
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCompletedLines(prev => [...prev, COMMANDS[step]]);
        setStep(prev => prev + 1);
        setText("");
        setShowOutput(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [step, text, showOutput]);

  return (
    <div className="w-full font-mono text-sm border border-border bg-black text-white p-4 h-[320px] overflow-hidden flex flex-col relative rounded-xl shadow-2xl">
      <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full opacity-50"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-50"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full opacity-50"></div>
        <span className="ml-auto text-xs text-white/40">bash — 80x24</span>
      </div>

      <div className="space-y-2 flex-1 overflow-y-auto">
        {completedLines.map((line, i) => (
          <div key={i} className="space-y-1">
            <div className="flex gap-2">
              <span className="text-green-500">➜</span>
              <span className="text-blue-400">~</span>
              <span>{line.cmd}</span>
            </div>
            <div className="text-white/60 pl-6 pb-2">{line.output}</div>
          </div>
        ))}
        
        {step < COMMANDS.length && (
          <div className="flex gap-2">
            <span className="text-green-500">➜</span>
            <span className="text-blue-400">~</span>
            <span>
              {text}
              <span className="inline-block w-2 h-4 bg-white ml-1 align-middle animate-pulse"></span>
            </span>
          </div>
        )}
        
        {showOutput && step < COMMANDS.length && (
          <div className="text-white/60 pl-6 pb-2">{COMMANDS[step].output}</div>
        )}
      </div>
      
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/10"></div>
    </div>
  );
}

export function CopySnippet({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={onCopy}
      className="group relative flex items-center gap-3 bg-secondary/50 backdrop-blur-sm px-4 py-3 border border-border rounded-xl cursor-pointer hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
    >
      <span className="text-primary font-bold">{">"}</span>
      <code className="flex-1 font-mono text-sm">{code}</code>
      <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
        {copied ? (
          <div className="flex items-center gap-2 text-green-500">
            <Check className="w-4 h-4" />
            <span className="text-xs font-medium">Copied!</span>
          </div>
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
