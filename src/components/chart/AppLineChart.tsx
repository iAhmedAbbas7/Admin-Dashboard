// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Activity } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

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
    color: "var(--chart-3)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

// <== APP LINE CHART COMPONENT ==>
const AppLineChart = () => {
  // RETURNING THE APP LINE CHART CONTENT
  return (
    // MAIN CONTAINER
    <div>
      {/* TITLE */}
      <h1 className="bg-primary-foreground flex items-center gap-1 text-lg mb-6 font-semibold">
        <Activity /> <span>User Activity</span>
      </h1>
      {/* CHART */}
      <ChartContainer config={CHART_CONFIG}>
        <LineChart
          accessibilityLayer
          data={CHART_DATA}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

// <== EXPORTING THE APP LINE CHART COMPONENT ==>
export default AppLineChart;
