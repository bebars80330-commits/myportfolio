import { profile, about, experience, featured } from "../content.js";

export const Identity = () => (
  <div className="id">
    <img className="photo" src={profile.photo} alt={`Photo of ${profile.name}`}
      onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} />
    <div><b>{profile.name}</b><span>{profile.program}</span></div>
  </div>
);

export const About = () => (
  <section id="about"><h2>About</h2>{about.map((t, i) => <p key={i}>{t}</p>)}</section>
);

export const Experience = () => (
  <section id="experience"><h2>Experience</h2>
    {experience.map((j) => (
      <div className="job" key={j.role}>
        <div className="when">{j.when}</div>
        <div><h3>{j.role}</h3><ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
      </div>
    ))}
  </section>
);

export const Featured = () => (
  <section id="featured"><h2>Featured</h2>
    <div className="feat">
      {featured.map((f) => (
        <a key={f.title} href={f.href}><strong>{f.title}</strong><span>{f.text}</span></a>
      ))}
    </div>
  </section>
);

export const Contact = ({ mail }) => (
  <div className="contact" id="contact">
    <h2>Hiring for RF, hardware, or aerospace co-ops?</h2>
    <p>Or working in the field and happy to compare notes? Email me with the subject line “{profile.emailSubject}” and I’ll reply within 48 hours.</p>
    <a className="btn" href={mail}>{profile.email}</a>
    <p className="small">Students and engineers: send a LinkedIn connection request with a short note.</p>
  </div>
);
