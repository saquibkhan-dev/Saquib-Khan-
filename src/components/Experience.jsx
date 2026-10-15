import useReveal from '../hooks/useReveal.js';
import { coolvolt, developersArenaMeta, developersArenaBullets } from '../data.js';

export default function Experience({ role }) {
  const headRef = useReveal();

  return (
    <section id="experience">
      <div className="section-head reveal" ref={headRef}>
        <h2>Experience</h2>
      </div>
      <div className="timeline">
        <div className="tl-item">
          <span className="tl-dot" />
          <div className="tl-dates mono">{coolvolt.dates}</div>
          <div className="tl-role-line">
            <span className="tl-title">{coolvolt.title}</span>
            <span className="tl-org">{coolvolt.org}</span>
          </div>
          <ul className="tl-bullets">
            {coolvolt.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>

        <div className="tl-item" key={role}>
          <span className="tl-dot" />
          <div className="tl-dates mono">{developersArenaMeta.dates}</div>
          <div className="tl-role-line">
            <span className="tl-title">{developersArenaMeta.title}</span>
            <span className="tl-org">{developersArenaMeta.org}</span>
          </div>
          <ul className="tl-bullets">
            {developersArenaBullets[role].map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
