// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { JSX } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Home, Laptop2, LogOut, Moon, Settings, Sun, User } from "lucide-react";

// <== NAVBAR COMPONENT ==>
const Navbar = (): JSX.Element => {
  // THEME SETTING FUNCTION
  const { setTheme } = useTheme();
  // RETURNING THE NAVBAR CONTENT
  return (
    // MAIN CONTAINER
    <nav className="flex items-center justify-between p-4 sticky top-0 z-50 left-0 right-0 bg-sidebar mb-4 dark:bg-sidebar-dark">
      {/* LEFT SECTION */}
      <SidebarTrigger className="cursor-pointer" />
      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        {/* HOME LINK */}
        <Link className="cursor-pointer" title="Dashboard" href="/">
          <Home className="w-6 h-6" />
        </Link>
        {/* THEME TOGGLER */}
        <div className="cursor-pointer" title="Toggle Theme">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer" asChild>
              <button className="outline-none flex items-center justify-center">
                <Sun className="hidden dark:block" />
                <Moon className="block dark:hidden" />
                <span className="sr-only">Toggle theme</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={10}>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setTheme("light")}
              >
                <Sun strokeWidth={2.5} /> Light
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setTheme("dark")}
              >
                <Moon strokeWidth={2.5} /> Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setTheme("system")}
              >
                <Laptop2 strokeWidth={2.5} /> System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* PROFILE AVATAR MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer" asChild>
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/166436609" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User strokeWidth={2.5} /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings strokeWidth={2.5} /> Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                variant="destructive"
              >
                <LogOut strokeWidth={2.5} /> Logout
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

// <== EXPORTING THE NAVBAR COMPONENT ==>
export default Navbar;
