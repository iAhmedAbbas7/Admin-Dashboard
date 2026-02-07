// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import * as React from "react";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";
import { PanelLeftIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { cva, type VariantProps } from "class-variance-authority";

// <== SIDEBAR WIDTH ==>
const SIDEBAR_WIDTH = "16rem";
// <== SIDEBAR WIDTH ON ICON ==>
const SIDEBAR_WIDTH_ICON = "3rem";
// <== SIDEBAR WIDTH ON MOBILE ==>
const SIDEBAR_WIDTH_MOBILE = "18rem";
// <== SIDEBAR KEYBOARD SHORTCUT ==>
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
// <== SIDEBAR COOKIE NAME ==>
const SIDEBAR_COOKIE_NAME = "sidebar_state";
// <== SIDEBAR COOKIE MAX AGE (7 DAYS) ==>
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

// <== SIDEBAR CONTEXT PROPS TYPE ==>
type SidebarContextProps = {
  // <== SIDEBAR STATE (EXPANDED OR COLLAPSED) ==>
  state: "expanded" | "collapsed";
  // <== SIDEBAR OPEN STATE ==>
  open: boolean;
  // <== FUNCTION TO SET THE SIDEBAR OPEN STATE ==>
  setOpen: (open: boolean) => void;
  // <== SIDEBAR OPEN STATE ON MOBILE ==>
  openMobile: boolean;
  // <== FUNCTION TO SET THE SIDEBAR OPEN STATE ON MOBILE ==>
  setOpenMobile: (open: boolean) => void;
  // <== BOOLEAN TO CHECK IF THE DEVICE IS MOBILE ==>
  isMobile: boolean;
  // <== FUNCTION TO TOGGLE THE SIDEBAR ==>
  toggleSidebar: () => void;
};

// <== CREATING THE SIDEBAR CONTEXT ==>
const SidebarContext = React.createContext<SidebarContextProps | null>(null);

// <== CUSTOM HOOK TO USE THE SIDEBAR CONTEXT ==>
function useSidebar() {
  // GETTING THE SIDEBAR CONTEXT
  const context = React.useContext(SidebarContext);
  // THROWING AN ERROR IF THE HOOK IS USED OUTSIDE THE SIDEBAR PROVIDER
  if (!context) {
    // THROWING AN ERROR IF THE HOOK IS USED OUTSIDE THE SIDEBAR PROVIDER
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  // RETURNING THE SIDEBAR CONTEXT
  return context;
}

// <== SIDEBAR PROVIDER COMPONENT ==>
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  // CHECKING IF THE DEVICE IS MOBILE
  const isMobile = useIsMobile();
  // STATE TO CONTROL THE MOBILE SIDEBAR OPEN STATE
  const [openMobile, setOpenMobile] = React.useState(false);
  // STATE TO CONTROL THE SIDEBAR OPEN STATE
  const [_open, _setOpen] = React.useState(defaultOpen);
  // DETERMINING THE OPEN STATE OF THE SIDEBAR (CONTROLLED OR UNCONTROLLED)
  const open = openProp ?? _open;
  // FUNCTION TO SET THE OPEN STATE OF THE SIDEBAR, ALSO SETS A COOKIE TO REMEMBER THE STATE
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      // DETERMINING THE NEW OPEN STATE
      const openState = typeof value === "function" ? value(open) : value;
      // SETTING THE OPEN STATE (CONTROLLED OR UNCONTROLLED)
      if (setOpenProp) {
        // UPDATING THE OPEN STATE USING THE CONTROLLED PROP FUNCTION
        setOpenProp(openState);
      } else {
        // UPDATING THE OPEN STATE USING THE INTERNAL STATE FUNCTION
        _setOpen(openState);
      }
      // SETTING A COOKIE TO REMEMBER THE OPEN STATE OF THE SIDEBAR
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );
  // FUNCTION TO TOGGLE THE SIDEBAR OPEN STATE, USES THE setOpen FUNCTION
  const toggleSidebar = React.useCallback(() => {
    // TOGGLES THE SIDEBAR OPEN STATE, IF ON MOBILE TOGGLES THE MOBILE SIDEBAR INSTEAD
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);
  // EFFECT TO ADD A KEYBOARD SHORTCUT TO TOGGLE THE SIDEBAR
  React.useEffect(() => {
    // HANDLER FOR THE KEYDOWN EVENT TO TOGGLE THE SIDEBAR WHEN THE KEYBOARD SHORTCUT IS PRESSED
    const handleKeyDown = (event: KeyboardEvent) => {
      // CHECKING IF THE PRESSED KEY IS THE SIDEBAR KEYBOARD SHORTCUT AND IF META OR CTRL KEY IS ALSO PRESSED
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        // PREVENTING THE DEFAULT ACTION OF THE KEY COMBINATION
        event.preventDefault();
        // CALLING THE TOGGLE SIDEBAR FUNCTION
        toggleSidebar();
      }
    };
    // ADDING THE KEYDOWN EVENT LISTENER
    window.addEventListener("keydown", handleKeyDown);
    // RETURNING A CLEANUP FUNCTION TO REMOVE THE EVENT LISTENER
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  // DETERMINING THE SIDEBAR STATE (EXPANDED OR COLLAPSED) BASED ON THE OPEN STATE
  const state = open ? "expanded" : "collapsed";
  // MEMOIZING THE CONTEXT VALUE TO AVOID UNNECESSARY RE-RENDERS OF THE CONTEXT CONSUMERS
  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );
  // RETURNING THE SIDEBAR PROVIDER WITH THE CONTEXT VALUE AND THE CHILDREN
  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

// <== SIDEBAR COMPONENT ==>
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}) {
  // GETTING THE SIDEBAR CONTEXT VALUES USING THE CUSTOM HOOK
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  // IF THE SIDEBAR IS NOT COLLAPSIBLE, RENDER A SIMPLE DIV WITH THE SIDEBAR CONTENT
  if (collapsible === "none") {
    // RETURNING THE SIDEBAR CONTENT IN A DIV WITH THE APPROPRIATE CLASSES AND PROPS
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
  // IF THE CURRENT WIDTH IS MOBILE, RENDER THE SIDEBAR AS A SHEET (OVERLAY) INSTEAD OF A FIXED SIDEBAR
  if (isMobile) {
    // RETURNING THE SIDEBAR AS A SHEET WITH THE APPROPRIATE CLASSES, PROPS AND CONTENT
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }
  // RETURNING THE SIDEBAR AS A FIXED ELEMENT WITH THE APPROPRIATE CLASSES, PROPS AND CONTENT
  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// <== SIDEBAR TRIGGER COMPONENT ==>
function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  // GETTING THE TOGGLE FUNCTION FROM THE SIDEBAR CONTEXT USING THE CUSTOM HOOK
  const { toggleSidebar } = useSidebar();
  // RETURNING A BUTTON THAT TRIGGERS THE TOGGLE FUNCTION ON CLICK, WITH THE APPROPRIATE CLASSES AND PROPS
  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

// <== SIDEBAR RAIL COMPONENT ==>
function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  // GETTING THE TOGGLE FUNCTION FROM THE SIDEBAR CONTEXT USING THE CUSTOM HOOK
  const { toggleSidebar } = useSidebar();
  // RETURNING A BUTTON THAT TRIGGERS THE TOGGLE FUNCTION ON CLICK, WITH THE APPROPRIATE CLASSES AND PROPS
  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className,
      )}
      {...props}
    />
  );
}

