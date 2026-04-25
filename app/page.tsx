"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, DollarSign, ExternalLink, ArrowRight, Settings2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

// Import Hero Variants
import { HeroVariant2 } from '@/components/hero/HeroVariant2';

// Tech Stack Filters Data
const TECH_FILTERS = [
  { name: 'React', count: 342 },
  { name: 'Next.js', count: 215 },
  { name: 'Tailwind CSS', count: 189 },
  { name: 'Node.js', count: 156 },
  { name: 'Supabase', count: 98 },
  { name: 'Stripe', count: 87 },
  { name: 'OpenAI', count: 64 },
];

// Mock Data
const FEATURED_LISTINGS = [
  {
    id: "lst_1",
    name: "MailWizard",
    description: "AI-powered cold email outreach automation tool with high deliverability.",
    askingPrice: 45000,
    mrr: 1200,
    metrics: { users: 240, active: "68%" },
    techRoot: ["Next.js", "OpenAI", "PostgreSQL", "React", "Node.js"],
    tags: ["AI", "Marketing"],
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
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
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
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
    revenueType: "Token + SaaS",
    previewImage: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&q=80"
  },
  {
    id: "lst_4",
    name: "DesignBolt",
    description: "Figma plugin that generates production-ready Tailwind code instantly.",
    askingPrice: 28000,
    mrr: 850,
    metrics: { users: 1200, active: "30%" },
    techRoot: ["TypeScript", "Figma API", "React", "Tailwind CSS"],
    tags: ["Design Tool", "Plugin"],
    revenueType: "One-time + PRO",
    previewImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80"
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
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: "lst_6",
    name: "Logstream",
    description: "Open-source logging and observability platform for edge workers.",
    askingPrice: 95000,
    mrr: 3200,
    metrics: { users: "3.2k", active: "55%" },
    techRoot: ["Go", "ClickHouse", "Next.js", "React"],
    tags: ["DevOps", "Open Source"],
    revenueType: "Enterprise Support",
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
  },
  {
    id: "lst_7",
    name: "SupaCache",
    description: "High-performance edge caching layer optimized for Supabase.",
    askingPrice: 32000,
    mrr: 1100,
    metrics: { users: 215, active: "72%" },
    techRoot: ["Node.js", "Redis", "Supabase", "Next.js"],
    tags: ["DevOps", "Database"],
    revenueType: "Usage-based",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: "lst_8",
    name: "PayStream",
    description: "Unified dashboard for managing multiple Stripe accounts and analytics.",
    askingPrice: 65000,
    mrr: 1800,
    metrics: { users: 430, active: "88%" },
    techRoot: ["React", "Stripe", "Supabase", "Tailwind CSS"],
    tags: ["Finance", "Analytics"],
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: "lst_9",
    name: "PromptForge",
    description: "A/B testing and analytics suite for OpenAI prompt engineering optimization.",
    askingPrice: 115000,
    mrr: 3800,
    metrics: { users: 512, active: "64%" },
    techRoot: ["Next.js", "React", "OpenAI", "Tailwind CSS"],
    tags: ["AI", "Developer Tool"],
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: "lst_10",
    name: "MailWisp",
    description: "Minimalist email marketing specifically built for solitary creators.",
    askingPrice: 18000,
    mrr: 750,
    metrics: { users: 300, active: "60%" },
    techRoot: ["Next.js", "Resend", "Supabase"],
    tags: ["Marketing", "Creator Tool"],
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80"
  },
  {
    id: "lst_11",
    name: "LogFlow",
    description: "Beautiful, unified logging dashboard for microservices.",
    askingPrice: 42000,
    mrr: 1540,
    metrics: { users: 110, active: "82%" },
    techRoot: ["React", "Express", "MongoDB"],
    tags: ["DevOps", "Developer Tool"],
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: "lst_12",
    name: "FormZen",
    description: "Headless form backend with built-in spam protection and analytics.",
    askingPrice: 85000,
    mrr: 2900,
    metrics: { users: "1.4k", active: "52%" },
    techRoot: ["Next.js", "PostgreSQL", "Stripe"],
    tags: ["Developer Tool", "Marketing"],
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
  },
  {
    id: "lst_13",
    name: "SEO Snippet",
    description: "AI-powered meta tag and schema generator for e-commerce sites.",
    askingPrice: 24000,
    mrr: 890,
    metrics: { users: 450, active: "38%" },
    techRoot: ["Vue", "Node.js", "OpenAI"],
    tags: ["AI", "Marketing"],
    revenueType: "Usage-based",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: "lst_14",
    name: "TimeBlock",
    description: "Privacy-focused calendar overlay for deep work and time blocking.",
    askingPrice: 56000,
    mrr: 2100,
    metrics: { users: 890, active: "76%" },
    techRoot: ["React", "Firebase", "Tailwind CSS"],
    tags: ["Productivity", "Creator Tool"],
    revenueType: "One-time + PRO",
    previewImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80"
  },
  {
    id: "lst_15",
    name: "CryptTax",
    description: "Automated crypto tax report generator for European regulations.",
    askingPrice: 150000,
    mrr: 6500,
    metrics: { users: "2.1k", active: "25%" },
    techRoot: ["TypeScript", "Next.js", "PostgreSQL"],
    tags: ["Finance", "Crypto"],
    revenueType: "B2C SaaS",
    previewImage: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&q=80"
  },
  {
    id: "lst_16",
    name: "ShopSync",
    description: "Shopify plugin to automatically sync inventory across multiple stores.",
    askingPrice: 90000,
    mrr: 3100,
    metrics: { users: 340, active: "89%" },
    techRoot: ["React", "Shopify API", "Node.js"],
    tags: ["E-commerce", "Plugin"],
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80"
  },
  {
    id: "lst_17",
    name: "DeployGuard",
    description: "CI/CD pipeline monitoring tool that flags insecure dependency updates.",
    askingPrice: 38000,
    mrr: 1250,
    metrics: { users: 160, active: "65%" },
    techRoot: ["Go", "Next.js", "Kubernetes"],
    tags: ["DevOps", "Security"],
    revenueType: "Enterprise Support",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: "lst_18",
    name: "VoiceNotes",
    description: "Audio-first note app with automatic summarization.",
    askingPrice: 12000,
    mrr: 450,
    metrics: { users: 200, active: "45%" },
    techRoot: ["React Native", "OpenAI", "Firebase"],
    tags: ["AI", "Productivity"],
    revenueType: "B2C SaaS",
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
  },
  {
    id: "lst_19",
    name: "LinkFlow",
    description: "Bio link page builder tailored for podcast hosts and networks.",
    askingPrice: 22000,
    mrr: 680,
    metrics: { users: 410, active: "58%" },
    techRoot: ["Vue", "Tailwind CSS", "Supabase"],
    tags: ["Creator Tool", "Marketing"],
    revenueType: "One-time + PRO",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: "lst_20",
    name: "API Metrics",
    description: "Uptime and response time monitoring for internal REST APIs.",
    askingPrice: 27500,
    mrr: 920,
    metrics: { users: 280, active: "72%" },
    techRoot: ["Rust", "Svelte", "PostgreSQL"],
    tags: ["Developer Tool", "DevOps"],
    revenueType: "Usage-based",
    previewImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80"
  },
  {
    id: "lst_21",
    name: "DesignDash",
    description: "Client portal builder for freelance UI/UX designers to share assets.",
    askingPrice: 45000,
    mrr: 1600,
    metrics: { users: 520, active: "61%" },
    techRoot: ["Next.js", "Figma API", "Stripe"],
    tags: ["Design Tool", "Creator Tool"],
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&q=80"
  },
  {
    id: "lst_22",
    name: "TweetSchedule",
    description: "Twitter scheduler optimized for thread drafting and analytics.",
    askingPrice: 72000,
    mrr: 2350,
    metrics: { users: "1.1k", active: "78%" },
    techRoot: ["React", "Node.js", "Redis"],
    tags: ["Marketing", "Social Media"],
    revenueType: "B2C SaaS",
    previewImage: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80"
  },
  {
    id: "lst_23",
    name: "DocGenius",
    description: "Automated API documentation generator from codebase comments.",
    askingPrice: 34000,
    mrr: 1100,
    metrics: { users: 310, active: "54%" },
    techRoot: ["TypeScript", "AST Parsing", "React"],
    tags: ["Developer Tool", "Open Source"],
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: "lst_24",
    name: "SpendTracker",
    description: "Minimalist corporate card expense categorization powered by AI.",
    askingPrice: 125000,
    mrr: 4200,
    metrics: { users: 180, active: "91%" },
    techRoot: ["Next.js", "Plaid API", "OpenAI"],
    tags: ["Finance", "AI"],
    revenueType: "Usage-based",
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
  },
  {
    id: "lst_25",
    name: "Widgetize",
    description: "No-code builder for embedding interactive web widgets to notion.",
    askingPrice: 16000,
    mrr: 540,
    metrics: { users: 450, active: "32%" },
    techRoot: ["Vue", "Firebase", "Notion API"],
    tags: ["No-Code", "Productivity"],
    revenueType: "One-time + PRO",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: "lst_26",
    name: "Localizer",
    description: "JSON string localization manager for React and Next.js apps.",
    askingPrice: 29000,
    mrr: 980,
    metrics: { users: 240, active: "67%" },
    techRoot: ["SvelteKit", "PostgreSQL", "DeepL API"],
    tags: ["Developer Tool", "AI"],
    revenueType: "Usage-based",
    previewImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80"
  },
  {
    id: "lst_27",
    name: "MailWarm",
    description: "Email deliverability optimization and inbox warming service.",
    askingPrice: 65000,
    mrr: 2100,
    metrics: { users: 380, active: "83%" },
    techRoot: ["Node.js", "SMTP", "React"],
    tags: ["Marketing", "Sales"],
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&q=80"
  },
  {
    id: "lst_28",
    name: "IconBase",
    description: "Curated vector icon marketplace for indie app developers.",
    askingPrice: 48000,
    mrr: 1450,
    metrics: { users: 890, active: "41%" },
    techRoot: ["Next.js", "Tailwind CSS", "Stripe"],
    tags: ["Design Tool", "Marketplace"],
    revenueType: "One-time + PRO",
    previewImage: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80"
  },
  {
    id: "lst_29",
    name: "VideoClip",
    description: "Browser-based video editor optimized for short-form social content.",
    askingPrice: 110000,
    mrr: 3800,
    metrics: { users: "1.2k", active: "59%" },
    techRoot: ["React", "FFmpeg.wasm", "AWS"],
    tags: ["Creator Tool", "Social Media"],
    revenueType: "B2C SaaS",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: "lst_30",
    name: "CourseKit",
    description: "Lightweight LMS for developers selling coding courses on their domain.",
    askingPrice: 82000,
    mrr: 2750,
    metrics: { users: 210, active: "88%" },
    techRoot: ["Next.js", "Mux", "Prisma"],
    tags: ["Creator Tool", "Education"],
    revenueType: "B2B SaaS",
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
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
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredListings = activeFilter
    ? FEATURED_LISTINGS.filter(listing => listing.techRoot.includes(activeFilter))
    : FEATURED_LISTINGS;

  return (
    <main className="flex-1 w-full relative">
      
      <HeroVariant2 />

      {/* Featured Listings Grid */}
      <section className="py-16 md:py-24 bg-secondary/30 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-6">
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

          <div className="flex flex-wrap items-center gap-2 mb-10">
            {TECH_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.name;
              return (
                <Badge 
                  key={filter.name} 
                  variant="secondary" 
                  onClick={() => setActiveFilter(isActive ? null : filter.name)}
                  className={`cursor-pointer px-3 py-1.5 text-sm font-medium border transition-colors flex items-center shadow-sm select-none ${
                    isActive 
                      ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90" 
                      : "border-border bg-card text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {filter.name}
                  <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-sm ${isActive ? 'bg-primary-foreground/20' : 'bg-muted text-muted-foreground'}`}>
                    {filter.count}
                  </span>
                </Badge>
              );
            })}
          </div>

          <motion.div 
            key={activeFilter || 'all'}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filteredListings.length > 0 ? (
              filteredListings.map((listing) => (
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

                {/* Preview Image */}
                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl border border-border group-hover:border-primary/20 transition-colors">
                  <Image 
                    src={listing.previewImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"}
                    alt={`${listing.name} preview`}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
            ))
            ) : (
              <div className="col-span-full py-12 text-center flex flex-col items-center">
                <p className="text-muted-foreground mb-4">No projects found with the selected tech stack.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveFilter(null)}
                >
                  Clear filter
                </Button>
              </div>
            )}
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
