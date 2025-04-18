"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "diagnosed", visitors: 25, fill: "var(--chart-2)" },
  { browser: "undiagnosed", visitors: 75, fill: "var(--chart-3)" },
];

const chartConfig = {
  disgnosed: {
    label: "Dianodes",
  },
  undiagnosed: {
    label: "Undiagnosed",
  },
} satisfies ChartConfig;

export function Pie_Chart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={60}
          strokeWidth={5}
        >
        
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
