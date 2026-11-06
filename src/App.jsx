import { profile } from "./content.js";
import SpectrumDemo from "./components/SpectrumDemo.jsx";
import { Identity, About, Experience, Featured, Contact } from "./components/Sections.jsx";

export default function App() {
  const mail = `mailto:${profile.email}?subject=${encodeURIComponent(profile.emailSubject)}`;
  return (
    <>
      <main className="wrap">
        <Identity />
        <header className="hero">
          <h1>{profile.headline}</h1>
          <p className="sub">{profile.sub}</p>
          <a className="btn" href={mail}>Email me with the subject “{profile.emailSubject}”</a>
          <SpectrumDemo />
        </header>
        <About />
        <Experience />
        <Featured />
        <Contact mail={mail} />
      </main>
      <footer className="wrap">{profile.program}.</footer>
    </>
  );
}
