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
import { Button } from "@/src/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/src/components/ui/checkbox";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

// <== PAYMENT TYPE ==>
export type Payment = {
  // <== ID ==>
  id: string;
  // <== AMOUNT ==>
  amount: number;
  // <== USERNAME ==>
  username: string;
  // <== EMAIL ==>
  email: string;
  // <== STATUS ==>
  status: "pending" | "processing" | "success" | "failed";
};

// <== COLUMNS ==>
export const columns: ColumnDef<Payment>[] = [
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
        status === "pending"
          ? "bg-yellow-100 text-yellow-900"
          : status === "processing"
            ? "bg-blue-100 text-blue-900"
            : status === "success"
              ? "bg-green-100 text-green-900"
              : "bg-red-100 text-red-900";
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
    accessorKey: "username",
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
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      // GETTING THE PAYMENT
      const payment = row.original;
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
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
