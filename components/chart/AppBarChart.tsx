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
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

// <== CHART CONFIG ==>
const CHART_CONFIG = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
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
        <DollarSign /> <span>Total Revenue</span>
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
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

// <== EXPORTING THE APP BAR CHART COMPONENT ==>
export default AppBarChart;
