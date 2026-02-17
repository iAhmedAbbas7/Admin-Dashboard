// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import * as React from "react";
import { cn } from "@/src/lib/utils";
import { Separator as SeparatorPrimitive } from "radix-ui";

// <== SEPARATOR COMPONENT ==>
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  // RETURNING THE SEPARATOR
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}

// <== EXPORTING THE SEPARATOR COMPONENT ==>
export { Separator };
