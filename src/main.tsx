import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"

// Initialize automatic scroll animations for elements with `data-animate`.
function initAutoAnimate() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        const delay = el.getAttribute('data-animate-delay');
        if (delay) el.style.transitionDelay = delay;
        el.classList.add('in-view');
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  const observeAll = () => {
    document.querySelectorAll('[data-animate]:not(.is-observed)').forEach((node) => {
      const el = node as HTMLElement;
      el.classList.add('is-observed');
      io.observe(el);
    });
  };

  // Observe existing nodes on load
  if (document.readyState === 'complete' || document.readyState === 'interactive') observeAll();
  else window.addEventListener('DOMContentLoaded', observeAll);

  // Watch for dynamic content (route changes, lazy-loaded sections)
  const mo = new MutationObserver(observeAll);
  mo.observe(document.body, { childList: true, subtree: true });
}

initAutoAnimate();

createRoot(document.getElementById("root")!).render(
  <App />
)
