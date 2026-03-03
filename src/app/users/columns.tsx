// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

// <== USER TYPE ==>
export type User = {
  // <== ID ==>
  id: string;
  // <== AVATAR ==>
  avatar: string;
  // <== FULLNAME ==>
  fullName: string;
  // <== EMAIL ==>
  email: string;
  // <== STATUS ==>
  status: "active" | "inactive";
};

// <== COLUMNS ==>
export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      // GETTING THE STATUS
      const status = row.getValue("status");
      // GETTING THE STATUS CLASS
      const statusClass =
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800";
      return (
        <span
          className={`uppercase font-semibold w-fit flex items-center justify-center rounded-full px-2 py-1 text-xs ${statusClass}`}
        >
          <span>{status as string}</span>
        </span>
      );
    },
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      // GETTING THE USER
      const user = row.original;
      // RETURNING THE AVATAR
      return (
        <div className="w-9 h-9 relative">
          <Image
            src={user.avatar}
            alt={user.fullName}
            fill
            className="rounded-full object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "fullName",
    header: "User",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      // GETTING THE USER
      const user = row.original;
      // RETURNING THE DROPDOWN MENU
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy User ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/users/${user.id}`}>View User</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
