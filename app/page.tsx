"use client";

import { motion } from 'motion/react';
import { TrendingUp, Users, DollarSign, ExternalLink, ArrowRight, Settings2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Import Hero Variants
import { HeroVariant2 } from '@/components/hero/HeroVariant2';

// Mock Data
const FEATURED_LISTINGS = [
  {
    id: "lst_1",
    name: "MailWizard",
    description: "AI-powered cold email outreach automation tool with high deliverability.",
    askingPrice: 45000,
    mrr: 1200,
    metrics: { users: 240, active: "68%" },
    techRoot: ["Next.js", "OpenAI", "PostgreSQL"],
    tags: ["AI", "Marketing"],
    revenueType: "B2B SaaS"
  },
  {
    id: "lst_2",
    name: "DocuSync API",
    description: "Developer API for real-time document synchronization and conflict resolution.",
    askingPrice: 150000,
    mrr: 4500,
    metrics: { users: 45, active: "95%" },
    techRoot: ["Rust", "Redis", "WebSockets"],
    tags: ["Developer Tool", "API"],
    revenueType: "B2B SaaS"
  },
  {
    id: "lst_3",
    name: "Vanguard Audit",
    description: "Automated smart contract auditing platform for Web3 developers.",
    askingPrice: 85000,
    mrr: 2100,
    metrics: { users: 110, active: "45%" },
    techRoot: ["Solidity", "TypeScript", "React"],
    tags: ["Crypto", "Security"],
    revenueType: "Token + SaaS"
  },
  {
    id: "lst_4",
    name: "DesignBolt",
    description: "Figma plugin that generates production-ready Tailwind code instantly.",
    askingPrice: 28000,
    mrr: 850,
    metrics: { users: 1200, active: "30%" },
    techRoot: ["TypeScript", "Figma API", "Vite"],
    tags: ["Design Tool", "Plugin"],
    revenueType: "One-time + PRO"
  },
  {
    id: "lst_5",
    name: "FlowForma",
    description: "Headless form backend for static sites with spam filtering.",
    askingPrice: 12000,
    mrr: 400,
    metrics: { users: 850, active: "85%" },
    techRoot: ["Node.js", "MongoDB", "Express"],
    tags: ["No-Code", "API"],
    revenueType: "B2B SaaS"
  },
  {
    id: "lst_6",
    name: "Logstream",
    description: "Open-source logging and observability platform for edge workers.",
    askingPrice: 95000,
    mrr: 3200,
    metrics: { users: "3.2k", active: "55%" },
    techRoot: ["Go", "ClickHouse", "Next.js"],
    tags: ["DevOps", "Open Source"],
    revenueType: "Enterprise Support"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 }
  }
};

export default function Home() {
  return (
    <main className="flex-1 w-full relative">
      
      <HeroVariant2 />

      {/* Featured Listings Grid */}
      <section className="py-16 md:py-24 bg-secondary/30 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-display font-bold">Featured Projects</h2>
              <p className="text-muted-foreground mt-2">Curated, high-quality projects currently on the market.</p>
            </div>
            <Link href="/explore">
              <Button variant="ghost" className="hidden sm:flex group">
                View all projects
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {FEATURED_LISTINGS.map((listing) => (
              <motion.div 
                key={listing.id} 
                variants={itemVariants}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
              >
                {/* Header: Title and Price */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                      <Link href={`/listing/${listing.id}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {listing.name}
                      </Link>
                    </h3>
                    <Badge variant="secondary" className="mt-2 font-medium">{listing.revenueType}</Badge>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Asking</p>
                    <p className="text-xl font-bold">${listing.askingPrice.toLocaleString()}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
                  {listing.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg bg-secondary/50 p-3">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <DollarSign className="size-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">MRR</span>
                    </div>
                    <p className="text-lg font-bold">${listing.mrr.toLocaleString()}</p>
                  </div>
                  <div className="rounded-lg bg-secondary/50 p-3">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Users className="size-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Customers</span>
                    </div>
                    <p className="text-lg font-bold">{listing.metrics.users}</p>
                  </div>
                </div>

                {/* Tech Stack & Tags */}
                <div className="mt-auto pt-6 border-t border-border flex flex-wrap gap-2">
                  {listing.techRoot.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs bg-background">
                      {tech}
                    </Badge>
                  ))}
                  {listing.tags.map((tag) => (
                    <Badge key={tag} className="text-xs bg-primary/5 text-primary border-primary/10 hover:bg-primary/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 sm:hidden">
            <Button variant="outline" className="w-full">
              View all projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative rounded-3xl bg-foreground text-background overflow-hidden p-8 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-muted-foreground/30 via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">
              Ready to sell your SaaS?
            </h2>
            <p className="text-background/80 text-lg mb-8 max-w-xl">
              Get an instant algorithmic valuation and connect with thousands of verified buyers looking for their next venture.
            </p>
            <Button size="lg" variant="secondary" className="h-12 px-8 text-foreground font-semibold">
              Get free valuation
            </Button>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-4 shrink-0">
            <div className="bg-background/10 backdrop-blur border border-background/20 rounded-2xl p-6 text-center">
              <p className="text-3xl font-display font-bold mb-1">0%</p>
              <p className="text-sm text-background/80 font-medium">Listing Fee</p>
            </div>
            <div className="bg-background/10 backdrop-blur border border-background/20 rounded-2xl p-6 text-center">
              <p className="text-3xl font-display font-bold mb-1">24h</p>
              <p className="text-sm text-background/80 font-medium">Verified Average</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
