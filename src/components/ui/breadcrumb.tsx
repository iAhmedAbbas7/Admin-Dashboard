// <== IMPORTS ==>
import * as React from "react";
import { Slot } from "radix-ui";
import { cn } from "@/src/lib/utils";
import { ChevronRight, MoreHorizontal } from "lucide-react";

// <== BREADCRUMB COMPONENT ==>
function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  // RETURNING THE BREADCRUMB
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

// <== BREADCRUMB LIST COMPONENT ==>
function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  // RETURNING THE BREADCRUMB LIST
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm wrap-break-word sm:gap-2.5",
        className,
      )}
      {...props}
    />
  );
}

// <== BREADCRUMB ITEM COMPONENT ==>
function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  // RETURNING THE BREADCRUMB ITEM
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

// <== BREADCRUMB LINK COMPONENT ==>
function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  // DETERMINING THE COMPONENT TO RENDER
  const Comp = asChild ? Slot.Root : "a";
  // RETURNING THE BREADCRUMB LINK
  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  );
}

// <== BREADCRUMB PAGE COMPONENT ==>
function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  // RETURNING THE BREADCRUMB PAGE
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  );
}

// <== BREADCRUMB SEPARATOR COMPONENT ==>
function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  // RETURNING THE BREADCRUMB SEPARATOR
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

// <== BREADCRUMB ELLIPSIS COMPONENT ==>
function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  // RETURNING THE BREADCRUMB ELLIPSIS
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

// <== EXPORTING THE BREADCRUMB COMPONENTS ==>
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
