import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // useLocation detects whenever the URL changes (e.g., from / to /about)
  const { pathname } = useLocation();

  useEffect(() => {
    // This tells the browser to jump to the very top-left of the page
    window.scrollTo(0, 0);
  }, [pathname]); // This runs every time the pathname changes

  return null; // This component doesn't render anything visible
};

export default ScrollToTop;