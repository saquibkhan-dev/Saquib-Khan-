import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Expertise from './components/Expertise.jsx';
import Credentials from './components/Credentials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CookieConsent from './components/CookieConsent.jsx';
import Analytics from './components/Analytics.jsx';
import { ScrollProgress, BackToTop } from './components/Chrome.jsx';

const CONSENT_KEY = 'cookie-consent';

function readStoredConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export default function App() {
  const [theme, setTheme] = useState('light');
  const [role, setRole] = useState('fullstack');
  const [consent, setConsent] = useState(null);
  const [consentKnown, setConsentKnown] = useState(false);

  useEffect(() => {
    setConsent(readStoredConsent());
    setConsentKnown(true);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  function setAndStoreConsent(value) {
    setConsent(value);
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      }
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />

      <Header theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />

      <main id="main">
        <Hero role={role} onRoleChange={setRole} />
        <hr className="rule" style={{ maxWidth: 1160, margin: '0 auto' }} />
        <About role={role} />
        <Experience role={role} />
        <Projects role={role} />
        <Expertise role={role} />
        <Credentials role={role} />
        <hr className="rule" style={{ maxWidth: 1160, margin: '0 auto' }} />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      <Analytics consent={consent} />
      <CookieConsent
        visible={consentKnown && consent === null}
        onAccept={() => setAndStoreConsent('accepted')}
        onDecline={() => setAndStoreConsent('declined')}
      />
    </>
  );
}
