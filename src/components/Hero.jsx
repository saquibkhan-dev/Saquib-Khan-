import useCountUp from '../hooks/useCountUp.js';
import { profile, roleOrder, roleLabels, roleTitles, roleSummaries, heroKpis } from '../data.js';

function Kpi({ count, suffix, label }) {
  const [ref, value] = useCountUp(count);
  return (
    <div className="kpi" ref={ref}>
      <div className="kpi-num">
        <span className="counted">{value}</span>{suffix}
      </div>
      <div className="kpi-label">{label}</div>
    </div>
  );
}

export default function Hero({ role, onRoleChange }) {
  const [first, ...rest] = profile.name.split(' ');

  return (
    <section id="hero">
      <div className="hero-meta">
        <span>{profile.name} / Portfolio</span>
        <span>{profile.location} &mdash; 2026</span>
        <span>Role: {roleLabels[role]}</span>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="hero-name">
            {first}
            <br />
            {rest.join(' ')}<span className="dot">.</span>
          </h1>

          <p className="hero-title">{roleTitles[role]}</p>
          <p className="hero-role-line">{roleSummaries[role]}</p>

          <div className="role-toggle" role="group" aria-label="View portfolio as">
            {roleOrder.map((r) => (
              <button
                key={r}
                className={r === role ? 'active' : ''}
                onClick={() => onRoleChange(r)}
                aria-pressed={r === role}
              >
                {roleLabels[r]}
              </button>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn-accent">Hire me &rarr;</a>
            <a href="#projects" className="btn-ghost">View projects</a>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-circle" aria-hidden="true" />
          <picture className="hero-photo-wrap">
            <source srcSet="/profile-photo.webp" type="image/webp" />
            <img
              className="hero-photo"
              src="/profile-photo.jpg"
              alt={`Black and white portrait of ${profile.name}`}
              width="160"
              height="160"
              loading="eager"
            />
          </picture>
        </div>
      </div>

      <div className="kpi-strip">
        {heroKpis[role].map((k) => (
          <Kpi key={k.label} count={k.count} suffix={k.suffix} label={k.label} />
        ))}
      </div>
    </section>
  );
}