import { useEffect, useRef, useState } from 'react';


export default function useCountUp(target, steps = 24, intervalMs = 30) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasBeenVisible = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function animate() {
      let cur = 0;
      const inc = target / steps;
      const timer = setInterval(() => {
        cur += inc;
        if (cur >= target) {
          setValue(target);
          clearInterval(timer);
        } else {
          setValue(Math.floor(cur));
        }
      }, intervalMs);
      return timer;
    }

    if (hasBeenVisible.current) {
      const timer = animate();
      return () => clearInterval(timer);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasBeenVisible.current = true;
            animate();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
    
  }, [target]);

  return [ref, value];
}
