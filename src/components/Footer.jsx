import { Linkedin, Github } from 'lucide-react';
import { profile } from '../data.js';

export default function Footer() {
  const year = new Date().getFullYear();
  const hasSocial = profile.linkedin || profile.github;

  return (
    <footer>
      <div className="footer-inner">
        <span>© {year} {profile.name}</span>

        {hasSocial && (
          <div className="footer-social">
            <span>Follow</span>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={15} />
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={15} />
              </a>
            )}
          </div>
        )}

        <nav aria-label="Footer">
          <a href={`mailto:${profile.email}`}>email</a>
          <a href={`tel:${profile.phoneHref}`}>call</a>
          <a href="/privacy.html">privacy</a>
          <a href="/terms.html">terms</a>
          <a href="#hero">top ↑</a>
        </nav>
      </div>
    </footer>
  );
}
