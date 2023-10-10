import { PieChart } from "@mui/x-charts";

const height = 300;

const Pie = (props: { data; showLegend: boolean; colors?: string[] }) => {
  const { data, showLegend, colors } = props;

  return showLegend ? (
    <PieChart
      series={[
        {
          data,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          cx: 150,
          cy: 150,
        },
      ]}
      height={height}
      width={height + 150}
      colors={colors && colors}
    />
  ) : (
    <PieChart
      series={[
        {
          data,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          cx: 150,
          cy: 150,
        },
      ]}
      height={height}
      width={height + 150}
      legend={{ hidden: true }}
      colors={colors && colors}
    />
  );
};

export { Pie };
