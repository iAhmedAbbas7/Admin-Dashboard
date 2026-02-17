// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import * as React from "react";
import { cn } from "@/src/lib/utils";
import { Popover as PopoverPrimitive } from "radix-ui";

// <== POPOVER COMPONENT ==>
function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  // RETURNING THE POPOVER
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

// <== POPOVER TRIGGER COMPONENT ==>
function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  // RETURNING THE POPOVER TRIGGER
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

// <== POPOVER CONTENT COMPONENT ==>
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  // RETURNING THE POPOVER CONTENT
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

// <== POPOVER ANCHOR COMPONENT ==>
function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  // RETURNING THE POPOVER ANCHOR
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

// <== POPOVER HEADER COMPONENT ==>
function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE POPOVER HEADER
  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-1 text-sm", className)}
      {...props}
    />
  );
}

// <== POPOVER TITLE COMPONENT ==>
function PopoverTitle({ className, ...props }: React.ComponentProps<"h2">) {
  // RETURNING THE POPOVER TITLE
  return (
    <div
      data-slot="popover-title"
      className={cn("font-medium", className)}
      {...props}
    />
  );
}

// <== POPOVER DESCRIPTION COMPONENT ==>
function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  // RETURNING THE POPOVER DESCRIPTION
  return (
    <p
      data-slot="popover-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

// <== EXPORTING THE POPOVER COMPONENTS ==>
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
};
