// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { DollarSign } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

// <== CHART DATA ==>
const CHART_DATA = [
  { month: "January", total: 186, successful: 80 },
  { month: "February", total: 305, successful: 200 },
  { month: "March", total: 237, successful: 120 },
  { month: "April", total: 273, successful: 150 },
  { month: "May", total: 209, successful: 130 },
  { month: "June", total: 214, successful: 140 },
];

// <== CHART CONFIG ==>
const CHART_CONFIG = {
  total: {
    label: "Total",
    color: "var(--chart-1)",
  },
  successful: {
    label: "Successful",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

// <== APP BAR CHART COMPONENT ==>
const AppBarChart = () => {
  // RETURNING THE APP BAR CHART
  return (
    // MAIN CONTAINER
    <div>
      {/* TITLE */}
      <h1 className="flex items-center gap-1 text-lg mb-6 font-semibold">
        <DollarSign /> <span>Total Transactions</span>
      </h1>
      {/* CHART */}
      <ChartContainer config={CHART_CONFIG} className="min-h-50 w-full">
        <BarChart accessibilityLayer data={CHART_DATA}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartLegend content={<ChartLegendContent />} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="total" fill="var(--color-total)" radius={4} />
          <Bar dataKey="successful" fill="var(--color-successful)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

// <== EXPORTING THE APP BAR CHART COMPONENT ==>
export default AppBarChart;
