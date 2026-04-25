import { motion } from 'motion/react';
import { ArrowRight, Terminal, DollarSign, Activity, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const terminalLines = [
  { text: "git push origin main", color: "text-foreground", delay: 0.5 },
  { text: "Deploying to production...", color: "text-muted-foreground", delay: 1.5 },
  { text: "✓ Build successful (234ms)", color: "text-green-500", delay: 2.5 },
  { text: "-----------------------", color: "text-muted-foreground", delay: 3.0 },
  { text: "Analyzing repository metrics...", color: "text-foreground", delay: 4.0 },
  { text: "MRR Detected: $4,200", color: "text-primary", delay: 5.0 },
  { text: "Valuation generated: $150,000", color: "text-primary", delay: 5.8 },
  { text: "Listing status: LIVE", color: "text-green-500 font-bold", delay: 6.5 },
];

export function HeroVariant1() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 container mx-auto max-w-7xl">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6"
          >
            <GitBranch className="size-4" />
            From commit to acquisition
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-fluid-h1 font-display font-bold tracking-tight text-foreground leading-[1.1]"
          >
            Turn your code into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">Liquid Assets.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            The marketplace built exclusively for developers. Connect your repo, verify your revenue, and securely transfer ownership to eager buyers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg group">
              Start Valuation
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base">
              Explore Market
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2"><DollarSign className="size-4" /> 0% Listing Fee</div>
            <div className="flex items-center gap-2"><Activity className="size-4" /> Algorithmic Escrow</div>
          </motion.div>
        </div>

        {/* Terminal / Code Window */}
        <motion.div 
          initial={{ opacity: 0, x: 20, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          style={{ perspective: 1000 }}
          className="flex-1 w-full max-w-lg lg:max-w-none"
        >
          <div className="relative rounded-xl border border-border bg-zinc-950 shadow-2xl overflow-hidden shadow-primary/5">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="size-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="size-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="px-3 flex items-center gap-2 text-xs text-zinc-500 font-mono">
                <Terminal className="size-3" /> saasforge-cli
              </div>
            </div>
            
            {/* Window Body */}
            <div className="p-6 font-mono text-sm h-[320px] sm:h-[350px] flex flex-col items-start text-left">
              <div className="text-zinc-500 mb-4">$ npx saasforge init</div>
              
              <div className="space-y-2 w-full">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, display: "none" }}
                    animate={{ opacity: 1, display: "block" }}
                    transition={{ delay: line.delay, duration: 0.1 }}
                    className={line.color}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 7 }}
                className="mt-2 w-2 h-4 bg-primary"
              />
            </div>
          </div>
          
          {/* Decorative floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -right-6 top-12 bg-background border border-border shadow-lg rounded-lg p-3 hidden sm:flex items-center gap-3 z-10"
          >
            <div className="bg-primary/10 p-2 rounded-md"><DollarSign className="size-4 text-primary" /></div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Offers Received</p>
              <p className="text-sm font-bold">12 Active</p>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
