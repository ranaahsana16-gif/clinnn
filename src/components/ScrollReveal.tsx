import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollReveal() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top on page navigation, unless there's a hash
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Once visible, we can unobserve if we want it to stay permanent (standard behavior)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // Trigger as soon as 5% of the element is visible
        rootMargin: '0px 0px -20px 0px',
      }
    );

    // Add a slight delay to allow React to render the DOM
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname, hash]);

  return null;
}
