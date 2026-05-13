export default function BrandLogo({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) {
  return (
    <svg 
      width="240" 
      height="60" 
      viewBox="0 0 450 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* The "G" Icon */}
      <defs>
        <linearGradient id="g-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0072bc" />
          <stop offset="100%" stopColor="#8dc63f" />
        </linearGradient>
      </defs>
      <path 
        d="M50 20C33.4 20 20 33.4 20 50C20 66.6 33.4 80 50 80C60.2 80 69.1 74.9 74.5 67.2L60 58.5C57.5 62 53.9 64.3 50 64.3C42.1 64.3 35.7 57.9 35.7 50C35.7 42.1 42.1 35.7 50 35.7C55.4 35.7 60.1 38.7 62.5 43.1L77.3 34.6C72.2 25.8 62.1 20 50 20ZM50 42.8V57.1H78.5V42.8H50Z" 
        fill="url(#g-grad)"
      />
      
      {/* Text: GOEL GANGA GROUP */}
      <text x="100" y="55" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="900" fill="#1a1a1e" style={{ letterSpacing: '0.05em' }}>GOEL GANGA GROUP</text>
      <text x="100" y="80" fontFamily="serif" fontSize="16" fontStyle="italic" fontWeight="500" fill="#1a1a1e">Pure Delight</text>
    </svg>
  );
}
