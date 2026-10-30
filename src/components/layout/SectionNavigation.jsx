import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SectionNavigation() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (pathname === "/" && hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        block: "start",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null;
}
