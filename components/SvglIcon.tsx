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

export function SvglIcon({ name, className, size = 32 }: { name: string; className?: string; size?: number }) {
  const [src, setSrc] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    async function fetchIcon() {
      try {
        const res = await fetch(`https://api.svgl.app?search=${encodeURIComponent(name)}`);
        if (!res.ok) return;
        const data: SVGListResponse[] = await res.json();
        
        if (data && data.length > 0) {
          // just taking the first one that somewhat matches title for safety
          const icon = data.find(d => d.title.toLowerCase().includes(name.toLowerCase())) || data[0];
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
    return <div className={`animate-pulse bg-muted rounded-full ${className}`} style={{ width: size, height: size }} />;
  }

  return (
    <Image 
      src={src} 
      alt={`${name} icon`} 
      width={size} 
      height={size} 
      className={className} 
      unoptimized // as they are SVGs and next/image sometimes struggles with external SVGs
    />
  );
}
