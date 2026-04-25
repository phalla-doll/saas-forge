import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const marqueeItems = [
  "NEXT.JS", "TYPESCRIPT", "REACT", "NODE.JS", "RUST", "GO", "POSTGRESQL", "MONGODB", "REDIS", "TAILWIND", "STRIPE", "VERCEL"
];

export function HeroVariant3() {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 border-b border-border overflow-hidden bg-background">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center w-full"
        >
          <div className="inline-block overflow-hidden pb-4">
            <h1 className="text-[12vw] leading-none font-display font-black tracking-tighter uppercase text-foreground">
              <span className="block italic pr-4">Build.</span>
            </h1>
          </div>
          <div className="inline-block overflow-hidden pb-4">
            <h1 className="text-[12vw] leading-none font-display font-black tracking-tighter uppercase text-muted-foreground mr-12 sm:mr-32">
              <span className="block">Scale.</span>
            </h1>
          </div>
          <div className="inline-block overflow-hidden">
            <h1 className="text-[12vw] leading-none font-display font-black tracking-tighter uppercase text-primary ml-12 sm:ml-32">
              <span className="block">Sell.</span>
            </h1>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 md:mt-20 w-full max-w-2xl text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
        >
          <p className="text-lg font-medium text-muted-foreground max-w-sm">
            The no-nonsense marketplace for profitable side-projects. No brokers. No hidden fees. Just makers connecting with buyers.
          </p>
          
          <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
            <Button size="lg" className="rounded-none h-14 px-8 text-base tracking-wide uppercase font-bold border-2 border-primary bg-primary text-primary-foreground hover:bg-foreground hover:border-foreground">
              View Listings <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-none h-14 px-8 text-base tracking-wide uppercase font-bold border-2 hover:bg-muted">
              Sell Asset
            </Button>
          </div>
        </motion.div>

      </div>

      {/* Brutalist Marquee Banner */}
      <div className="absolute bottom-0 w-full overflow-hidden border-t-2 border-border bg-muted py-3">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Double the array for seamless looping */}
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-6 text-sm font-bold font-mono text-muted-foreground tracking-widest">{item}</span>
              <span className="text-muted-foreground/30">•</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Global styles for the marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50%)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}} />

    </section>
  );
}
