import { useState, useEffect } from "react";
import { X, Copy, Check } from "lucide-react";

interface DocsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DOCS_SECTIONS = [
  { id: "intro", title: "Introduction", content: "introduction" },
  { id: "installation", title: "Installation", content: "installation" },
  { id: "quickstart", title: "Quick Start", content: "quickstart" },
  { id: "usage", title: "Usage", content: "usage" },
  { id: "configuration", title: "Configuration", content: "configuration" },
  { id: "cli", title: "CLI Commands", content: "cli" },
  { id: "examples", title: "Examples", content: "examples" },
];

function CodeBlock({ code, language: _language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white/70 hover:text-white transition-all duration-200"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="bg-black text-white p-4 rounded-xl overflow-x-auto text-sm font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function DocsSidebar({ isOpen, onClose }: DocsSidebarProps) {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const renderContent = () => {
    switch (activeSection) {
      case "intro":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Create-Node-Advance-App is a production-ready Node.js backend generator that helps you build Express.js APIs in seconds with TypeScript support, multiple database options, and authentication out of the box.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Features an interactive CLI with beautiful prompts, comprehensive documentation in every folder, and follows industry best practices with MVC architecture.
              </p>
            </div>
            <div className="p-4 bg-secondary/50 border border-border rounded-xl">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Key Features
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Zero configuration - works out of the box</li>
                <li>• TypeScript & JavaScript support</li>
                <li>• MongoDB, PostgreSQL, MySQL databases</li>
                <li>• JWT authentication ready</li>
                <li>• Zod or Joi validation</li>
                <li>• Winston/Pino logging</li>
                <li>• Docker & docker-compose included</li>
                <li>• Helmet & CORS pre-configured</li>
              </ul>
            </div>
          </div>
        );
      case "installation":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Installation</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Install the CLI tool globally or use npx to create projects without installation.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Global Installation (Recommended)</h3>
              <CodeBlock code="npm install -g create-node-advance-app" />
            </div>
            <div>
              <h3 className="font-bold mb-3">Using npx (No Installation)</h3>
              <CodeBlock code="npx create-node-advance-app my-api" />
            </div>
            <div>
              <h3 className="font-bold mb-3">Using yarn</h3>
              <CodeBlock code="yarn create node-advance-app my-api" />
            </div>
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
              <h3 className="font-bold mb-2 text-yellow-500">Requirements</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Node.js 14.0.0 or higher</li>
                <li>• npm or yarn package manager</li>
              </ul>
            </div>
          </div>
        );
      case "quickstart":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From zero to running API in under 2 minutes. The CLI will guide you through setup.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                  <h3 className="font-bold">Install the CLI globally</h3>
                </div>
                <CodeBlock code="npm install -g create-node-advance-app" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
                  <h3 className="font-bold">Create your project</h3>
                </div>
                <CodeBlock code="create-node-advance-app my-api" />
                <p className="text-xs text-muted-foreground mt-2 ml-11">
                  The CLI will ask you to choose: Language (TS/JS), Database (MongoDB/PostgreSQL/MySQL), Auth (JWT), Validation (Zod/Joi), Logger (Winston/Pino), and Docker setup.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
                  <h3 className="font-bold">Navigate & install dependencies</h3>
                </div>
                <CodeBlock code="cd my-api && npm install" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">4</div>
                  <h3 className="font-bold">Start development server</h3>
                </div>
                <CodeBlock code="npm run dev" />
              </div>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <h3 className="font-bold mb-2 text-green-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Server Running
              </h3>
              <p className="text-sm text-muted-foreground">
                Your API is now running at <code className="text-foreground">http://localhost:5000</code>
              </p>
            </div>
          </div>
        );
      case "usage":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Usage</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Learn how to structure your API and create endpoints.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Creating a Route</h3>
              <CodeBlock 
                code={`import { Router } from 'express';
import { z } from 'zod';

const router = Router();

// Define schema
const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

// Create endpoint
router.post('/users', async (req, res) => {
  const data = UserSchema.parse(req.body);
  // Your logic here
  res.json({ success: true });
});

export default router;`}
                language="typescript"
              />
            </div>
            <div>
              <h3 className="font-bold mb-3">Database Operations</h3>
              <CodeBlock 
                code={`import { db } from '@/lib/db';
import { users } from '@/schema';

// Insert user
const newUser = await db
  .insert(users)
  .values({ name: 'John', email: 'john@example.com' })
  .returning();

// Query users
const allUsers = await db.select().from(users);`}
                language="typescript"
              />
            </div>
          </div>
        );
      case "configuration":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Configuration</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Configure your app using environment variables. A .env.example file is included in your project.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Environment Variables</h3>
              <CodeBlock 
                code={`# .env file
PORT=5000
NODE_ENV=development

# Database Configuration
DATABASE_URL=mongodb://localhost:27017/myapp
# OR for PostgreSQL
DATABASE_URL=postgresql://user:password@localhost:5432/myapp

# JWT Secret (for authentication)
JWT_SECRET=your-super-secret-key-change-this

# Other optional configs
LOG_LEVEL=info
CORS_ORIGIN=http://localhost:3000`}
                language="bash"
              />
            </div>
            <div>
              <h3 className="font-bold mb-3">Type-Safe Config</h3>
              <CodeBlock 
                code={`// src/config/env.ts
export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '7d',
  },
};`}
                language="typescript"
              />
            </div>
          </div>
        );
      case "cli":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">CLI Commands</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Available commands for managing your project.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-xl">
                <code className="text-primary font-bold">robot init</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Initialize a new project with interactive prompts
                </p>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <code className="text-primary font-bold">robot generate</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Generate boilerplate code (models, routes, controllers)
                </p>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <code className="text-primary font-bold">robot migrate</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Run database migrations
                </p>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <code className="text-primary font-bold">robot deploy</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Deploy to production with optimized build
                </p>
              </div>
            </div>
          </div>
        );
      case "examples":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Examples</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Real-world examples to get you started quickly.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Authentication Endpoint</h3>
              <CodeBlock 
                code={`router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });
  
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  res.json({ token, user });
});`}
                language="typescript"
              />
            </div>
            <div>
              <h3 className="font-bold mb-3">CRUD Operations</h3>
              <CodeBlock 
                code={`// Get all items
router.get('/items', async (req, res) => {
  const items = await db.select().from(items);
  res.json(items);
});

// Create item
router.post('/items', async (req, res) => {
  const item = await db.insert(items).values(req.body).returning();
  res.json(item[0]);
});

// Update item
router.patch('/items/:id', async (req, res) => {
  const item = await db.update(items)
    .set(req.body)
    .where(eq(items.id, req.params.id))
    .returning();
  res.json(item[0]);
});

// Delete item
router.delete('/items/:id', async (req, res) => {
  await db.delete(items).where(eq(items.id, req.params.id));
  res.json({ success: true });
});`}
                language="typescript"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-[800px] lg:w-[900px] bg-background border-l border-border z-50 flex transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Left Navigation */}
        <div className="hidden md:flex w-64 flex-col border-r border-border p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">DOCUMENTATION</h2>
          </div>
          <nav className="space-y-1">
            {DOCS_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-4 md:hidden">
              <select
                value={activeSection}
                onChange={(e) => setActiveSection(e.target.value)}
                className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm font-medium"
              >
                {DOCS_SECTIONS.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden md:block text-sm text-muted-foreground">
              Press <kbd className="px-2 py-1 bg-secondary border border-border rounded text-xs">ESC</kbd> to close
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="max-w-3xl mx-auto">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
