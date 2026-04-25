"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface SVGListResponse {
  id: number;
  title: string;
  category: string | string[];
  route: string | { light: string; dark: string };
  url: string;
}

const hardcodedIcons: Record<string, string | { light: string; dark: string }> = {
  "claude ai": "https://svgl.app/library/claude-ai-icon.svg",
  "claude": "https://svgl.app/library/claude-ai-icon.svg",
  "cursor": {
    light: "https://svgl.app/library/cursor_light.svg",
    dark: "https://svgl.app/library/cursor_dark.svg"
  },
  "codex": {
    light: "https://svgl.app/library/openai.svg",
    dark: "https://svgl.app/library/openai_dark.svg"
  },
  "openai": {
    light: "https://svgl.app/library/openai.svg",
    dark: "https://svgl.app/library/openai_dark.svg"
  },
  "vercel": {
    light: "https://svgl.app/library/vercel.svg",
    dark: "https://svgl.app/library/vercel_dark.svg"
  }
};

export function SvglIcon({ name, className, size = 32 }: { name: string; className?: string; size?: number }) {
  const [src, setSrc] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const lowerName = name.toLowerCase();
    
    // Check hardcoded map first for reliability
    if (hardcodedIcons[lowerName]) {
      const iconRoute = hardcodedIcons[lowerName];
      if (typeof iconRoute === 'string') {
        setSrc(iconRoute);
      } else {
        setSrc(resolvedTheme === 'dark' ? iconRoute.dark : iconRoute.light);
      }
      return;
    }

    async function fetchIcon() {
      try {
        const res = await fetch(`https://api.svgl.app?search=${encodeURIComponent(name)}`);
        if (!res.ok) return;
        const data: SVGListResponse[] = await res.json();
        
        if (data && data.length > 0) {
          const icon = data.find(d => d.title.toLowerCase().includes(lowerName)) || data[0];
          if (typeof icon.route === 'string') {
            setSrc(icon.route);
          } else if (icon.route && typeof icon.route === 'object') {
            setSrc(resolvedTheme === 'dark' ? icon.route.dark : icon.route.light);
          }
        }
      } catch (error) {
        console.error("Failed to fetch SVGL:", error);
      }
    }
    
    fetchIcon();
  }, [name, resolvedTheme]);

  if (!src) {
    return <div className={`animate-pulse bg-muted rounded-full ${className || ''}`} style={{ width: size, height: size }} />;
  }

  return (
    <Image 
      src={src} 
      alt={`${name} icon`} 
      width={size} 
      height={size} 
      className={className} 
      unoptimized 
    />
  );
}
