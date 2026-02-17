// <== IMPORTS ==>
import { useEffect, useState } from "react";

// <== MOBILE BREAKPOINT DEFINITION ==>
const MOBILE_BREAKPOINT = 768;

// <== CUSTOM HOOK TO DETECT MOBILE VIEWPORT ==>
export function useIsMobile() {
  // STATE TO TRACK IF THE VIEWPORT IS MOBILE
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  // EFFECT TO SET UP MEDIA QUERY LISTENER
  useEffect(() => {
    // SETTING UP MEDIA QUERY TO DETECT MOBILE VIEWPORT
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    // FUNCTION TO UPDATE THE IS-MOBILE STATE BASED ON THE MEDIA QUERY
    const onChange = () => {
      // SETTING THE IS-MOBILE STATE BASED ON THE CURRENT VIEWPORT WIDTH
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    // INITIAL CHECK AND SETUP OF THE MEDIA QUERY LISTENER
    onChange();
    // ADDING THE EVENT LISTENER TO UPDATE THE IS-MOBILE STATE ON VIEWPORT CHANGE
    mql.addEventListener("change", onChange);
    // CLEANUP FUNCTION TO REMOVE THE EVENT LISTENER WHEN THE COMPONENT UNMOUNTS
    return () => mql.removeEventListener("change", onChange);
  }, []);
  // RETURNING TRUE IF THE VIEWPORT IS MOBILE, FALSE OTHERWISE
  return !!isMobile;
}
