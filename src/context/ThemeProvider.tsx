// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// <== THEME PROVIDER COMPONENT ==>
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // RETURNING THE THEME PROVIDER
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
