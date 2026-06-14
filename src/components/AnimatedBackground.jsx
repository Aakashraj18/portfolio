import './AnimatedBackground.css';

export default function AnimatedBackground() {
  return (
    <div className="animated-background">
      <svg className="fiber-optics" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <defs>
          <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Curved Paths mimicking Fiber Optic Cables */}
        <path id="path1" d="M -100 300 C 200 100, 400 500, 800 300 S 1200 100, 1300 300" fill="none" stroke="rgba(0, 212, 170, 0.15)" strokeWidth="2" />
        <path id="path2" d="M -100 400 C 300 600, 500 200, 900 400 S 1200 300, 1300 400" fill="none" stroke="rgba(108, 99, 255, 0.15)" strokeWidth="2" />
        <path id="path3" d="M -100 200 C 150 300, 350 100, 700 300 S 1100 500, 1300 200" fill="none" stroke="rgba(0, 212, 170, 0.1)" strokeWidth="1.5" />
        <path id="path4" d="M -100 500 C 250 300, 450 600, 850 400 S 1150 100, 1300 500" fill="none" stroke="rgba(108, 99, 255, 0.1)" strokeWidth="1.5" />

        {/* Animated Light Bursts traveling along paths */}
        <g filter="url(#glow-cyan)">
          <circle r="4" fill="#00d4aa">
            <animateMotion dur="5s" repeatCount="indefinite">
              <mpath href="#path1" />
            </animateMotion>
          </circle>
          <circle r="3" fill="#00d4aa">
            <animateMotion dur="7s" begin="2s" repeatCount="indefinite">
              <mpath href="#path3" />
            </animateMotion>
          </circle>
        </g>

        <g filter="url(#glow-blue)">
          <circle r="5" fill="#6c63ff">
            <animateMotion dur="6s" begin="1s" repeatCount="indefinite">
              <mpath href="#path2" />
            </animateMotion>
          </circle>
          <circle r="3" fill="#6c63ff">
            <animateMotion dur="8s" begin="3s" repeatCount="indefinite">
              <mpath href="#path4" />
            </animateMotion>
          </circle>
        </g>
      </svg>
    </div>
  );
}
