import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import useReveal from '../hooks/useReveal.js';
import { profile } from '../data.js';

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact">
      <div className="reveal" ref={ref}>
        <h2 className="contact-big">
          Building something? <span className="accent">Let's talk.</span>
        </h2>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
          <a href={`tel:${profile.phoneHref}`}><Phone size={16} /> {profile.phone}</a>
          {profile.linkedin ? (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn</a>
          ) : null}
          {profile.github ? (
            <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
