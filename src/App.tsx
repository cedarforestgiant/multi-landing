import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, TerminalSquare, Zap, Layers, Settings2, ShieldCheck, GitBranch, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Multi — Landing Page Skeleton (revised)
 * - Adjusted outline button text color for better contrast.
 * - Palette: #0B0C10 (bg), #3B82F6 (accent), #9CA3AF (muted), #F9FAFB (text), #10B981 (alt)
 * - Fonts: Inter (body), JetBrains Mono (code/subhead)
 */

const accent = "#3B82F6";
const bg = "#0B0C10";

const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({ id, className, children }) => (
  <section id={id} className={`max-w-7xl mx-auto px-5 sm:px-8 ${className || ""}`}>{children}</section>
);

const Badge: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <span className={`inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide text-white/70 ${className || ""}`}>{children}</span>
);

const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <div className={`rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] ${className || ""}`}>{children}</div>
);

const CodeBlock: React.FC<{ lines: string[] }> = ({ lines }) => (
  <pre className="rounded-xl border border-white/10 bg-black/60 p-4 text-[13px] leading-relaxed text-white/90 overflow-x-hidden font-mono">
    {lines.map((l, i) => (
      <div key={i} className="whitespace-pre-wrap break-words">
        <span className="select-none text-white/30">$ </span>
        {l}
      </div>
    ))}
  </pre>
);

