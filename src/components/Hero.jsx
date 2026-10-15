import { Mail } from 'lucide-react';
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
  return (
    <section id="hero">
      <div className="hero-main">
        <div>
          <div className="hero-badge">
            <span className="dot" />
            Open to full-stack, frontend &amp; backend roles
          </div>

          <p className="hero-tag mono">$ whoami --role={role}</p>

          <h1 className="hero-name">
            {profile.name.split(' ')[0]} <span className="accent">{profile.name.split(' ').slice(1).join(' ')}</span>
            <br />
            <span className="bracket">{'{'}</span> {roleTitles[role]} <span className="bracket">{'}'}</span>
          </h1>

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
            <a href="#contact" className="btn-accent"><Mail size={16} /> Hire me</a>
            <a href="#projects" className="btn-ghost">View projects</a>
          </div>
        </div>

        <div className="hero-visual">
          <picture className="hero-photo-wrap">
            <source srcSet="/profile-photo.webp" type="image/webp" />
            <img
              className="hero-photo"
              src="/profile-photo.jpg"
              alt={`Portrait of ${profile.name}`}
              width="160"
              height="160"
              loading="eager"
            />
          </picture>

          <div className="code-float" aria-hidden="true">
            <div className="chrome"><span /><span /><span /></div>
            <pre><code>{`// auth-interceptor.ts
api.interceptors.response.use(
  `}<span className="kw">res</span> {`=> res,`}{`
  `}<span className="kw">async</span> {`(error) => {
    `}<span className="kw">if</span> {`(error.status === `}<span className="str">401</span>{`) {
      `}<span className="kw">await</span> {`refreshToken();
      `}<span className="kw">return</span> {`api(error.config);
    }
    `}<span className="kw">throw</span> {`error;
  }
);
`}<span className="cm">{`// silent refresh, zero retries lost`}</span></code></pre>
          </div>
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
