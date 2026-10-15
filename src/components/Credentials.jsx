import useReveal from '../hooks/useReveal.js';
import { certifications, educationList } from '../data.js';

export default function Credentials({ role }) {
  const headRef = useReveal();

  return (
    <section id="credentials">
      <div className="section-head reveal" ref={headRef}>
        <h2>Certifications &amp; Education</h2>
      </div>
      <div className="cred-grid">
        <div>
          <h3 className="mono" style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--ink-soft)', marginBottom: 14, fontWeight: 500 }}>
            Certifications ({role} view)
          </h3>
          <ul className="cred-list">
            {certifications[role].map((c) => (
              <li key={c.title}>
                {c.title}
                <div className="cred-sub">{c.org}{c.year ? `, ${c.year}` : ''}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mono" style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--ink-soft)', marginBottom: 14, fontWeight: 500 }}>
            Education
          </h3>
          <ul className="cred-list">
            {educationList.map((e) => (
              <li key={e.degree}>
                {e.degree}
                <div className="cred-sub">{e.institution}, {e.year}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
