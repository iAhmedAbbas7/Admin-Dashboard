// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import { ColumnDef } from "@tanstack/react-table";

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
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "username",
    header: "User",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
