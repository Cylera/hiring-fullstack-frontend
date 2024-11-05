import { ResponsiveBar } from "@nivo/bar";
import React, { useMemo } from "react";

export type BarChartProps = {
  data: { [key: string]: number };
  minValue?: number;
  maxValue?: number;
  barBorderRadius?: number;
  valueFormatter?: (value: number) => string;
  labelFormatter?: (label: string) => string;
  barColor?: string;
};

/**
 * A vertical bar chart to display data.
 * @param `data` - A dictionary of data to display where the key is the label and the value is the height of the bar.
 * @param `minValue` - The minimum value of the y-axis.
 * @param `maxValue` - The maximum value of the y-axis.
 * @param `barBorderRadius` - The border radius of the bars.
 * @param `valueFormatter` - A function to format the value labels.
 * @param `labelFormatter` - A function to format the label axis.
 * @param `barColor` - The color of the bars.
 */
export const BarChart: React.FC<BarChartProps> = ({
  data,
  minValue = 0,
  maxValue = 10,
  barBorderRadius = 4,
  valueFormatter,
  labelFormatter,
  barColor = "#0981c3",
}) => {
  const chartData = useMemo(
    () =>
      Object.entries(data).map(([id, value]) => ({
        label: `Reg ${id}`,
        value,
      })),
    [data]
  );
  return (
    <ResponsiveBar
      data={chartData}
      indexBy={"label"}
      keys={["value"]}
      minValue={minValue}
      maxValue={Math.max(...chartData.map(({ value }) => value)) || maxValue}
      borderRadius={barBorderRadius}
      tooltipLabel={({ data: { label } }) => `${label}`}
      valueFormat={valueFormatter}
      colors={[barColor]}
      padding={0.5}
      margin={{ bottom: 45, left: 65, top: 25 }}
      theme={{
        grid: {
          line: {
            stroke: "gray",
            strokeDasharray: "2 2",
          },
        },
        axis: {
          ticks: {
            text: {
              fontSize: 12,
              fontWeight: 600,
              fontStyle: "normal",
              fill: "gray",
              opacity: 0.5,
              textAlign: "left",
            },
          },
        },
      }}
      axisLeft={{
        tickValues: 4,
        format: valueFormatter,
      }}
      axisBottom={{
        tickSize: 0,
        tickPadding: 16,
        format: labelFormatter,
      }}
      enableLabel={false}
    />
  );
};
