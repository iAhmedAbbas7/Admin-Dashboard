// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import * as React from "react";
import { cn } from "@/lib/utils";

// <== TABLE COMPONENT ==>
function Table({ className, ...props }: React.ComponentProps<"table">) {
  // RETURNING THE TABLE CONTENT
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}

// <== TABLE HEAD COMPONENT ==>
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  // RETURNING THE TABLE HEADER CONTENT
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}

// <== TABLE BODY COMPONENT ==>
function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  // RETURNING THE TABLE BODY CONTENT
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

// <== TABLE FOOTER COMPONENT ==>
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  // RETURNING THE TABLE FOOTER CONTENT
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

// <== TABLE ROW COMPONENT ==>
function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  // RETURNING THE TABLE ROW CONTENT
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className,
      )}
      {...props}
    />
  );
}

// <== TABLE HEAD COMPONENT ==>
function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  // RETURNING THE TABLE HEAD CONTENT
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}

// <== TABLE CELL COMPONENT ==>
function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  // RETURNING THE TABLE CELL CONTENT
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}

// <== TABLE CAPTION COMPONENT ==>
function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  // RETURNING THE TABLE CAPTION CONTENT
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}

// <== EXPORTING THE TABLE COMPONENTS ==>
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
