import useReveal from '../hooks/useReveal.js';
import { skillGroups } from '../data.js';

export default function Expertise({ role }) {
  const headRef = useReveal();

  return (
    <section id="expertise">
      <div className="section-head reveal" ref={headRef}>
        <h2>Skills</h2>
      </div>
      <div className="skill-groups">
        {skillGroups[role].map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.skills.map((s) => <span className="tag" key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
