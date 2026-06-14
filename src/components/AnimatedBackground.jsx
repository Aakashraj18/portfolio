import './AnimatedBackground.css';

export default function AnimatedBackground() {
  return (
    <div className="animated-background">
      <div className="grid-overlay"></div>
      
      {/* Horizontal Data Lines */}
      <div className="data-line data-line-h h-1"></div>
      <div className="data-line data-line-h h-2"></div>
      <div className="data-line data-line-h h-3"></div>
      
      {/* Vertical Data Lines */}
      <div className="data-line data-line-v v-1"></div>
      <div className="data-line data-line-v v-2"></div>
      <div className="data-line data-line-v v-3"></div>
      <div className="data-line data-line-v v-4"></div>
    </div>
  );
}