// <== SIDEBAR INSET COMPONENT ==>
function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  // RETURNING THE SIDEBAR INSET CONTENT
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className,
      )}
      {...props}
    />
  );
}

// <== SIDEBAR INPUT COMPONENT ==>
function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  // RETURNING THE SIDEBAR INPUT CONTENT
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  );
}

// <== SIDEBAR HEADER COMPONENT ==>
function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE SIDEBAR HEADER CONTENT
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

// <== SIDEBAR FOOTER COMPONENT ==>
function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE SIDEBAR FOOTER CONTENT
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

// <== SIDEBAR SEPARATOR COMPONENT ==>
function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  // RETURNING THE SIDEBAR SEPARATOR CONTENT
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  );
}

// <== SIDEBAR CONTENT COMPONENT ==>
function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE SIDEBAR CONTENT
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}

// <== SIDEBAR GROUP COMPONENT ==>
function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  // RETURNING THE SIDEBAR GROUP CONTENT
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
}

// <== SIDEBAR GROUP LABEL COMPONENT ==>
function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  // DETERMINING THE COMPONENT TO RENDER
  const Comp = asChild ? Slot.Root : "div";
  // RETURNING THE SIDEBAR GROUP LABEL CONTENT
  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

// <== SIDEBAR GROUP ACTION COMPONENT ==>
function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  // DETERMINING THE COMPONENT TO RENDER
  const Comp = asChild ? Slot.Root : "button";
  // RETURNING THE SIDEBAR GROUP ACTION CONTENT
  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

