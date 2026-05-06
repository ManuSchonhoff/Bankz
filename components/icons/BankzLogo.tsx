"use client";

interface BankzLogoProps {
  size?: number;
  className?: string;
  textClass?: string;
  showText?: boolean;
}

export default function BankzLogo({
  size = 40,
  className = "",
  textClass = "",
  showText = true,
}: BankzLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Bankz isotipo"
      >
        <circle cx="40" cy="40" r="37" stroke="#F9F9F9" strokeWidth="2.5" />
        <line x1="40" y1="3" x2="40" y2="16" stroke="#F9F9F9" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="77" y1="40" x2="64" y2="40" stroke="#F9F9F9" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="40" y1="77" x2="40" y2="64" stroke="#F9F9F9" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="3" y1="40" x2="16" y2="40" stroke="#F9F9F9" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="40" cy="40" r="20" stroke="#F9F9F9" strokeWidth="2" />
        <line x1="40" y1="20" x2="40" y2="28" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="60" y1="40" x2="52" y2="40" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="40" y1="60" x2="40" y2="52" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="40" x2="28" y2="40" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="40" cy="40" r="5" fill="#F9F9F9" />
      </svg>
      {showText && (
        <span
          className={`text-2xl font-bold tracking-widest uppercase text-brand-light ${textClass}`}
          style={{ fontFamily: "var(--font-alexandria)" }}
        >
          Bankz
        </span>
      )}
    </div>
  );
}
