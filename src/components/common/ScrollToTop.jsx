import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If you're navigating to a hash on the SAME page, you might want to keep default behavior.
    // For route changes, always scroll to top.
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, search, hash]);

  return null;
}