export default function MultiLanding() {
  return (
    <main className="min-h-screen w-full text-white" style={{ backgroundColor: bg }}>
      {/* Hero */}
      <Section id="hero" className="pt-16 sm:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge>Multi Agent · Multi Instruction · Multi Model</Badge>
              <img src="/logo.svg" alt="Multi Logo" className="h-20 w-auto mt-6 mb-6" />
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight">
              Ship faster <span className="text-white/70">with</span> <span style={{ color: accent }}>precision</span>.
            </h1>
            <p className="mt-5 text-white/80 max-w-xl">
              A smart coding agent that understands your intent and executes with speed and control—inside a developer‑native UI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button className="h-11 rounded-xl px-5 text-base font-medium" style={{ backgroundColor: accent }}>
                Install Multi <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-11 rounded-xl px-5 text-base font-medium border-white/20" style={{ color: '#6B7280' }}>
                <Github className="mr-2 h-4 w-4" /> Read the Docs
              </Button>
            </div>
            <div className="mt-6 text-sm text-white/60">Works with VS Code · JetBrains</div>
          </motion.div>

         <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <Card className="p-5 flex justify-center items-center">
              <img
                src="/skeleton.svg"
                alt="Product UI placeholder"
                className="w-full h-auto rounded-lg"
              />
            </Card>
          </motion.div>

        </div>
      </Section>

      {/* Why Multi */}
      <Section id="why" className="py-10 sm:py-14">
        <div className="grid md:grid-cols-3 gap-5">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3 text-white/80">
              <Settings2 className="h-5 w-5" />
              <h3 className="font-semibold">Smart</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Handles multi‑instruction prompts in one pass. No mode toggles. Understands what you want done, fast.
            </p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3 text-white/80">
              <Zap className="h-5 w-5" />
              <h3 className="font-semibold">Fast</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Low‑latency loop with instant plans and diffs. Minimal UI friction to keep you in flow.
            // rephrase!
            </p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3 text-white/80">
              <Layers className="h-5 w-5" />
              <h3 className="font-semibold">Accurate</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              We'll look into MCP.
            </p>
          </Card>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" className="py-10 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">How it works</h2>
            <ol className="list-decimal pl-5 space-y-3 text-white/80">
              <li>
                <span className="font-medium text-white">Instruct</span> — Describe what you want done.
              </li>
              <li>
                <span className="font-medium text-white">Preview</span> — Plan and diffs appear instantly.
              </li>
              <li>
                <span className="font-medium text-white">Execute</span> — Run multiple tasks at once, fork when needed, roll back anytime.
              </li>
            </ol>
          </div>
          <Card className="p-6">
            <CodeBlock
              lines={[
                'multi plan "migrate users to /v2; add rate limit; write tests"',
                '> plan ready (3 tasks)',
                '> tasks started',
                '> snapshot saved — rollback available',
              ]}
            />
          </Card>
        </div>
      </Section>

      {/* Capabilities */}
      <Section id="capabilities" className="py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Key capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: <Workflow className="h-5 w-5" />, title: "Multi agent", body: "Agent selects the best instruction for your task." },  
            { icon: <Layers className="h-5 w-5" />, title: "Parallel execution", body: "Run tool calls in parallel for fast results." }, // Tone (refer to branding guideline)
            { icon: <GitBranch className="h-5 w-5" />, title: "Branching ideas", body: "Fork the conversation and compare without leaving the workspace." },
            { icon: <ShieldCheck className="h-5 w-5" />, title: "Snapshots & rollback", body: "Apply changes safely, recover instantly." }, // need more details
            { icon: <Settings2 className="h-5 w-5" />, title: "Multi‑window / multi‑model", body: "Work across contexts in one surface." }, 
            { icon: <TerminalSquare className="h-5 w-5" />, title: "Bring your model", body: "Avoid lock‑in." }, 
          ].map((f, i) => (
            <Card key={i} className="p-5">
              <div className="flex items-center gap-3 mb-2 text-white/80">
                {f.icon}
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{f.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Dev‑native UI */}
      <Section id="ui" className="py-10 sm:py-16">
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Developer‑native UI</h2>
              <p className="text-white/80 max-w-prose">
                Minimal. Keyboard‑first. No mode exposure. Plans, diffs, logs, and status live in a compact layout designed for flow.
              </p>
            </div>
            <div className="font-mono text-sm text-white/80">
              <div className="rounded-lg border border-white/10 p-4">
                <div className="mb-2 text-white/60">Workspace</div>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between"><span>planner</span><span className="text-white/60">ready</span></li>
                  <li className="flex items-center justify-between"><span>executor</span><span className="text-white/60">running ×3</span></li>
                  <li className="flex items-center justify-between"><span>forks</span><span className="text-white/60">2 open</span></li>
                  <li className="flex items-center justify-between"><span>snapshots</span><span className="text-white/60">enabled</span></li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Reliability */}
      <Section id="reliability" className="py-10 sm:py-16">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Reliability</h2>
            <p className="text-white/80 max-w-prose">
              Fault‑tolerant by default. Fewer crashes, smoother long runs, and clean history with traceable, reversible changes.
            // smarter
            </p>
          </div>
          <Card className="p-6">
            <ul className="space-y-3 text-white/80">
              <li>• Recovers from failure without corrupting your repo</li>
              <li>• Automatic snapshots and rollback</li>
              <li>• No more worktrees; safer than direct writes</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA Band */}
      <Section id="cta" className="py-14">
        <Card className="p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold">Ready to ship faster?</h3>
          <p className="mt-2 text-white/80">Smarter intent. Faster execution. Run tasks in parallel when you need it.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button className="h-11 rounded-xl px-5 text-base font-medium" style={{ backgroundColor: accent }}>
              Install Multi <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-11 rounded-xl px-5 text-base font-medium border-white/20" style={{ color: '#6B7280' }}>
              Read the Docs
            </Button>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <Section className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">© {new Date().getFullYear()} Multi</div>
          <nav className="flex items-center gap-5 text-white/80 text-sm">
            <a href="#" className="hover:text-white" aria-label="Docs">Docs</a>
            <a href="#" className="hover:text-white" aria-label="GitHub">GitHub</a>
            <a href="#" className="hover:text-white" aria-label="Privacy">Privacy</a>
          </nav>
        </Section>
      </footer>
    </main>
  );
}
