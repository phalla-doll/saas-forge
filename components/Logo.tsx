export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="8" fill="currentColor" className="text-primary" />
      {/* Vertical line / Forge pillar */}
      <path d="M16 8V24" stroke="var(--color-background)" strokeWidth="3" strokeLinecap="round" />
      {/* The S / Hook / Value symbol */}
      <path
        d="M21 11H13.5C12.1193 11 11 12.1193 11 13.5C11 14.8807 12.1193 16 13.5 16H18.5C19.8807 16 21 17.1193 21 18.5C21 19.8807 19.8807 21 18.5 21H11"
        stroke="var(--color-background)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
