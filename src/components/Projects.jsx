import { ExternalLink, Github } from 'lucide-react';
import useReveal from '../hooks/useReveal.js';
import { codingProjects, dataProjects } from '../data.js';

function ProjectCard({ project, index }) {
  return (
    <div className="project-card">
      <span className="project-num">{String(index + 1).padStart(2, '0')}</span>
      <div className="project-body">
        <h3>{project.name}</h3>
        <p>{project.subtitle}</p>
        <ul>
          {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        <div className="project-tags">
          {project.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
        <div className="project-links">
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Visit live <ExternalLink size={13} />
            </a>
          ) : !project.github ? (
            <span className="disabled">Live link n/a</span>
          ) : null}
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub <Github size={13} />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ role }) {
  const headRef = useReveal();
  const projects = role === 'data' ? dataProjects : codingProjects[role];

  return (
    <section id="projects">
      <div className="section-head reveal" ref={headRef}>
        <h2>{role === 'data' ? 'Job simulations & case work' : 'Selected projects'}</h2>
      </div>
      <div className="project-grid" key={role}>
        {projects.map((p, i) => (
          <ProjectCard project={p} index={i} key={p.key} />
        ))}
      </div>
    </section>
  );
}