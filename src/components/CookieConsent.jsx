export default function CookieConsent({ visible, onAccept, onDecline }) {
  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <p>
        This site can use privacy-friendly analytics to see which pages get visited. No data is
        collected unless you accept. See the{' '}
        <a href="/privacy.html">privacy policy</a> for details.
      </p>
      <div className="cookie-actions">
        <button className="btn-ghost" onClick={onDecline}>Decline</button>
        <button className="btn-accent" onClick={onAccept}>Accept</button>
      </div>
    </div>
  );
}
