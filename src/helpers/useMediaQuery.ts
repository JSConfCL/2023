import React, { useState, useEffect } from "react";

export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      // TODO: Fix event
      const handler = (event: any) => setMatches(event.matches);
      mediaQuery.addEventListener("change", handler, { passive: true });
      return () => mediaQuery.removeEventListener("change", handler);
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return matches;
}
