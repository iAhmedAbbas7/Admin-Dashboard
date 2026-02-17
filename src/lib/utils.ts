// <== IMPORTS ==>
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

// <== TAILWIND MERGE WITH CLSX UTILITY FUNCTION ==>
export function cn(...inputs: ClassValue[]) {
  // MERGE CLASSNAMES USING TAILWIND MERGE AND CLSX
  return twMerge(clsx(inputs));
}
