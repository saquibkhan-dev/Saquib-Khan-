import { useEffect } from 'react';


export default function Analytics({ consent }) {
  useEffect(() => {
    if (consent !== 'accepted') return;

    const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

    if (plausibleDomain) {
      const script = document.createElement('script');
      script.defer = true;
      script.dataset.domain = plausibleDomain;
      script.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(script);
      return () => script.remove();
    }

    if (gaId) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', { anonymize_ip: true });
      `;
      document.head.appendChild(script2);
      return () => { script1.remove(); script2.remove(); };
    }
   
  }, [consent]);

  return null;
}
