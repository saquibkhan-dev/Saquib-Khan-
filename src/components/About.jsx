import useReveal from '../hooks/useReveal.js';
import { profile, educationList, roleTitles } from '../data.js';

export default function About({ role }) {
  const headRef = useReveal();
  const highestEducation = educationList[0];

  return (
    <section id="about">
      <div className="section-head reveal" ref={headRef}>
        <h2>Beyond writing code. Building what matters.</h2>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <h3>At a glance</h3>
          <div className="about-meta-row"><span>Currently viewing as</span><span>{roleTitles[role]}</span></div>
          <div className="about-meta-row"><span>Location</span><span>{profile.location}</span></div>
          <div className="about-meta-row"><span>Graduating</span><span>{highestEducation.year}</span></div>
          <div className="about-meta-row"><span>Email</span><span><a href={`mailto:${profile.email}`}>{profile.email}</a></span></div>
          <div className="about-meta-row"><span>Phone</span><span><a href={`tel:${profile.phoneHref}`}>{profile.phone}</a></span></div>
        </div>
        <div>
          <p>
            I'm Saquib Khan, a Computer Science graduate with a passion for building modern, scalable web applications. I work across the stack, using React, Next.js, and TypeScript to craft responsive user interfaces, and Node.js, Express, and REST APIs to build reliable backend systems.

I work with MySQL, PostgreSQL, and MongoDB to design and manage data-driven applications. I've independently built and deployed four full-stack applications, taking each project through the complete software development lifecycle—from database architecture and development to deployment on Vercel and Netlify.

I enjoy turning ideas into functional digital experiences, solving real-world problems through code, and continuously improving my engineering skills.

          </p>
          <p>
           Alongside software development, I've developed practical skills in SQL and Power BI through the Accenture and Tata Forage job simulations. I've worked with raw datasets, performed data cleaning and analysis, built interactive dashboards, and translated findings into actionable business recommendations.

          </p>
          <p>
            The toggle above lets you explore how I present my skills and experience across Full-Stack, Frontend, Backend, and Data Analyst roles. Just as I tailor my resume to each opportunity, I've designed this portfolio to highlight the most relevant aspects of my experience for every role.

          </p>
        </div>
      </div>
    </section>
  );
}
