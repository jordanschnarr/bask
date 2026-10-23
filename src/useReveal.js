import { useEffect, useRef, useState } from 'react';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);       // it's in view → trigger animation
          observer.unobserve(el); // stop watching (animate once, not every scroll)
        }
      },
      { threshold: 0.15 }          // fire when 15% of the card is visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default useReveal;
