// TODO: Need to make this hook more reusable and flexible
"use client";

import { useEffect, useState } from "react";
import defaultTheme from "tailwindcss/defaultTheme";

const { screens } = defaultTheme;

const useTailwindBreakpoint = (query: keyof typeof screens): boolean => {
  const [isMatch, setMatch] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = `(max-width: ${screens[query]})`;
    const matchQueryList = window.matchMedia(mediaQuery);

    const onChange = (e: MediaQueryListEvent) => setMatch(e.matches);

    setMatch(matchQueryList.matches);
    matchQueryList.addEventListener("change", onChange);
    return () => matchQueryList.removeEventListener("change", onChange);
  }, [query]);

  return isMatch;
};

export default useTailwindBreakpoint;
