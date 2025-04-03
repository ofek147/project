import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  year: number;
  israel: number;
  green: number;
  land: number;
}

interface RechartsChartProps {
  data?: DataPoint[];
  className?: string;
}

const RechartsChart = ({ data = defaultData }: RechartsChartProps) => {
  const formatNumberWithCommas = (number: number) => {
    return number.toLocaleString("en-US");
  };

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: any[];
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-2xl border-2 rounded-md">
          <p className="font-bold">{label}</p>
          {payload.map((entry, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-2"
            >
              <span className="font-semibold" style={{ color: entry.color }}>
                {formatNumberWithCommas(entry.value)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const CustomActiveDot = (props: any) => {
    const { cx, cy, fill } = props;
    return <circle cx={cx} cy={cy} r={5} fill={fill} strokeWidth={2} />;
  };

  const maxValue = Math.max(
    ...data.flatMap((item) => [item.israel, item.green, item.land])
  );
  const maxYAxis = Math.ceil(maxValue / 1000000) * 1000000;

  return (
    <div>
      <div className="h-72 md:h-80 p-4">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 18 }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              domain={[0, maxYAxis]}
              tick={{ fontSize: 18 }}
              padding={{ top: 20, bottom: 20 }}
              tickMargin={50}
              width={60}
              tickFormatter={(value) => `${value / 1000000} מ' ₪`}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#ddd",
                strokeWidth: 1,
              }}
            />
            <Legend
              align="right"
              verticalAlign="bottom"
              iconType="plainline"
              iconSize={20}
              formatter={(value) => {
                return value === "israel"
                  ? "ישראל"
                  : value === "green"
                  ? "השכונה הירוקה"
                  : "שטחי הפרויקט";
              }}
            />
            <Line
              type="monotone"
              dataKey="israel"
              stroke="#555555"
              strokeWidth={3.5}
              dot={false}
              activeDot={CustomActiveDot}
            />
            <Line
              type="monotone"
              dataKey="green"
              stroke="#00bb7e"
              strokeWidth={3.5}
              dot={false}
              activeDot={CustomActiveDot}
            />
            <Line
              type="monotone"
              dataKey="land"
              stroke="#3366cc"
              strokeWidth={3.5}
              dot={false}
              activeDot={CustomActiveDot}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="text-xs p-2 text-left">תאריך עדכון אחרון: 22.5.2024</div>
    </div>
  );
};

const defaultData: DataPoint[] = [
  { year: 2010, israel: 1000000, green: 1800000, land: 2200000 },
  { year: 2011, israel: 1000000, green: 1700000, land: 2100000 },
  { year: 2012, israel: 1050000, green: 1900000, land: 2300000 },
  { year: 2013, israel: 1100000, green: 2000000, land: 2400000 },
  { year: 2014, israel: 1150000, green: 2100000, land: 2500000 },
  { year: 2015, israel: 1200000, green: 2200000, land: 2600000 },
  { year: 2016, israel: 1300000, green: 2300000, land: 2700000 },
  { year: 2017, israel: 1400000, green: 2400000, land: 2800000 },
  { year: 2018, israel: 1500000, green: 2500000, land: 2900000 },
  { year: 2019, israel: 1600000, green: 2600000, land: 3000000 },
  { year: 2020, israel: 1700000, green: 2800000, land: 3200000 },
  { year: 2021, israel: 1800000, green: 3200000, land: 3400000 },
  { year: 2022, israel: 2000000, green: 3700000, land: 3500000 },
  { year: 2023, israel: 2100000, green: 3500000, land: 3600000 },
  { year: 2024, israel: 2200000, green: 3300000, land: 3700000 },
];

export default RechartsChart;
