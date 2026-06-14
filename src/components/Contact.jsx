import { useScrollReveal } from '../hooks/useScrollReveal';
import heroImg from '../assets/developer_hero.png';
import './Contact.css';

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91-9085267322',
    link: 'tel:+919085267322',
    color: '#25d366',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    value: 'akashkrrajak18@gmail.com',
    link: 'mailto:akashkrrajak18@gmail.com',
    color: '#ea4335',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Guwahati, Assam, India',
    link: 'https://maps.google.com/?q=Guwahati,Assam,India',
    color: '#4285f4',
  },
];

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className={`contact__header ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}>
        <h2 className="section__title">Contact Me</h2>
        <p className="section__subtitle">
          Feel free to reach out for collaborations, opportunities, or just a friendly hello!
        </p>
      </div>

      <div className="contact__content">
        <div className={`contact__image-container ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`} style={{ '--reveal-delay': '0.2s' }}>
          <img src={heroImg} alt="Contact illustration" className="contact__image" />
        </div>
        
        <div className="contact__cards">
          {contactInfo.map((info, index) => (
            <a 
              href={info.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`contact__card card ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}
              key={info.label}
              style={{ '--contact-color': info.color, '--reveal-delay': `${index * 0.15 + 0.3}s` }}
            >
              <div className="contact__card-icon" style={{ color: info.color }}>
                {info.icon}
              </div>
              <div className="contact__card-info">
                <span className="contact__card-label">{info.label}</span>
                <span className="contact__card-value">{info.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
