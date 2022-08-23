import { useState, useEffect } from "react";

export const useDetectOutsideClick = (ref, initialState) => {
  const [expanded, setExpanded] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      console.log(ref.current);
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setExpanded(!expanded);
      }
    };

    if (expanded) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [expanded, ref]);

  return [expanded, setExpanded];
};
