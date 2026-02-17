// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import * as React from "react";
import { cn } from "@/src/lib/utils";
import { HoverCard as HoverCardPrimitive } from "radix-ui";

// <== HOVER CARD COMPONENT ==>
function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  // RETURNING THE HOVER CARD
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

// <== HOVER CARD TRIGGER COMPONENT ==>
function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  // RETURNING THE HOVER CARD TRIGGER
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

// <== HOVER CARD CONTENT COMPONENT ==>
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  // RETURNING THE HOVER CARD CONTENT
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

// <== EXPORTING THE HOVER CARD COMPONENTS ==>
export { HoverCard, HoverCardTrigger, HoverCardContent };
