import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a', // Tailwind slate-900 (primary-like)
          borderRadius: '8px',
        }}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Vertical line / Forge pillar */}
          <path d="M16 8V24" stroke="white" strokeWidth="3" strokeLinecap="round" />
          {/* The S / Hook / Value symbol */}
          <path
            d="M21 11H13.5C12.1193 11 11 12.1193 11 13.5C11 14.8807 12.1193 16 13.5 16H18.5C19.8807 16 21 17.1193 21 18.5C21 19.8807 19.8807 21 18.5 21H11"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
