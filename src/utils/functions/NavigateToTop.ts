import { useLayoutEffect } from "react";

export const NavigateToTop = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
