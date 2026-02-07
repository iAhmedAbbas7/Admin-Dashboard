// <== IMPORTS ==>
import { cn } from "@/lib/utils";

// <== SKELETON COMPONENT ==>
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE SKELETON
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

// <== EXPORTING THE SKELETON COMPONENT ==>
export { Skeleton };
