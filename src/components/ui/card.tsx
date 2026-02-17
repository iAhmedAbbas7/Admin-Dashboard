// <== IMPORTS ==>
import * as React from "react";
import { cn } from "@/src/lib/utils";

// <== CARD COMPONENT ==>
function Card({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE CARD CONTENT
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

// <== CARD HEADER COMPONENT ==>
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE CARD HEADER
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

// <== CARD TITLE COMPONENT ==>
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE CARD TITLE
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

// <== CARD DESCRIPTION COMPONENT ==>
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE CARD DESCRIPTION
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

// <== CARD ACTION COMPONENT ==>
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE CARD ACTION
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

// <== CARD CONTENT COMPONENT ==>
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE CARD CONTENT
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

// <== CARD FOOTER COMPONENT ==>
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE CARD FOOTER
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

// <== EXPORTING THE CARD COMPONENTS ==>
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
