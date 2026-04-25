export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 0C21.6 0 24 2.4 24 12C24 21.6 21.6 24 12 24C2.4 24 0 21.6 0 12C0 2.4 2.4 0 12 0Z" fill="currentColor" className="text-primary" />
      <line x1="12" x2="12" y1="5" y2="19" stroke="var(--color-background)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 7.5H10.5C9.11929 7.5 8 8.61929 8 10C8 11.3807 9.11929 12.5 10.5 12.5H13.5C14.8807 12.5 16 13.6193 16 15C16 16.3807 14.8807 17.5 13.5 17.5H8.5" stroke="var(--color-background)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
