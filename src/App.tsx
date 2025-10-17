import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Layers,
  Settings2,
  ShieldCheck,
  GitBranch,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const accent = "#3B82F6";
const bg = "#0B0C10";

const Section = ({ id, className, children }) => (
  <section id={id} className={`max-w-7xl mx-auto px-5 sm:px-8 ${className || ""}`}>
    {children}
  </section>
);

const Card = ({ className, children }) => (
  <div className={`rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] ${className || ""}`}>
    {children}
  </div>
);

export default function MultiLanding() {
  return (
    <main className="min-h-screen w-full text-white" style={{ backgroundColor: bg }}>
      {/* Hero (centered, no skeleton) */}
      <Section id="hero" className="pt-24 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <img src="/logo.svg" alt="Multi Logo" className="h-20 w-auto mb-6" />

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            Ship faster. Ship smarter.
          </h1>
          <p className="mt-5 text-white/80 max-w-xl">
            You describe it. Multi gets it done — fast, clean, and without breaking your flow.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button className="h-11 rounded-xl px-5 text-base font-medium" style={{ backgroundColor: accent }}>
              Install Multi <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-11 rounded-xl px-5 text-base font-medium border-white/20"
              style={{ color: "#6B7280" }}
            >
              <Github className="mr-2 h-4 w-4" /> Read the Docs
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* Why Multi */}
      <Section id="why" className="py-10 sm:py-14">
        <div className="grid md:grid-cols-3 gap-5">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3 text-white/80">
              <Settings2 className="h-5 w-5" />
              <h3 className="font-semibold">Smart execution</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Multi understands what you want and gets it done fast — no extra steps.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3 text-white/80">
              <TerminalSquare className="h-5 w-5" />
              <h3 className="font-semibold">Instant feedback</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              See the plan immediately — no waiting.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3 text-white/80">
              <Layers className="h-5 w-5" />
              <h3 className="font-semibold">Parallel work</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Run multiple tasks in parallel without losing context.
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
              <li><span className="font-medium text-white">You describe what you want.</span></li>
              <li><span className="font-medium text-white">Multi previews the plan before it touches your code.</span></li>
              <li><span className="font-medium text-white">Run it.</span> Undo or fork with one click.</li>
            </ol>
          </div>

          {/* Visual (skeleton) */}
          <Card className="p-6 flex justify-center items-center">
            <img
              src="/skeleton.svg"
              alt="Product UI placeholder"
              className="w-full max-h-48 object-contain h-auto rounded-lg"
            />
          </Card>
        </div>
      </Section>

      {/* Capabilities */}
      <Section id="capabilities" className="py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Key capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: <Layers className="h-5 w-5" />, title: "Run tasks in parallel", body: "Kick off multiple jobs at once and stay in flow." },
            { icon: <GitBranch className="h-5 w-5" />, title: "Fork safely", body: "Fork work without touching your main branch." },
            { icon: <ShieldCheck className="h-5 w-5" />, title: "Snapshots & rollback", body: "Undo any change, instantly." },
            { icon: <Workflow className="h-5 w-5" />, title: "Work across workspaces", body: "Switch without losing context." },
            { icon: <Settings2 className="h-5 w-5" />, title: "No lock-in", body: "Configure the tools you prefer." },
            { icon: <TerminalSquare className="h-5 w-5" />, title: "Fast plans & diffs", body: "See changes before they apply." },
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

      {/* Developer-native UI */}
      <Section id="ui" className="py-10 sm:py-16">
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Developer-native UI</h2>
              <p className="text-white/80 max-w-prose">
                Stay in your editor. Multi fits your flow, not the other way around.
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
              Ship confidently. Multi keeps your work safe — easy rollback, fewer crashes.
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

      {/* CTA */}
      <Section id="cta" className="py-14">
        <Card className="p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold">Ship faster. Ship smarter.</h3>
          <p className="mt-2 text-white/80">No friction. Just flow.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button className="h-11 rounded-xl px-5 text-base font-medium" style={{ backgroundColor: accent }}>
              Install Multi <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-11 rounded-xl px-5 text-base font-medium border-white/20"
              style={{ color: "#6B7280" }}
            >
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