// <== SIDEBAR GROUP CONTENT COMPONENT ==>
function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // RETURNING THE SIDEBAR GROUP CONTENT
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  );
}

// <== SIDEBAR MENU COMPONENT ==>
function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  // RETURNING THE SIDEBAR MENU CONTENT
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  );
}

// <== SIDEBAR MENU ITEM COMPONENT ==>
function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  // RETURNING THE SIDEBAR MENU ITEM CONTENT
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
}

// <== SIDEBAR MENU BUTTON VARIANTS ==>
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// <== SIDEBAR MENU BUTTON COMPONENT ==>
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  // DETERMINING THE COMPONENT TO RENDER
  const Comp = asChild ? Slot.Root : "button";
  // GETTING THE SIDEBAR CONTEXT VALUES USING THE CUSTOM HOOK
  const { isMobile, state } = useSidebar();
  // CREATING THE BUTTON ELEMENT
  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );
  // IF THERE IS NO TOOLTIP
  if (!tooltip) {
    // RETURNING THE BUTTON WITHOUT A TOOLTIP
    return button;
  }
  // IF THE TOOLTIP IS A STRING
  if (typeof tooltip === "string") {
    // SETTING THE TOOLTIP CONTENT
    tooltip = {
      children: tooltip,
    };
  }
  // RETURNING THE BUTTON WITH A TOOLTIP
  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
}

// <== SIDEBAR MENU ACTION COMPONENT ==>
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  showOnHover?: boolean;
}) {
  // DETERMINING THE COMPONENT TO RENDER
  const Comp = asChild ? Slot.Root : "button";
  // GETTING THE SIDEBAR CONTEXT VALUES USING THE CUSTOM HOOK
  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

// <== SIDEBAR MENU BADGE COMPONENT ==>
function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // GETTING THE SIDEBAR CONTEXT VALUES USING THE CUSTOM HOOK
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

// <== SIDEBAR MENU SKELETON COMPONENT ==>
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean;
}) {
  // STATE TO CONTROL THE WIDTH OF THE SKELETON, INITIALIZED TO 50%
  const [width, setWidth] = React.useState("50%");
  // EFFECT TO SET A RANDOM WIDTH FOR THE SKELETON TO MAKE IT LOOK MORE REALISTIC
  React.useEffect(() => {
    // SETTING A RANDOM WIDTH BETWEEN 50% AND 90% FOR THE SKELETON
    setWidth(`${Math.floor(Math.random() * 40) + 50}%`);
  }, []);
  // RETURNING THE SIDEBAR MENU SKELETON CONTENT
  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

// <== SIDEBAR MENU SUB COMPONENT ==>
function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  // RETURNING THE SIDEBAR MENU SUB CONTENT
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

// <== SIDEBAR MENU SUB ITEM COMPONENT ==>
function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  // RETURNING THE SIDEBAR MENU SUB ITEM CONTENT
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  );
}

// <== SIDEBAR MENU SUB BUTTON COMPONENT ==>
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
}) {
  // DETERMINING THE COMPONENT TO RENDER
  const Comp = asChild ? Slot.Root : "a";
  // RETURNING THE SIDEBAR MENU SUB BUTTON CONTENT
  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

// <== EXPORTING THE SIDEBAR COMPONENTS ==>
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
