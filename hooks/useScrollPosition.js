import { useEffect, useState } from "react";

/**
 * React hook that returns the current vertical scroll offset of the window.
 * Subscribes to the scroll event and cleans up on unmount.
 *
 * @returns {number} The current scroll position in pixels from the top of the document.
 */
export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      setScrollPosition(currentPosition);
    };

    // Capture the initial position so callers have an up-to-date value on first render.
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // Remove listener to avoid leaks when the component using this hook unmounts.
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}
