import React from 'react';

interface WaveDividerProps {
  flip?: boolean;
  className?: string;
  from?: string;
  to?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({
  flip = false,
  className = '',
  from = '#007BFF',
  to = '#28A745'
}) => {
  return (
    <div className={`wave-divider ${className} ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full h-16 md:h-20 lg:h-24"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,192L80,202.7C160,213,320,235,480,240C640,245,800,235,960,213.3C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
