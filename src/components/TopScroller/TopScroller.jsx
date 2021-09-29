import { useEffect } from "react";
import { useLocation } from "react-router";

export default function TopScroller() {
  const { pathname } = useLocation();
  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [pathname]
  );
  return null;
}
