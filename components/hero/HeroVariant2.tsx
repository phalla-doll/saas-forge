import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Users, Code, Zap, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SvglIcon } from '@/components/SvglIcon';

export function HeroVariant2() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[85dvh] lg:min-h-[90dvh]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="text-center relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 hidden sm:flex"
        >
          <Badge variant="outline" className="px-4 py-1.5 text-sm rounded-full bg-background/80 backdrop-blur border-primary/20">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
            <span className="font-semibold text-foreground mr-1">12 new</span> micro-SaaS projects listed today
          </Badge>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-fluid-h1 font-display font-bold tracking-tight mb-6"
        >
          The Ecosystem for <br />
          <span className="text-primary">Micro-SaaS</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Trade high-quality revenue generating projects. Hand-vetted codebase, transparent metrics, secure escrow.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="h-14 px-8 text-base">Browse Catalog</Button>
          <Button size="lg" variant="secondary" className="h-14 px-8 text-base">Value my App</Button>
        </motion.div>
      </div>

      {/* Floating Bento Grid Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-[100vw]">
        
        {/* Floating Ambient Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ opacity: { duration: 2, delay: 1 }, y: { repeat: Infinity, duration: 8, ease: "easeInOut" }, rotate: { repeat: Infinity, duration: 12, ease: "easeInOut" } }}
          className="absolute top-[12%] left-[8%] md:top-[15%] md:left-[15%] xl:left-[20%] scale-50 sm:scale-75 md:scale-100"
        >
          <SvglIcon name="Claude AI" size={80} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, -25, 0], rotate: [0, -5, 0] }}
          transition={{ opacity: { duration: 2, delay: 1.2 }, y: { repeat: Infinity, duration: 10, ease: "easeInOut" }, rotate: { repeat: Infinity, duration: 14, ease: "easeInOut" } }}
          className="absolute bottom-[25%] left-[8%] md:bottom-[30%] md:left-[12%] xl:left-[18%] scale-50 sm:scale-75 md:scale-100"
        >
          <SvglIcon name="github copilot" size={90} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, y: [0, 30, 0], rotate: [0, -15, 0] }}
          transition={{ opacity: { duration: 2, delay: 1.5 }, y: { repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }, rotate: { repeat: Infinity, duration: 15, ease: "easeInOut" } }}
          className="absolute bottom-[20%] right-[10%] md:bottom-[25%] md:right-[20%] xl:right-[25%] scale-50 sm:scale-75 md:scale-100"
        >
          <SvglIcon name="codex" size={100} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ opacity: { duration: 2, delay: 0.8 }, y: { repeat: Infinity, duration: 7, ease: "easeInOut" }, x: { repeat: Infinity, duration: 10, ease: "easeInOut" } }}
          className="absolute top-[35%] right-[8%] md:top-[40%] md:right-[10%] xl:right-[15%] scale-50 sm:scale-75 md:scale-100"
        >
          <SvglIcon name="cursor" size={60} />
        </motion.div>

        {/* Top Left Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50, y: -20 }}
          animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
          transition={{ opacity: { duration: 1, delay: 0.4 }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
          className="absolute top-[20%] left-[5%] xl:left-[10%] hidden md:flex flex-col gap-1 p-4 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-2 text-muted-foreground text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="size-3" /> MRR Growth
          </div>
          <div className="text-2xl font-bold font-display">$8,450</div>
          <div className="text-xs text-green-500 font-medium">+14.2% this month</div>
        </motion.div>

        {/* Top Right Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50, y: -30 }}
          animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
          transition={{ opacity: { duration: 1, delay: 0.5 }, y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 } }}
          className="absolute top-[30%] right-[5%] xl:right-[10%] hidden lg:flex flex-col p-4 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 shadow-xl min-w-[200px]"
        >
          <div className="flex items-center gap-2 mb-3 text-muted-foreground text-xs font-semibold uppercase tracking-wider">
            <Code className="size-3" /> Stack
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 px-2 py-1 bg-secondary border border-border text-secondary-foreground text-xs rounded-md font-medium">
              <SvglIcon name="next.js" size={14} /> Next.js
            </span>
            <span className="flex items-center gap-1.5 px-2 py-1 bg-secondary border border-border text-secondary-foreground text-xs rounded-md font-medium">
              <SvglIcon name="postgre" size={14} /> PostgreSQL
            </span>
            <span className="flex items-center gap-1.5 px-2 py-1 bg-secondary border border-border text-secondary-foreground text-xs rounded-md font-medium">
              <SvglIcon name="stripe" size={14} /> Stripe
            </span>
          </div>
        </motion.div>

        {/* Bottom Left Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30, y: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          transition={{ opacity: { duration: 1, delay: 0.6 }, y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 } }}
          className="absolute bottom-[20%] left-[10%] xl:left-[15%] hidden lg:flex items-center gap-4 p-4 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 shadow-xl"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Layers className="size-6 text-primary" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Total Listed</div>
            <div className="text-xl md:text-2xl font-bold font-display leading-tight">2,543+</div>
            <div className="text-xs font-medium text-muted-foreground">micro-SaaS projects</div>
          </div>
        </motion.div>

        {/* Bottom Right Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30, y: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, 20, 0] }}
          transition={{ opacity: { duration: 1, delay: 0.7 }, y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.5 } }}
          className="absolute bottom-[15%] right-[5%] xl:right-[12%] hidden md:flex flex-col gap-1 p-4 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-2 text-muted-foreground text-xs font-semibold uppercase tracking-wider">
            <Users className="size-3" /> Active Users
          </div>
          <div className="text-3xl font-bold font-display">12,400</div>
          <div className="flex -space-x-2 mt-2">
            {[1,2,3,4].map((i) => (
              <div key={i} className={`size-6 rounded-full border-2 border-background bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-medium`}>
              </div>
            ))}
            <div className="size-6 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[8px] font-medium">+1k</div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
