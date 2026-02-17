// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/src/components/ui/chart";
import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";
import { Globe, TrendingUp } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/card";

// <== CHART DATA ==>
const CHART_DATA = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

// <== CHART CONFIG ==>
const CHART_CONFIG = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

// <== APP PIE CHART COMPONENT ==>
const AppPieChart = () => {
  // CALCULATING THE TOTAL VISITORS
  const totalVisitors = useMemo(() => {
    // RETURNING THE TOTAL VISITORS
    return CHART_DATA.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);
  // RETURNING THE APP PIE CHART
  return (
    // MAIN CONTAINER
    <Card className="w-full bg-primary-foreground shadow-none rounded-none border-none p-0">
      <div>
        {/* TITLE */}
        <h1 className="bg-primary-foreground flex items-center gap-1 text-lg mb-6 font-semibold">
          <Globe /> <span>Browser Usage</span>
        </h1>
        {/* CARD CONTENT */}
        <CardContent className="bg-primary-foreground shadow-none rounded-none border-none">
          {/* CHART */}
          <ChartContainer
            config={CHART_CONFIG}
            className="mx-auto aspect-square max-h-62.5"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={CHART_DATA}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Visitors
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        {/* CARD FOOTER */}
        <CardFooter className="flex-col gap-2 text-sm bg-primary-foreground ">
          <div className="flex items-center gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

// <== EXPORTING THE APP PIE CHART COMPONENT ==>
export default AppPieChart;
